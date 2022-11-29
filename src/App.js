import './App.css';
import {useRef} from 'react';
import { useState } from "react";
import { useCallback } from 'react';
import playerData from "./assets/player-data.json";
import PlayerItem from "./components/PlayerItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {

  const [favorites, setFavorites] = useState([]);
  const [guardFilter, setGuardFilter] = useState(false);
  const [forwardFilter, setForwardFilter] = useState(false);
  const [centerFilter, setCenterFilter] = useState(false);
  const [starterFilter, setStarterFilter] = useState(false);
  const [benchFilter, setBenchFilter] = useState(false);
  const [favoritesFilter, setFavoritesFilter] = useState(false);
  const [favsPPGTotal, setFavsPPGTotal] = useState(0)
  const [sortType, setSortType] = useState("RPG")
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const selectFilterType = (e) => {
    if (e.target.id == "guard") {
      setGuardFilter(!guardFilter)
    } else if (e.target.id == "forward") {
      setForwardFilter(!forwardFilter)
    } else if (e.target.id == "center") {
      setCenterFilter(!centerFilter)
    } else if (e.target.id == "starter") {
      setStarterFilter(!starterFilter)
    } else if (e.target.id == "bench") {
      setBenchFilter(!benchFilter)
    } else if (e.target.id == "favorites") {
      setFavoritesFilter(!favoritesFilter)
    }
  };

  const selectSortType = (e) => {
    if (e.target.id == "PPG") {
      setSortType("PPG")
    } else if (e.target.id == "RPG") {
      setSortType("RPG")
    } else if (e.target.id == "APG") {
      setSortType("APG")
    } else if (e.target.id == "SPG") {
      setSortType("SPG")
    } else if (e.target.id == "BPG") {
      setSortType("BPG")
    } else if (e.target.id == "TPG") {
      setSortType("TPG")
    } else if (e.target.id == "PM") {
      setSortType("PM")
    }  
  };
  
  const matchesFilterType = item => {
    if (guardFilter) {
      if (! (item.guard == "True")) {
        return false
      }
    }
    if (forwardFilter) {
      if (! (item.forward == "True")) {
        return false
      }
    }
    if (centerFilter) {
      if (! (item.center == "True")) {
        return false
      }
    }
    if (starterFilter) {
      if (! (item.starter == "True")) {
        return false
      }
    }
    if (benchFilter) {
      if (! (item.starter == "False")) {
        return false
      }
    }
    if (favoritesFilter) {
      if (! favorites.includes(item.name)) {
        return false
      }
    }
    return true;
  }  
    
  let filteredData = playerData.filter(matchesFilterType)
  const checkboxRefG = useRef(null);
  const checkboxRefF = useRef(null);
  const checkboxRefC = useRef(null);
  const checkboxRefS = useRef(null);
  const checkboxRefB = useRef(null);
  const checkboxRefFav = useRef(null);

  function sort() {
    if (sortType == "PPG") {
      filteredData.sort((a, b) => {
        return b.PPG - a.PPG;
      })
    } else if (sortType == "RPG") {
        filteredData.sort((a, b) => {
          return b.RPG - a.RPG;
        })
    } else if (sortType == "APG") {
        filteredData.sort((a, b) => {
          return b.APG - a.APG;
        })
    } else if (sortType == "SPG") {
      filteredData.sort((a, b) => {
        return b.SPG - a.SPG;
      })
    } else if (sortType == "BPG") {
      filteredData.sort((a, b) => {
        return b.BPG - a.BPG;
      })
    } else if (sortType == "TPG") {
      filteredData.sort((a, b) => {
        return b.TPG - a.TPG;
      })
    } else if (sortType == "PM") {
      filteredData.sort((a, b) => {
        return b.PM - a.PM;
      })
    }
  }

  sort()
  // const sortedArray = filteredData.sort((a, b) => {
  //   return b.RPG - a.RPG;
  // })

  function reset() {
    setGuardFilter(false)
    setForwardFilter(false)
    setCenterFilter(false)
    setStarterFilter(false)
    setBenchFilter(false)
    setFavoritesFilter(false)
    setFavorites([])
    checkboxRefG.current.checked = false
    checkboxRefF.current.checked = false
    checkboxRefC.current.checked = false
    checkboxRefS.current.checked = false
    checkboxRefB.current.checked = false
    checkboxRefFav.current.checked = false
    // window.location.reload();
  }

  return (
    <div className="App">
      <h1 id="title">Dub Nation: All the Stats</h1> 

      <Navbar id="nav" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <h4>Position </h4>
          <Form id="position-form">
            {['checkbox'].map((type) => (
              <div key="form" className="form mb-3">
                <Form.Check 
                  onChange={selectFilterType}
                  type={type}
                  id={`guard`}
                  label={`Guard`}
                  ref={checkboxRefG}
                />
                <Form.Check 
                  onChange={selectFilterType}
                  type={type}
                  id={`forward`}
                  label={`Forward`}
                  ref={checkboxRefF}
                />
                <Form.Check 
                  onChange={selectFilterType}
                  type={type}
                  id={`center`}
                  label={`Center`}
                  ref={checkboxRefC}
                />              
              </div>
            ))}
          </Form>
          <h4 class="lineup-form">Lineup </h4>
          <Form>
            {['checkbox'].map((type) => (
              <div className="form mb-3">
                <Form.Check 
                  onChange={selectFilterType}
                  type={type}
                  id={`starter`}
                  label={`Starter`}
                  ref={checkboxRefS}
                />    
                <Form.Check 
                  onChange={selectFilterType}
                  type={type}
                  id={`bench`}
                  label={`Bench`}
                  ref={checkboxRefB}
                />    
              </div>
            ))}
          </Form>
          <div className='flex-container'>
            <Form >
              {['checkbox'].map((type) => (
                <div id="fav-form" className="form mb-3">
                  <Form.Check 
                    onChange={selectFilterType}
                    type={type}
                    id={`favorites`}
                    label={``}
                    ref={checkboxRefFav}
                  />    
                </div>
              ))}
            </Form>
            <h4 id="fav-title">Favorites </h4>
            <p id="agg-pts">Total Favorites PPG: {favsPPGTotal}</p>
          </div>

          <button class="reset-button" onClick={reset}>Reset</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <NavDropdown title="Sort By" class="dropdown" id="basic-nav-dropdown">
            <button class="drop-button" id={'PPG'} onClick={selectSortType}>Points</button>
            <button class="drop-button" id={'RPG'} onClick={selectSortType}>Rebounds</button>
            <button class="drop-button" id={'APG'} onClick={selectSortType}>Assists</button>
            <button class="drop-button" id={'SPG'} onClick={selectSortType}>Steals</button>
            <button class="drop-button" id={'BPG'} onClick={selectSortType}>Blocks</button>
            <button class="drop-button" id={'TPG'} onClick={selectSortType}>Turnovers</button>
            <button class="drop-button" id={'PM'} onClick={selectSortType}>+/-</button>
      </NavDropdown>

      <div class="flex-container">
        {filteredData.map((item) => ( // TODO: map bakeryData to BakeryItem components
          <PlayerItem forceUpdate={forceUpdate} favsPPGTotal={favsPPGTotal} setFavsPPGTotal={setFavsPPGTotal} favorites={favorites} setFavorites={setFavorites} favoritesFilter={favoritesFilter} setFavoritesFilter={setFavoritesFilter} filteredData={filteredData} item={item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
