const MemoryCard = ({ image, onInc }) => {
    return (
        <div onClick={() => onInc(image.id)} className='card flex my-1 py-1-2'>
            <div className='container flex'>
                <img src={image.src} alt={image.charname}></img>
            </div>
        </div>
    )
}

export default MemoryCard
