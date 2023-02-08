import { useState } from "react";
import Fruitx from "./components/Fruit";
import Fruitxform from "./components/Fruitform";


function App(){
  // state (etat , donnes)
 const [fruitx , setFruits] = useState([
    {id: 1 , nom:'abricot'},
    {id: 2 , nom:'pomme'},
    {id: 3 , nom:'poire'},
    {id: 4 , nom:'cerise'},
  ]);

    // const voiture = <li>tesla</li>;
    // const voitures = [<li>audi</li>, <li>bmw</li> ,<li>volvo</li>,]
        
    // const inputRef = useRef() ; <== methode 1 a evité car ne touche pas au states
    
  //comportements 
  const handleDelete = (id) => {
    // console.log(id);
    // 1. copie du state
    const fruitsCopy = [...fruitx];
    // 2. manipuler mon state
   const fruitsCopyUpdated = fruitsCopy.filter((fruitx) => fruitx.id !== id)
    //3. modifier mon state avec le setter 
    setFruits(fruitsCopyUpdated);
  };

   const handleAdd = (fruitxAjouter) =>{
      // 1 copie du state
      const fruitCopy =[...fruitx]
      // 2 manipulation sur la copie du state
        fruitCopy.push(fruitxAjouter);
      //3 modifier le state avec le setter
      setFruits(fruitCopy);
   }

  // affichage (render)
  return (   
    <div className="container">
      <h1>Liste de fruit</h1>
      <div className="liste">
          <ul>
            {fruitx.map((fruitx) =>{
              return (
                <Fruitx fruitInfo={fruitx} onfruitDelete={handleDelete} key={fruitx.id}/>
                )
            })}
          </ul>
          <Fruitxform handleAdd={handleAdd} /> 
        </div>
    </div>
    );
 

}
export default App;


// Gestion des formulaire 
// 1.creation du formulaire
// 2. soumission du formulaire
// 3.collecte des donnes du formulaire
// 3a. methode 1: documentgetelementBYid "react"
// ref={inputRef} methode 1 a eviter mais qui fonctionne , inserer le code ligne 48
// 3b. methode 2: synchronisation descendante /ascendante