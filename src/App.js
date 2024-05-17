import "./App.css";
import { useReducer, useState } from "react";
import reducer, { ADICIONAR_FRASE } from "./reducer";
import { EXCLUIR_FRASE } from "./reducer";





function App() {
  const [frase, setfrase] = useState("");
  
 const[frases , dispatch] =useReducer(reducer, [])

  function salvarFrase(evento) {
    evento.preventDefault();
   
    dispatch({
      tipo: ADICIONAR_FRASE,
      frase
    })
  }

  function excluir (fraseExcluida){
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida
    })


  }

  return (
    <div className="App" >
     

      <form onSubmit={salvarFrase}>
        <textarea
          onChange={(evento) => setfrase(evento.target.value)}
          placeholder="Digite sua frase"
          required
        />
        <br />
        <button>Salvar Frase</button>
      </form>
      {frases.map((fraseAtual, index) => ( 
      <div  key={index}>
            <p>{fraseAtual}
            <button onClick={()=>excluir(fraseAtual)}>Excluir
            </button>
            </p>
         </div>
      ))}
      
    </div>
  );
}

export default App;
