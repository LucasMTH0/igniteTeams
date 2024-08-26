import { Header } from "@/app/components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@/app/components/Highlight";
import { ButtonIcon } from "@/app/components/ButtonIcon";
import { Input } from "@/app/components/Input";
import { Filter } from "@/app/components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players(){
    const [selectedTeam, setSelectedTeam] = useState('Time A')
    const [ players, setPlayers ] = useState([])
    return (
        <Container>
            <Header showBackButton={true}/>
            <Highlight
                title="Nome da turma"
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
            
        </Container>
    )
}