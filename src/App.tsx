import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';

//Components
import { ListItem } from './components/ListItem';
 }

const App = () => {

  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: "Estudar React JS", done: true },
    { id: 2, name: "Estudar React Native", done: false },
    { id: 3, name: "Fazer Café", done: true },
    { id: 4, name: "Comprar pão e frios na padaria", done: false },
  ]);

  return(
    <C.Container>
      <C.Area> 
        <C.Header> Tayse's toDo List </C.Header>  

        

        { list.map(( item, index )=> (
          <ListItem 
            key={index}
            item={item} 
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;