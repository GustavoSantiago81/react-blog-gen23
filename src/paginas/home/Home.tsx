// React Props
// function Pai() {
//     const dados = { nome: "João", idade: 30 };
//     return <Filho dados={dados} />;
//   }

//   function Filho(props) {
//     return (
//       <div>
//         <p>Nome: {props.dados.nome}</p>
//         <p>Idade: {props.dados.idade}</p>
//       </div>
//     );
//   }

// em TypeScript é necessário especificar o tipo com uma interface por exemplo
// import { useEffect, useState } from "react";
// import "./Home.css";

// interface minhaProps {
//   title: string;
//   description: string;
// }

// function Home(props: minhaProps) {
//   const [state, setState] = useState("initialState");
//   const [valor, setValor] = useState(0);

//   useEffect(() => {
//     // código para executar o efeito colateral
//   }); // }, [dependencias] );

//   function handleClick() {
//     setValor(valor + 1);
//   }

//   return (
//     <>
//       <div>
//         <p>O valor é: {valor}</p>
//         <button onClick={handleClick}>Adicionar 1</button>
//       </div>
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </>
//   );
// }

// export default Home;


//useEffect
// import React, { useState, useEffect } from 'react';

// function Home() {
//   const [completed, setCompleted] = useState(false);
//   const [tarefa, setTarefa] = useState('');

//   useEffect(() => {
//     if (completed) {
//       setTarefa('Parabéns! Você concluiu a tarefa!');
//     }
//   }, [completed]);

//   return (
//     <div>
//       <h1>Tarefa</h1>
//       <h3>{tarefa}</h3>
//       <p>Conclua a tarefa</p>
//       <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
//     </div>
//   );
// }

// export default Home;

// RENDERIZAÇÃO CONDICIONAL
import { useState } from 'react';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )}
    </div>
  );
}
export default Home;