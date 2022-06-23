import "./style.scss";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { useContext, useState } from "react";
import Media from "react-media"
import { SearchContext } from "../../Context/search";

import { FaSearchLocation } from "react-icons/fa";

import { DateRangePicker } from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import ptBR from 'rsuite/locales/pt_BR';

import CategoryCards from "../../components/CardsCategoria";
import dataCategory from "../../data/dataCategory";

export default function Header() {

  const { beforeToday } = DateRangePicker;

  const [date, setDate] = useState('');

  const { categoria, handleSearch, handleOnSubmit } = useContext(SearchContext);

  let handleDate = (value) => {
    setDate(value);
    console.log(value);
    console.log(typeof value);
    //console.log(value[1].getMonth());
  }


  return (
    <>
    <section id="header" className="header_container_home">
      <div className="header-title">
        <h1 className="h1_do_header">
          Buscar ofertas em hotéis, casas e muito mais
        </h1>
      </div>
        <form
            action=""
            className="form-container"
            onSubmit={handleOnSubmit}
          >
          <div className="container search-container">
            <div className="search-box">
              <input
                placeholder=" Onde vamos?"
                id="place"
                type="text"
                className="input-form-home"
                onChange={handleSearch}
                name="place"
              />
              <CustomProvider locale={ptBR}>
              <Media query={"(max-width: 558px)"}>
                {matches => 
                matches ? (
                   <DateRangePicker
                   className="date-picker"
                   showOneCalendar={true}
                   placeholder="Check in - Check-out" 
                   format="dd/MM/yyyy"
                   character=" - "
                   locale={ptBR}
                   onChange={(value) => setDate(value)}
                   disabledDate={beforeToday()}
                   onOk={handleDate}
                   value={date}
                 />
                )
                : (
                <DateRangePicker
                className="date-picker"
                showOneCalendar={false}
                placeholder="Check in - Check-out" 
                format="dd/MM/yyyy"
                character=" - "
                locale={ptBR}
                onChange={(value) => setDate(value)}
                disabledDate={beforeToday()}
                onOk={handleDate}
                value={date}

              />
              )
              }
              </Media>
              </CustomProvider>
              
              <button className="input-form-button" type="submit">
                Buscar
              </button>
            </div>
            </div>
          </form>
    </section>
      </>
  );
}
