
import Device from './components/Device';
import './styles/App.scss'
import { useState, useEffect } from 'react'; //Hooks
import actions from './data/actions.js';

function App() {
  //const [btAction, setBtAction] = useState(false);
  const [btMenu, setBtMenu] = useState(false);
  const [menuList, setMenuList] = useState([]);
  const [element, setElement] = useState(false);
  const [itemGif, setItemGif] = useState('./images/item-empty.png');
  const [characterGif, setCharacterGif] = useState('./images/character-default.png');
  const [actionId, setActionId] = useState('');
  const [time, setTime] = useState(3000);


  const initMenu = (btId) => {
    const foundMenu = actions.find ( action => action.name === btId);
    setBtMenu(true);
    setMenuList(foundMenu.item);
  };

  // no sé si este useEffect sirve para algo ni por qué lo hice, revisar::::
  useEffect( () => {
    if(!btMenu) return; 
  }, [menuList]);

  const selectMenu = (btId, btData) => {
    const foundElMenu = menuList.find ( menuList => menuList.id === btId);
   const foundAction = actions.find ( action => action.name === btData);
    setCharacterGif(foundAction.character);  
    setTime(foundAction.time);
    setItemGif(foundElMenu.url);
    setElement(true);
    setBtMenu(!btMenu);
  };

  useEffect( () => {
      if(!element) return;
      const timer =  setTimeout(() => {
            setElement(false);
      }, time);   
      return () => clearTimeout(timer);
    }, [element, time]
  );


  return(
    <>
      <main>
        <Device itemGif={itemGif} characterGif={characterGif} actionId={actionId} initMenu={initMenu} renderMenu={btMenu} menuList={menuList} selectMenu={selectMenu} renderElement={element} />
      </main>
    </>
  )
}

export default App
