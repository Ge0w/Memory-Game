import { useState } from 'react'
import './App.css';
import Game from './Components/Game'
import Beth from './images/Beth_Smith.png'
import Jerry from './images/Jerry_Smith.png'
import Meeseeks from './images/MeeseeksHQ.png'
import Morty from './images/Morty_Smith.jpeg'
import MrPoopy from './images/Mr_poopy_butthole.png'
import Bird from './images/NewBirdPerson.jpeg'
import Pickle from './images/Pickle_rick_transparent_edgetrimmed.png'
import Rick from './images/Rick_Sanchez.png'
import Scroopy from './images/Scroopy.jpeg'
import Snuffles from './images/Snuffles-helmet.jpeg'
import Squanchy from './images/Squanchy_.png'
import Summer from './images/Summer_is_cool.jpeg'

function App() {
  const [images, setImages] = useState([{
    id: 1,
    sortorder: 1,
    charname: 'Beth Smith',
    src: Beth
}, {
  id: 2,
  sortorder: 2,
  charname: 'Jerry Smith',
  src: Jerry
}, {
  id: 3,
  sortorder: 3,
  charname: 'Mr Meeseeks',
  src: Meeseeks
},{
  id: 4,
  sortorder: 4,
  charname: 'Morty Smith',
  src: Morty
},{
  id: 5,
  sortorder: 5,
  charname: 'Mr Poopy Butthole',
  src: MrPoopy
},{
  id: 6,
  sortorder: 6,
  charname: 'Birdman',
  src: Bird
},{
  id: 7,
  sortorder: 7,
  charname: 'Pickle Rick',
  src: Pickle
},{
  id: 8,
  sortorder: 8,
  charname: 'Scroopy',
  src: Scroopy
},{
  id: 9,
  sortorder: 9,
  charname: 'Snuffles',
  src: Snuffles
},{
  id: 10,
  sortorder: 10,
  charname: 'Squanchy',
  src: Squanchy
},{
  id: 11,
  sortorder: 11,
  charname: 'Rick Sanchez',
  src: Rick
},{
  id: 12,
  sortorder: 12,
  charname: 'Summer Smith',
  src: Summer
}]);

const [scores, setScore] = useState({
  idTracker: [],
  bestscore: 0,
  score: 0
})

const incrementScore = (id) => {
  // Set Score & Best Score
  if (scores.idTracker.includes(id) && scores.score > scores.bestscore) {
    setScore({
      idTracker: [],
      bestscore: scores.score,
      score: 0
    })
  } else if (scores.idTracker.includes(id) && scores.score < scores.bestscore) {
    setScore({
      idTracker: [],
      bestscore: scores.bestscore,
      score: 0
    })
  } else {
    setScore(
      {
        idTracker:[...scores.idTracker,id],
        bestscore: scores.bestscore,
        score: scores.score + 1})
  }

  // Rearrange images
  const newImages = (images) => {
    for (let i=0; i < images.length; i++) {
      images[i].sortorder = Math.floor(Math.random() * 10000 + 1)
    }
    return images.sort((a,b) => (a.sortorder > b.sortorder) ? 1 : ((b.sortorder > a.sortorder) ? -1 : 0))
  }
  setImages(newImages(images))
}

  return (
    <div className="App">
      <Game images={images} scores={scores} onInc={incrementScore}/>
    </div>
  );
}

export default App;
