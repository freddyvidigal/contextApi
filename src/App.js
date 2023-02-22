

import { useState } from 'react';
import Aluno from './Components/Alunos';

import UserProvider from './contents/user';



function App() {
   return(
    <UserProvider>
    <div>
      <h1>Escola</h1>
      <hr />
      <Aluno/>   
    </div>
    </UserProvider>
  )
}

export default App;


