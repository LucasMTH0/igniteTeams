import { Header } from "@/app/components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/app/components/Highlight";
import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton={true}/>
            <Content>
                <Icon/>
                <Highlight
                    title="Nova turma"
                    subTitle="Crie uma nova turma para adicionar os participantes"
                />
                <Input placeholder="Nome da Turma"/>
                <Button title="Criar"/>
            </Content>
        </Container>
    );
}