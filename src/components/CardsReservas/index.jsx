import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GrLocation } from 'react-icons/gr';
import { MdOutlinePlayArrow } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { GoStar } from 'react-icons/go';
import './style.scss'

export default function CardsReservas({id, img, title, category, location, description}){

    return(
            <div className="unstyle">
                <li key={id} className="li-card-reserva">
                  <Card
                    data-aos="flip-up"
                    data-aos-offset="150"
                    className="list-item-reserva"
                  >
                    <p className="card-details-title">Detalhes da reserva</p>
                    <Card.Img
                      className="img-list-reserva"
                      variant="top"
                      src={img}
                    />
                    <Card.Body>
                    <p>HOTEL 
                        <GoStar className='star-card'/>
                        <GoStar className='star-card'/>
                        <GoStar className='star-card'/>
                        <GoStar className='star-card'/>
                        <GoStar className='star-card'/>
                    </p>
                      <Card.Title className="title-list-reserva">
                        {title}
                      </Card.Title>
                      <ul className="details-card-reserva">
                        <li className="details-card-item-reserva">
                            <span className="details-card-item-title-reserva">
                                <i className="icon-item-list"><MdOutlinePlayArrow /> </i> {category}
                            </span>
                        </li>
                        <li className="details-card-item">
                            <span className="details-card-item-title-reserva">
                                <i className="icon-item-list"> <GrLocation /></i> {location}
                            </span>
                        </li>
                      </ul>
                      <Card.Text className="description-list-reserva"
                      numberOfLines={1}>
                        {description}
                      </Card.Text>
                      <div className="button-container-reserva">
                      <Link to={`/reserva/sucess`}>
                      <Button
                        
                        className="button-list-reserva"
                        size="lg"
                      >
                        Fazer minha reserva
                      </Button>
                      </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </li>
              </div>
            );
}