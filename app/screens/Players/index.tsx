import { Header } from "@/app/components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@/app/components/Highlight";
import { ButtonIcon } from "@/app/components/ButtonIcon";
import { Input } from "@/app/components/Input";

export function Players(){
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
        </Container>
    )
}