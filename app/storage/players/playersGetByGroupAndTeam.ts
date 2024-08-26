import { PlayersGetByGroup } from "./playersGetByGroup"

export async function PlayersGetByGroupAndTeam(group: string, team: string){
    try {
        const storagePlayersByGroup = await PlayersGetByGroup(group)
        const playersFilteredByTeam = storagePlayersByGroup.filter(players => players.team === team);
        return playersFilteredByTeam
    } catch( errorGetPlayer ) {
        throw errorGetPlayer
    }
}