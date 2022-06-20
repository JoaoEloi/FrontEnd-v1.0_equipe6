import './style.scss'
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GrLocation } from 'react-icons/gr';
import { MdOutlinePlayArrow } from 'react-icons/md';
import { useEffect, useState } from 'react';
//import api from '../../services/api';
import dataTest from '../../data/dataTest';

export default function Cards({id, img, title, category, location, description}){

    return(
            <Link className="unstyle" to={`/endereco/${id}`}>
                <li key={id} className="li-card-page">
                  <Card
                    data-aos="flip-up"
                    data-aos-offset="150"
                    className="list-item-page"
                  >
                    <Card.Img
                      className="img-list-page"
                      variant="top"
                      src={img}
                    />
                    <Card.Body>
                      <Card.Title className="title-list-page">
                        {title}
                      </Card.Title>
                      <ul className="details-card">
                        <li className="details-card-item">
                            <span className="details-card-item-title">
                                <i className="icon-item-list"><MdOutlinePlayArrow /> </i> {category}
                            </span>
                        </li>
                        <li className="details-card-item">
                            <span className="details-card-item-title">
                                <i className="icon-item-list"> <GrLocation /></i> {location}
                            </span>
                        </li>
                      </ul>
                      <Card.Text className="description-list">
                        {description}
                      </Card.Text>
                      <Button
                        className="button-list-page"
                        size="lg"
                      >
                        Ver detalhes
                      </Button>
                    </Card.Body>
                  </Card>
                </li>
              </Link>
            );
}