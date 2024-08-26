import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "../screens/Groups";
import { Players } from "../screens/Players";
import { NewGroup } from "../screens/NewGroup";

const {Group, Navigator, Screen} = createNativeStackNavigator()

export function AppRouter() {
    return (
        <Navigator>
            <Screen 
                name="Groups"
                component={Groups}
            />
            <Screen 
                name="New"
                component={NewGroup}
            />
            <Screen 
                name="Players"
                component={Players}
            />
        </Navigator>
    )
}