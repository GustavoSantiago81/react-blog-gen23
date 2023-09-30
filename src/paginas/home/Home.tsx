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
import './Home.css';

interface minhaProps {
    title: string;
    description: string;
  }
  
function Home(props:minhaProps){
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </>
    );
}

export default Home;