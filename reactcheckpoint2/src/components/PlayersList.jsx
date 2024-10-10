import { players } from "../data/players"
import Player from "./Player"

const PlayersList = () => {
    return (
        <div>
            {players.map((player, index) => (
                // <Player key={index} {...player} />
                <Player key={index} name={player.name} age={player.age} ImageURL={player.ImageURL} nationality={player.nationality} team={player.team} jerseyNumber={player.jerseyNumber} />
            ))}
        </div>
    )
}

export default PlayersList