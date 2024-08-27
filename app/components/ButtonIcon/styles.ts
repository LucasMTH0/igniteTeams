import styled from "styled-components/native";
import {MaterialIcons} from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";
export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtonIconTypeStyleProps
}
export const Container = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
`
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type}) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED
}))`
`