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
import { useEffect, useState } from "react";
import "./Home.css";

interface minhaProps {
  title: string;
  description: string;
}

function Home(props: minhaProps) {
  const [state, setState] = useState("initialState");
  const [valor, setValor] = useState(0);

  useEffect(() => {
    // código para executar o efeito colateral
  }); // }, [dependencias] );

  function handleClick() {
    setValor(valor + 1);
  }

  return (
    <>
      <div>
        <p>O valor é: {valor}</p>
        <button onClick={handleClick}>Adicionar 1</button>
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </>
  );
}

export default Home;
