import { baseUrl } from "../utils/url";

const Card = (props)=>{
    const {name, cuisines, avgRating, sla} = props.res.card.card.info;
    return (
        <div className="card">
            <div className="cardImageContainer">
                <img className="cardImage" src={baseUrl + props.res.card.card.info.cloudinaryImageId}></img>
            </div>
            <div className="cardDetails">
                <h4>{name}</h4>
                <h5>{cuisines.join(", ")}</h5>
                <h5>{avgRating + " stars"}</h5>
                <h5>{sla.deliveryTime + " mins"}</h5>
            </div>
        </div>
    )
}

export default Card;