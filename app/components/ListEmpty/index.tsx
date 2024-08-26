import { Conatiner, Message } from "./styles";
type Props = {
    message: string
}
export function ListEmpty({ message }: Props) {
    return (
        <Conatiner>
            <Message>{ message }</Message>
        </Conatiner>
    );
}