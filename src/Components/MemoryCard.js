const MemoryCard = ({ image, onInc }) => {
    return (
        <div onClick={() => onInc(image.id)} className='card my-2 py-1-2'>
            <div className='container flex'>
                <img src={image.src} alt={image.charname}></img>
                <h1>{image.charname}</h1>
            </div>
        </div>
    )
}

export default MemoryCard
