import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';

//Components
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [ list, setList ] = useState<Item[]>([
    
  ]);

  const handleAddTask = ( taskName: string ) => {
    //clone
    let newList = [...list];
    //add clone
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    //atualiza a list
    setList(newList);
  }

  return(
    <C.Container>
      <C.Area> 
        <C.Header> Tayse's toDo List </C.Header>  

        <AddArea onEnter={ handleAddTask } />

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