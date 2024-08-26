import { CaretLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    color: theme.COLORS.WHITE,
    size: 36
}))``

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`