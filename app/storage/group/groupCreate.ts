import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { GroupList } from "./groupList";
import { AppError } from "@/app/utils/AppError";

export async function GroupCreate(groupName: string) {
    try {
        const storagedGroups = await GroupList()
        const groupAlreadyExists = storagedGroups.includes(groupName)
        if(groupAlreadyExists) {
            throw new AppError('Já existe um grupo com este nome.');
        }
        const groupValues = JSON.stringify([...storagedGroups, groupName])
        await AsyncStorage.setItem(GROUP_COLLECTION, groupValues) 
    } catch (groupCreateError) {
        throw groupCreateError;
    }
}