import AsyncStorage from "@react-native-async-storage/async-storage"
import { GroupList } from "./groupList"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig"

export async function GroupDeleteByName(groupName: string) {
    try {
        const storagedGroups = await GroupList()
        const filteredGroupsWithoutGroupDelete = storagedGroups.filter((group: string) => group !== groupName)
        await AsyncStorage.setItem(`${GROUP_COLLECTION}`, JSON.stringify(filteredGroupsWithoutGroupDelete))
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`)
    } catch (errorGroupDelete) {
        throw errorGroupDelete
    }
}