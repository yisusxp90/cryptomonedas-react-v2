import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from "../hooks/useMoneda";
import useCriptoMoneda from "../hooks/useCriptoMoneda";
import axios from 'axios';
import Error from "./Error";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color .3s ease;
  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
 
`;
const Formulario = ({guardarMoneda, guardarCriptoMoneda}) => {

    // state del listado de criptomonedas
    const [listaCriptomonedas, guardarCriptomonedas] = useState([]);
    const  [error, guardarError] = useState(false);
    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar estadounidense'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ];

    // utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS);
    // utilizar useCriptomoneda
    const [criptomoneda, SeleccionarCriptomoneda] = useCriptoMoneda('Elige tu Criptomoneda', '', listaCriptomonedas);

    // ejecutar llamado a la api
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        };
        consultarAPI();
    }, []);

    // cuando el usuario hace Submit
    const cotizarMoneda = e => {
        e.preventDefault();

        // validar campos
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }

        // pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptoMoneda(criptomoneda);
    };

    return (
        <form onSubmit={cotizarMoneda}>
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <SelectMonedas/>
            <SeleccionarCriptomoneda/>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

export default Formulario;