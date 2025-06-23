import Header from './components/Header';
import Device from './components/Device';
import './styles/App.scss'
import { useState, useEffect } from 'react'; //Hooks
import actions from './data/actions.js';

function App() {
  const [btAction, setBtAction] = useState(false);
  const [action, setActions] = useState([]);
  const [itemGif, setItemGif] = useState('./images/item-empty.png');
  const [characterGif, setCharacterGif] = useState('./images/character-default.png');
  const [time, setTime] = useState(3000);
  
  const initScreen = (btId) => {
      const foundAction = actions.find ( action => action.name === btId);
      setActions(foundAction);
      setItemGif(foundAction.item);
      setCharacterGif(foundAction.character);  
      setBtAction(true);
      setTime(foundAction.time);
  };

  useEffect( () => {
      if(!btAction) return;
      const timer =  setTimeout(() => {
            setBtAction(false);
      }, time);   
      return () => clearTimeout(timer);
    }, [btAction, time]
  );

  return(
    <>
      <Header/>
      <main>
        <Device initScreen={initScreen} renderAction={btAction} itemGif={itemGif} characterGif={characterGif} />
      </main>
    </>
  )
}

export default App
