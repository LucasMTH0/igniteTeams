import { ActivityIndicator } from "react-native";
import { Container } from "./styled";

export function Loading() {
    return (
        <Container>
            <ActivityIndicator/>
        </Container>
    )
}