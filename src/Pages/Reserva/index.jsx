import './style.scss'

import * as React from 'react';
import ReactDOM from 'react-dom';

import { IoChevronBack } from 'react-icons/io5'
import { IconContext } from "react-icons";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { DateRangePicker } from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import ptBR from 'rsuite/locales/pt_BR';
import Media from "react-media"

import {Form, Card, Button, Col, Row} from 'react-bootstrap'

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import dataTest from '../../data/dataTest';

import CardsReservas from '../../components/CardsReservas';
import ReservaButton from '../../components/ReservaButton';

export default function Reserva(){

const MySwal = withReactContent(Swal)
const [reservas, setReservas] = useState([]);
const { beforeToday } = DateRangePicker;
const [cardAppear, setCardAppear] = useState(true);
const [buttonAppear, setButtonAppear] = useState(false);

const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

let {id} = useParams()

/*useEffect(() => {
    api.get(`products/${id}`).then((res) =>{
        setReservas(res.data);
        console.log(reservas)
    })
    .catch((err) => console.log(err));
}, []); */


    return(
        <>
        <header className="header_reservation">
            <IconContext.Provider value={{ color: "white", size: "2.5em" }}>
            <div className="header-container">
                <h1 className="reservation_h1">Hotel</h1>
                <p className="hotel_name_header">Hermitage Hotel</p>
            </div>
            <div className="back_arrow_container">
                <a className="back_home_icon" href="/"><IoChevronBack/></a>
            </div>
            </IconContext.Provider>
        </header>
        
        <div className="container-all-content">
        <div className="container_form_reserva">
        <h1 className="all-content-title">Complete seus dados</h1>
        --- dados do formulario chegarão da api do usuario
            <Form className="container form_reserva_data">
                <Row className='form-row'>

                <Col>
                <Form.Group className="mb-3 mt-3" controlId="formHorizontalNa,e">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control className="reserva-input" type="text" placeholder="José" />
                </Form.Group>
                </Col>

                <Col>
                <Form.Group className="mb-3  mt-3" controlId="formBasicName">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control className="reserva-input" type="text" placeholder="Silva" />
                </Form.Group>
                </Col>

                </Row>

                <Row className='form-row'>

                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="reserva-input" type="email" placeholder="jose@silva.com" />
                </Form.Group>
                </Col>

                <Col>
                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control className="reserva-input" type="text" placeholder="Sua cidade" />
                </Form.Group>
                </Col>
                </Row>
                </Form>

                    <h1 className="all-content-title">Selecione sua data de reserva e hora de chegada</h1>
                    <div className="container-date-time">
                        <CustomProvider locale={ptBR}>
                    <Media query={"(max-width: 558px)"}>
                        {matches => 
                        matches ? (
                        <DateRangePicker
                        className="date-picker-form"
                        showOneCalendar={true}
                        placeholder="Check in - Check-out" 
                        format="dd/MM/yyyy"
                        character=" - "
                        locale={ptBR}
                        disabledDate={beforeToday()}
                        />
                        )
                        : (
                        <DateRangePicker
                        className="date-picker-form"
                        showOneCalendar={false}
                        placeholder="Check in - Check-out" 
                        format="dd/MM/yyyy"
                        character=" - "
                        locale={ptBR}
                        disabledDate={beforeToday()}
                    />
                    )
                    }
                    </Media>
                    </CustomProvider>
                        <select 
                        type="select"
                        placeholder='Hora de chegada' 
                        id="time-arrive"
                        name="time-arrive"
                        className="select-time"
                        onChange={(e) => {console.log(e.target.value)}}
                        >
                        <option value="none" selected hidden>Selecionar hora</option>
                        {hours.map(hour => (
                            <option 
                            className="options-time"
                            value={hour}>
                                {hour}:00</option>
                        ))}
                        </select>
                        <Media query={"(max-width: 1280px)"}>
                        {matches => 
                        matches ? (
                            setButtonAppear(true)
                        )
                        : (
                            setButtonAppear(false)
                    )
                    }
                        </Media>
                        </div>
                        <div className="button-reserva-container">
                        {buttonAppear && (
                            <ReservaButton />
                            )} 
                        </div>
        </div>
                        
                <Media query={"(max-width: 1280px)"}>
                        {matches => 
                        matches ? (
                            setCardAppear(false)
                        )
                        : (
                            setCardAppear(true)
                    )
                    }
                </Media>
                {cardAppear && (
                    <div className="container container-card-reserva">
                    <CardsReservas
                    //receberá dados da api
                    id="1"
                    title="Hermitage Hotel"
                    category="Cama e Comida"
                    img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
                    description="Lies down waffles, whos the baby, and scratch leg; meow for can opener to feed me so taco cat backwards spells taco cat, so chew iPad power cord."
                    location="A 940 m do centro - MOSTRAR NO MAPA"
                    />
                    </div>
                    )
                }

        </div>
        </>
    )
}