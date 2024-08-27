import { Header } from "@/app/components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@/app/components/Highlight";
import { ButtonIcon } from "@/app/components/ButtonIcon";
import { Input } from "@/app/components/Input";
import { Filter } from "@/app/components/Filter";
import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PlayerCard } from "@/app/components/PlayerCard";
import { ListEmpty } from "@/app/components/ListEmpty";
import { Button } from "@/app/components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@/app/utils/AppError";
import { AddPlayerByGroup } from "@/app/storage/players/addPlayerByGroup";
import { PlayersGetByGroupAndTeam } from "@/app/storage/players/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@/app/storage/players/playerStorageDTO";
import React from "react";
import { RemovePlayerByGroup } from "@/app/storage/players/removePlayerByGroup";
import { GroupDeleteByName } from "@/app/storage/group/groupDeleteByName";
type RouteParams = {
    group: string
}
export function Players(){
    const [selectedTeam, setSelectedTeam] = useState('Time A')
    const route = useRoute()
    const { group } = route.params as RouteParams
    const [newPlayerName, setNewPlayerName] = useState('')
    const [ players, setPlayers ] = useState<PlayerStorageDTO[]>([])
    const navigation = useNavigation()

    async function handleAddPlayer(){
        if(newPlayerName.trim().length === 0) {
            return Alert.alert('Novo jogador', 'Nome do novo jogador é obrigatório.')
        }
        const newPlayer = {
            name: newPlayerName,
            team: selectedTeam
        }
       
        try{
            await AddPlayerByGroup(newPlayer, group)
            fetchPlayersByTeam()
            setNewPlayerName('')
        } catch(err){
            if(err instanceof AppError){
                return Alert.alert('Novo jogador', err.message)
            } else {
                return Alert.alert('Novo jogador', 'Erro ao adicionar novo jogador')
            }
        }
    }
    async function handleRemovePlayer(player: string){
        try {
            await RemovePlayerByGroup(player, group)
            fetchPlayersByTeam()
        } catch(err) {
            Alert.alert('Remover Jogador', 'Não foi possível remover o jogador.');
        }
    }
    async function fetchPlayersByTeam(){
        try {
            const storagePlayers: PlayerStorageDTO[] = await PlayersGetByGroupAndTeam(group, selectedTeam)
            setPlayers(storagePlayers)
        } catch(err){
            Alert.alert('Jogadores', 'Ocorreu um erro ao listar os jogadores.')
        }
    }

    async function groupRemove() {
        try {
            await GroupDeleteByName(group)
            navigation.navigate('Groups')
        } catch(errGroupRemove) {
            Alert.alert('Remover Turma', 'Ocorreu um erro ao remover turma.')
        }
    }
    async function handleRemoveGroup() {
        Alert.alert(
            'Remover Turma', 
            'Deseja remover a turma ?',
            [
                { text: 'Não', style: 'cancel'},
                { text: 'Sim', onPress: () => groupRemove()}
            ]
        )
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [selectedTeam])

    return (
        <Container>
            <Header showBackButton={true}/>
            <Highlight
                title={group}
                subTitle="adicione a galera e separe os times"
            />
            <Form>
                <Input 
                    placeholder="Nome da Pessoa"
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    autoCorrect={false}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />
                <ButtonIcon onPress={handleAddPlayer} icon="add" />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                        <Filter title={item} isActive={selectedTeam === item} onPress={(event) => setSelectedTeam(item)}/>
                    )}
                    horizontal={true}
                />
                <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => (
                    <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)}/>
                )}
                ListEmptyComponent={() => (
                    <ListEmpty message="Não há pessoas neste time."/>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100},
                    players.length === 0 && { flex: 1 }
                ]}
            />
            <Button title="Remover turma" type="SECONDARY" onPress={handleRemoveGroup}/>
        </Container>
    )
}