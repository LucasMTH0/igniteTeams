import { Header } from "@/app/components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/app/components/Highlight";
import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
    const [groupName, setGroupName] = useState('') 
    const navigation = useNavigation()
    function handleCreateNewGroup(){
        navigation.navigate("Players", { group: groupName})
    }
    return (
        <Container>
            <Header  showBackButton={true}/>
            <Content>
                <Icon/>
                <Highlight
                    title="Nova turma"
                    subTitle="Crie uma nova turma para adicionar os participantes"
                />
                <Input value={groupName} onChangeText={(value) => setGroupName(value) } placeholder="Nome da Turma"/>
                <Button title="Criar" onPress={handleCreateNewGroup}/>
            </Content>
        </Container>
    );
}