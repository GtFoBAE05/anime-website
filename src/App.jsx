import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AnimePage from "./page/Anime/AnimePage.jsx";
import HomePage from "./page/Home/HomePage.jsx";
import NavBar from "./components/misc/NavBar.jsx";
import SchedulePage from "./page/Schedule/SchedulePage.jsx";
import AnimeDetail from "./page/Anime/AnimeDetail.jsx";

function App() {

  return (
      <Router>
          <NavBar/>
          <div>
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/schedule' element={<SchedulePage />} />
                  <Route path='/anime' element={<AnimePage />} />
                  <Route path='anime/detail/:animeId' element={<AnimeDetail />} />
              </Routes>
          </div>
      </Router>

  )
}



export default App
