import { useState } from "react";

export default function Fruitxform ({handleAdd}){
    // state
        const [nouveauFruit, setNouveauFruit] = useState("");

    // comportement
        const handleSubmit = (event) => {
        event.preventDefault();
        // alert("handleSubmit");
        // console.log(inputRef); <=== methode 1 a evité
        // 1 copie du state
        //const fruitCopy =[...fruitx] copie sur app.js vers state
        // 2 manipulation sur la copie du state
        const id = new Date ().getTime()
        const nom = nouveauFruit
        const fruitAjouter = {id, nom };
        // fruitCopy.push(fruitAjouter); copie sur app.js vers state
        handleAdd (fruitAjouter);
        //3 modifier le state avec le setter
        // setFruits(fruitCopy); copie sur app.js vers state
        setNouveauFruit("");
  
    };
         const handleChange = (event) => {
            const valueAfterChange = event.target.value
            console.log(valueAfterChange);
            setNouveauFruit(valueAfterChange);


    };


    // affichage(render)
    return (
    <form action="get" onSubmit={handleSubmit}>
    <input value={nouveauFruit} type="text" placeholder="ajouter un fruit" onChange={handleChange}/>
    <button className="add">ajouter</button>
  </form>)
}