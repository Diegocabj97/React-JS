import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"; 

import "./card.css"

function cards({product})  {
  return (
    <div>
    <Link to={`/detail/${product.id}`}>
    <Card>
      <Card.Img className='cardImg' variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          {product.descripcion}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </Link>
    </div>
  );
}

export default cards;