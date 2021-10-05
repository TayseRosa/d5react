import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';

const App = () => {

  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: "Estudar React JS", done: true },
    { id: 1, name: "Estudar React Native", done: false },
  ]);

  return(
    <C.Container>
      <C.Area> 
        <C.Header> Lista de Tarefas </C.Header>  

        { /* Area de adicionar nova tarefa */ }

        

      </C.Area>
    </C.Container>
  );
}

export default App;