import { React } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {


  const favorites = localStorage.getItem("favorites");
  const favParsed = JSON.parse(favorites);
    

 
 
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          favParsed?.map((fav) => (
            <Card name={fav.name} username={fav.username} id={fav.id} key={fav.id} />
          ))
        }
      </div>
    </>
  );
};

export default Favs;
