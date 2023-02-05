import CardItem from "../CardItemComponent/CardItem";
import './CardsList.css';
import { games } from '../../Assets/data/games';
import { useEffect, useState } from "react";

export default function CardsList() {

    const [memesData, setMemesData] = useState();

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(resJson => setMemesData(resJson.data.memes))
    }, [])

    const gamesData = games.map((cardGame) => {
        return (
            <div key={cardGame.id} className="card-item-container">
                <CardItem game={cardGame} />
            </div>
        )
    });



    return (
        <>
            <button
                onClick={() => console.log(memesData)}>
                Get MEMES Data
            </button>
            <div className="card-list-container">
                {gamesData}

            </div>
        </>
    )
}