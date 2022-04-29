import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import Game from '../pages/game/Game';
import EndGame from '../pages/endgame/EndGame';
import localProvider from "../../providers/localstorage";



function App() {
  
  localProvider.saveMessage("Has ganado!")

  return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />}/>
            <Route path={'game'} element={<Game/>}/>
            <Route path={'endgame'} element={<EndGame/>}/>
            <Route path="*" />
          </Routes>
        </BrowserRouter>
  );
}

export default App;