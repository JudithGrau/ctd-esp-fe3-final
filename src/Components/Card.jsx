import React from 'react';
import BasicCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const avatar = "images/doctor.jpg"

  const addFav = () => {
    localStorage.setItem("dentist", [id, name, username])
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <BasicCard className="card" id={id} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={avatar}
          alt="doctor avatar"
        />
        <CardContent>
          <Link to="dentist/:id">
            <Typography sx={{ textAlign: "center" }} gutterBottom variant="subtitle2" color="text.primary" component="div">
              {name}
            </Typography>
          </Link>
          <Typography sx={{ textAlign: "center" }} variant="subtitle2" color="text.secondary">
            {username}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Button onClick={addFav} className="favButton">
        ⭐
      </Button>

    </BasicCard>

  );
};
{/* En cada card deberan mostrar en name - username y el id */ }

{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */ }

{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */ }
export default Card;
