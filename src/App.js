import react, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Frase } from './Frase';

const Contenedor = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   padding: 0 1rem;
`;

const Boton = styled.button`
   background: -webkit-linear-gradient(
      top left,
      #007d35 0%,
      #007d35 40%,
      #0f574e 100%
   );
   background-size: 400px;
   font-family: Arial, Helvetica, sans-serif;
   color: white;
   margin-top: 3rem;
   margin-bottom: 3rem;
   padding: 1rem 3rem;
   font-size: 2rem;
   border: 2px solid black;
   transition: background-size 0.8s ease;

   :hover {
      cursor: pointer;
      background-size: 500px;
   }
`;

function App() {
   const [frase, getFrase] = useState({});

   const consultarAPI = async () => {
      const api = await fetch(
         'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
      );
      const frase = await api.json();
      getFrase(frase[0]);
   };

   // Cargar la primera frase
   useEffect(() => {
      consultarAPI();
   }, []);

   return (
      <Contenedor>
         <Frase frase={frase} />

         <Boton onClick={consultarAPI}>Obtener frase</Boton>
      </Contenedor>
   );
}

export default App;
