import "./style.scss";

import { Card } from "react-bootstrap";

export default function CategoryCards({image, name, hotels}) {
  return (
    <div className="option_inner">
    <Card className="card_home_item">
      <Card.Img 
      src={image} 
      className="img_card" 
      alt="Foto do Card"
      variant="top" />
      <Card.Body className="card_body">
        <Card.Title className="card_title">{name}</Card.Title>
        <Card.Text>{hotels}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}


