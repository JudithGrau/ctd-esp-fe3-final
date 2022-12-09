import {React, useState, useEffect } from 'react';
import BasicCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Link, useParams } from "react-router-dom";

const Card = (props) => {
  const { id } = useParams()
  const avatar = "images/doctor.jpg"

  const [like, setLike] = useState(false)
  const [favsSelected, setFavsSelected] = useState([])
  
useEffect(() => {
  const favorites = localStorage.getItem("favorites");
  if (favorites){
    const favoritesParsed = JSON.parse(favorites)
    setFavsSelected(favoritesParsed)
  }
}, [like, props.id])

  

  const addFav = () => {
    setLike(!like)
    const favorites = localStorage.getItem("favorites");
    if(favorites){
    let favParsed = JSON.parse(favorites);
    const filteredDentist = favParsed.filter(item => item.id !== props.id);
    const exist = filteredDentist.length !== favParsed.length;
    exist ? favParsed = filteredDentist : favParsed.push({...props, liked:{isLiked: true, id: props.id}});
    localStorage.setItem("favorites", JSON.stringify(favParsed));
    alert("Dentista agregado exitosamente!");
  } else {
    localStorage.setItem("favorites", JSON.stringify([{...props, liked:{isLiked: true, id: props.id}}]))
  }
  }

  const handleLikedStatus = () => {
    if(favsSelected){
      const  selectedFav = favsSelected.some(fav => fav.id === props.id)
        return selectedFav ? "★" : "✰"
    }
  }

  /* En cada card deberan mostrar en name - username y el id */ 
  /* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */ 
  /* Ademas deberan integrar la logica para guardar cada Card en el localStorage */ 
  return (
    <BasicCard className="card" >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={avatar}
          alt="doctor avatar"
        />
        <CardContent>
          <Link to={`/dentist/${props.id}`}>
            <Typography sx={{ textAlign: "center" }} gutterBottom variant="subtitle2" color="text.primary" component="div">
              {props.name}
            </Typography>
            <Typography sx={{ textAlign: "center" }} variant="subtitle2" color="text.secondary">
              {props.username}
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>

      <Button onClick={addFav} className="favButton">
          {handleLikedStatus()} 
      </Button>

    </BasicCard>

  );
};
export default Card;
