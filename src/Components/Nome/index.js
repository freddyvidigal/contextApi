
import { useContext } from 'react';
import { UserContext } from './../../contents/user';

function Nome() {
  const { alunos, setAlunos } = useContext(UserContext);
    return(
      <div>
    <span style={{color:"#ff0000" }}>Bem vindo: {alunos}</span>

    <br />
    <button onClick={() => setAlunos('Fredercio vidigal')} >Trocar Nome</button>
    <br />

      </div>
    )
  }
  
  export default Nome;