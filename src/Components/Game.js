import MemoryCard from "./MemoryCard"

const Game = ( {images, scores, onInc} ) => {
    return (
        <div>
            <div className='header'>
                <div className='container flex my-1'>
                    <h1>Rick and Morty Memory Game</h1>
                    <div>
                        <p>Score: {scores.score}</p>
                        <p>Best score: {scores.bestscore}</p>
                    </div>
                </div> 
            </div>
            <div className='cards'>
                <div className='container flex'>
                    {images.map(image => (
                        <MemoryCard onInc={onInc} key={image.id} image={image}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Game
