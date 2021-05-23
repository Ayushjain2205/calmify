import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MeditationTile = (props) => {
  const { id, src, name, audio } = props;
  return (
    <Link to={`/player/:${id}/:${name}`}>
      <div className='card-holder'>
        <Card style={{ width: "300px" }}>
          <Card.Img className='tile-image' variant='top' src={src} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
        <div className='play-button'>
          <i class='fas fa-play-circle'></i>
        </div>
      </div>
    </Link>
  );
};

export default MeditationTile;
