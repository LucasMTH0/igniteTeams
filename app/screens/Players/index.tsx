import { Header } from "@/app/components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@/app/components/Highlight";
import { ButtonIcon } from "@/app/components/ButtonIcon";
import { Input } from "@/app/components/Input";
import { Filter } from "@/app/components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@/app/components/PlayerCard";
import { ListEmpty } from "@/app/components/ListEmpty";
import { Button } from "@/app/components/Button";
import { useRoute } from "@react-navigation/native";
type RouteParams = {
    group: string
}
export function Players(){
    const [selectedTeam, setSelectedTeam] = useState('Time A')
    const route = useRoute()
    const { group } = route.params as RouteParams
    const [ players, setPlayers ] = useState([])
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
                    autoCorrect={false}
                />
                <ButtonIcon icon="add" type="PRIMARY"/>
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
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <PlayerCard name={item} onRemove={() => {}}/>
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
            <Button title="Remover turma" type="SECONDARY"/>
        </Container>
    )
}