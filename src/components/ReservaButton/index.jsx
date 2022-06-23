import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss'

export default function ReservaButton() {
  return (
    <Link to={`/reserva/sucess`}>
    <Button
      
      className="button-reserva"
      size="lg"
    >
      Fazer minha reserva
    </Button>
    </Link>
  );
}