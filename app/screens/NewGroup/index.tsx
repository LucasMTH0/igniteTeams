import { Header } from "@/app/components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/app/components/Highlight";
import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { GroupCreate } from "@/app/storage/group/groupCreate";
import { AppError } from "@/app/utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
    const [groupName, setGroupName] = useState('') 
    const navigation = useNavigation()
    async function handleCreateNewGroup(){
        try {
            if( groupName.trim().length === 0 ) {
                return Alert.alert('Novo Grupo', 'Informe o valor do grupo');
            }
            await GroupCreate(groupName)
            navigation.navigate("Players", { group: groupName})
        } catch (createNewGroupError) {
            if(createNewGroupError instanceof AppError) {
                Alert.alert('Novo Grupo', createNewGroupError.message)
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.')
            }
            console.log(createNewGroupError);
        }
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
                <Input value={groupName} onChangeText={setGroupName} placeholder="Nome da Turma"/>
                <Button title="Criar" onPress={handleCreateNewGroup}/>
            </Content>
        </Container>
    );
}