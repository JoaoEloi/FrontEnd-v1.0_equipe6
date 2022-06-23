import "./style.scss";
import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import Cards from "../../components/Cards/index";
import Header from "../../components/Header/index";
import CategoryCards from "../../components/CardsCategoria";

import { Card, Button } from "react-bootstrap";

import { GrLocation } from "react-icons/gr";
import { MdOutlinePlayArrow } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";

import { SearchContext } from "../../Context/search";

import dataCategory from "../../data/dataCategory";

export default function Home() {
  const { handleCategoria, data, getApiData } = useContext(SearchContext);

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Header />
      <form action="" className="container form-categories">
        <h1 className="title-categories">Buscar por tipo de alojamento</h1>
        <h3>ISSO AQUI É UM TESTE</h3>
        <div className="categories-grid">
          {dataCategory.map(({ id, image, name, hotels }) => (
            <label className="option-category" htmlFor="category">
              <input
                className="checkbox-category"
                type="radio"
                id={id}
                name="category"
                value={name}
                onClick={handleCategoria}
              />
              <CategoryCards image={image} name={name} hotels={hotels} />
            </label>
          ))}
        </div>
      </form>
      <div className="container-home">
        <div className="container title-products">
          <h1 className="title-categories">Recomendações</h1>
        </div>
        <ul className="grid-produtos-page">
          {data.map(({ id, title, category, img, description, location }) => (
            <Cards
              id={id}
              title={title}
              category={category}
              img={img}
              description={description}
              location={location}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
