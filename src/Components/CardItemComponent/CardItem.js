import './CardItem.css';
import React  from 'react';
export default function CardItem(props) {

    const [goldStar, setGoldStar] = React.useState(false);
    function toggleStar(){
        setGoldStar(prev=> !prev)
    }

    return (
        <>
            <div className="card-item-img-container">
                <img src={props.game.url} alt="game" className="card-item-img" />
            </div>
            <div className="card-item-details">
                <div className="card-item-header">
                    <div className="card-item-title">
                        <h1 className="card-item-title">{props.game.title}</h1>
                    </div>
                    <div className="card-item-price">

                        <p className="card-item-cost">${props.game.cost}</p>
                    </div>
                </div>
                <div className="card-item-desc">
                    <p className="card-item-desc-text">{props.game.desc}</p>
                    <span>
                        <i className="fa fa-solid fa-star"
                            style={{ color: goldStar ? "gold" : "gray" }}
                            onClick={toggleStar}>
                        </i>
                    </span>
                </div>
            </div>
        </>

    )
}