import GameList from "../components/GameList";
import { useQuery } from "@tanstack/react-query"

async function fetchGames(){
    const response = await fetch('http://localhost:3000/api/games')
    return response.json()
}
function Home(){
    const {data,isLoading} = useQuery({queryKey:["games"],queryFn: fetchGames})
    if(isLoading) return <p className="page-cointainer">Loading games...</p>
    return (
        <div className="page-cointainer">
            <h1> Make Games</h1>
            <div className="bg-card" style={{marginTop:"1rem",padding:"1rem"}}>
                <GameList games={data}/>
            </div>
        </div>
    )
}

export default Home;

