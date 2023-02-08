export default function Fruitx ( {fruitInfo, onfruitDelete} ) {
    // state
    // const fruitInfo = props.fruitInfo;
    // const onfruitDelete = props.onfruitDelete;
 
    // comportement


    // affichage(render)
    return ( 
    <li>
    {fruitInfo.nom} 
    <button className="delete" onClick={ () => onfruitDelete(fruitInfo.id)} >X</button>
    </li>
    );
    
   
}