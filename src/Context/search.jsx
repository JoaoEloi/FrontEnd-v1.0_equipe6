import { useState, createContext, useEffect} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import dataTest from '../data/dataTest'

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {

    const [data, setData] = useState([]);

    const [search, setSearch] = useState('');

    const MySwal = withReactContent(Swal);

    const [categoria, setCategoria ] = useState('');

    let handleCategoria = (e) => {
      setCategoria(e.target.value);
      console.log(categoria)
    }

    let alertConfig = (msg) => {
        MySwal.fire({
          icon: "error",
          title: msg,
        });
      };

      const getApiData = () => {
        setData(dataTest);
        console.log(data);
      };
    
      function handleSearch(e) {
        setSearch(e.target.value.toLowerCase());
      }
    
      function handleOnSubmit(event) {
        let results;
        const selectedCategory = categoria;
        const dados = dataTest;
        console.log(categoria)
        console.log(search)
        event.preventDefault();
        if ( search && categoria ) {
          results = dados.filter((item) =>
          item.title.toLowerCase().includes(search) && item.category === selectedCategory
          );
          setData(results);
        }

        else if ( !search ) {
            results = dados.filter((item) =>
            item.category === selectedCategory
          );
          setData(results);
          }
        
        else if ( !categoria ) {
            results = dados.filter((item) => item.title.toLowerCase().includes(search));
            setData(results);
        }
        else{
          event.preventDefault();
          alertConfig("Ops! Você precisa buscar um lugar ou uma categoria! :(");
        }

      if (results.length === 0) {
        alertConfig("Não há lugares disponíveis :(");
        getApiData();
      }
    }

      return (
        <SearchContext.Provider
            value={{ categoria, data, search, handleSearch, handleOnSubmit,
            handleCategoria,  getApiData, alertConfig}} >
            {children}
            </SearchContext.Provider>
      )
}