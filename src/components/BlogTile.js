import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BlogTile(props) {
  const { id, src, title, author } = props;
  console.log(id);
  return (
    <Link to={`/post/:${id}`}>
      <div>
        <div className='blog-holder'>
          <Card style={{ width: "300px" }}>
            <Card.Img className='tile-image' variant='top' src={src} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{`By - ${author}`}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Link>
  );
}

export default BlogTile;
