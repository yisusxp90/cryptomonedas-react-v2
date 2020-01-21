import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
`;

const Parrafo = styled.p`
    font-size: 18;
    span {
        font-weight:bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
        span {
        font-weight:bold;
    }
`;

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;
    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Parrafo>El precio Mas alto del dia es: <span>{resultado.HIGHDAY}</span></Parrafo>
            <Parrafo>El precio Mas bajo del dia es: <span>{resultado.LOWDAY}</span></Parrafo>
            <Parrafo>Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Ultima Actualizacion: <span>{resultado.LASTUPDATE}</span></Parrafo>
        </ResultadoDiv>
    );
}

export default Cotizacion;