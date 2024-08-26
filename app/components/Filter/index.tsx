import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps } from "./styles";
type Props = TouchableOpacityProps & FilterStyleProps &{
    title: string;
}
export function Filter(){
    return (
        <Container>
        
        </Container>
    )
}