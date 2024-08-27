import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayersGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./playerStorageDTO";
import { PLAYER_COLLECTION } from "../storageConfig";

export async function RemovePlayerByGroup(player: string, group: string){
    try {
        const storagedPlayers = await PlayersGetByGroup(group)
        const filteredStoragedPlayersWithoutPlayerSelected = storagedPlayers.filter(storagedPlayer => storagedPlayer.name !== player)
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify(filteredStoragedPlayersWithoutPlayerSelected))
    } catch (errorRemovePlayer) {
        throw errorRemovePlayer
    }
}