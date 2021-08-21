import { useState } from 'react'
import './App.css';
import Game from './Components/Game'

function App() {
  const [images, setImages] = useState([{
    id: 1,
    sortorder: 1,
    charname: 'Beth Smith',
    src: '../images/Beth_Smith.png'
}, {
  id: 2,
  sortorder: 2,
  charname: 'Jerry Smith',
  src: '../images/Jerry_Smith.png'
}, {
  id: 3,
  sortorder: 3,
  charname: 'Mr Meeseeks',
  src: '../images/MeeseeksHQ.png'
},{
  id: 4,
  sortorder: 4,
  charname: 'Morty Smith',
  src: '../images/Morty_Smith.jpeg'

},{
  id: 5,
  sortorder: 5,
  charname: 'Mr Poopy Butthole',
  src: '../images/Mr_poopy_butthole.png'
},{
  id: 6,
  sortorder: 6,
  charname: 'Birdman',
  src: '../images/NewBirdPerson.jpeg'
},{
  id: 7,
  sortorder: 7,
  charname: 'Pickle Rick',
  src: '../images/Pickle_rick_transparent_edgetrimmed.png'
},{
  id: 8,
  sortorder: 8,
  charname: 'Scroopy',
  src: '../images/Scroopy.jpeg'
},{
  id: 9,
  sortorder: 9,
  charname: 'Snuffles',
  src: '../images/Snuffles-helmet.jpeg'
},{
  id: 10,
  sortorder: 10,
  charname: 'Squanchy',
  src: '../images/Squanchy_.png'
},{
  id: 11,
  sortorder: 11,
  charname: 'Rick Sanchez',
  src: '../images/Rick_Sanchez.png'
},{
  id: 12,
  sortorder: 12,
  charname: 'Summer Smith',
  src: '../images/Summer_is_cool.jpeg'
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
