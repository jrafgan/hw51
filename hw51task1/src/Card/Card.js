import React from "react";

const Card = props => {
    return (
        <div className="blocks">
            <h1 className="h1">{props.title}</h1>
            <p className="main_p">{props.year}</p>
            <img className="image" src={props.img} alt=""/>
            <a className="link" href="#">Подробнее</a>
        </div>
    )
};

export default Card;