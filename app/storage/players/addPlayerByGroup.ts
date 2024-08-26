import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./playerStorageDTO";
import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayersGetByGroup } from "./playersGetByGroup";
import { AppError } from "@/app/utils/AppError";

export async function AddPlayerByGroup(newPlayer: PlayerStorageDTO, group: string){
    try{
        const storagedPlayers = await PlayersGetByGroup(group)
        const playerAlreadyExists = storagedPlayers.filter((player) => player === newPlayer)
        if(playerAlreadyExists.length > 0) {
            throw new AppError('Já existe um jogador com este nome.');
        }
        const storage = JSON.stringify([...storagedPlayers, newPlayer])
        await AsyncStorage.setItem(`${ PLAYER_COLLECTION }-${group}`, storage)
    } catch (addPlayerError) {

    }
}