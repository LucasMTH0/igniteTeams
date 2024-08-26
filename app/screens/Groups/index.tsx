import { Highlight } from "@/app/components/Highlight";
import {  Container } from "./styles";
import { Header } from "@/app/components/Header";
import { GroupCard } from "@/app/components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@/app/components/ListEmpty";
import { Button } from "@/app/components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function Groups() {
    const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Vamo que vamo'])
    const navigation = useNavigation()
    function handleNewGroup(){
        navigation.navigate("New")
    }
    return (
        <Container>
            <Header showBackButton={false}/>
            <Highlight title="Turmas" subTitle="Jogue com a sua turma"/>
            <FlatList
                data={groups}
                keyExtractor={(group) => group}
                renderItem={({ item }) => <GroupCard title={item} />}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
                ListEmptyComponent={() => <ListEmpty message="Que tal criar uma nova turma ?"/>}
            />
            <Button title="Criar nova turma" onPress={handleNewGroup}/>
        </Container>
    )
}