

function GameList(props){
    const games = props.games;
    return <div>{games[0].name}</div>;
}

export default GameList;