import resArray from "../utils/mockData";
import Card from "./Card";

const CardContainer = ()=>{
    return (
        <div className="cardContainer">
        {resArray.map((elem)=>{
           return <Card key={elem.card.card.info.id} res = {elem}/>
        })}
        </div>
        // <Card res = {resArray[0]}/>
    );
}

export default CardContainer;