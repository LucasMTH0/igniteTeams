import { Highlight } from "@/app/components/Highlight";
import {  Container } from "./styles";
import { Header } from "@/app/components/Header";
import { GroupCard } from "@/app/components/GroupCard";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@/app/components/ListEmpty";
import { Button } from "@/app/components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GroupList } from "@/app/storage/group/groupList";
import { useFocusEffect } from "expo-router";
import React from "react";

export function Groups() {
    const [groups, setGroups] = useState([])
    const navigation = useNavigation()
    async function fetchGroups(){
        try {
            const data = await GroupList()
            setGroups(data)
        } catch (fetchGroupsError) {

        }
    }
    function handleNewGroup(){
        navigation.navigate("New")
    }

    function handleOpenGroup(groupName: string){
        navigation.navigate("Players", { groupName })
    }

    useFocusEffect(useCallback(() => {
        fetchGroups()
    }, []))
    
    return (
        <Container>
            <Header showBackButton={false}/>
            <Highlight title="Turmas" subTitle="Jogue com a sua turma"/>
            <FlatList
                data={groups}
                keyExtractor={(group) => group}
                renderItem={({ item }) => <GroupCard onPress={() => handleOpenGroup(item)} title={item} />}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
                ListEmptyComponent={() => <ListEmpty message="Que tal criar uma nova turma ?"/>}
            />
            <Button title="Criar nova turma" onPress={handleNewGroup}/>
        </Container>
    )
}