import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import Game from '../pages/game/Game';



function App() {
  
  return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Login/>}/>
            <Route path={'game'} element={<Game/>}/>
            <Route path="*" />
          </Routes>
        </BrowserRouter>
  );
}

export default App;