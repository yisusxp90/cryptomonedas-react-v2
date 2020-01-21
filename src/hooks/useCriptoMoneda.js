import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neuw', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;
const useCriptoMoneda = (label, stateInicial, opciones) => {

    // state de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SeleccionarCriptomoneda = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">--- Selecione ---</option>
                {opciones.map(opc => (
                    <option key={opc.CoinInfo.Id} value={opc.CoinInfo.Name}>{opc.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );

    // retornar state e interfaz
    return [state, SeleccionarCriptomoneda];
};

export default useCriptoMoneda;