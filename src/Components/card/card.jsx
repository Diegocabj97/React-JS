import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css"

function card({data})  {
  return (
    <Card>
      <Card.Img variant="top" src={data.imagen} />
      <Card.Body>
        <Card.Title>{data.nombre}</Card.Title>
        <Card.Text>
          {data.descripcion}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default card;