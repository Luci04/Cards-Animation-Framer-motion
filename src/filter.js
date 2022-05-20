import { useEffect } from "react";

function Filter({ popular, setfiltered, activeGenre, setActiverGenre }) {

    useEffect(() => {
        if (activeGenre === 0) {
            setfiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
        setfiltered(filtered)
    }, [activeGenre])


    return (
        <div className="filter-container">
            <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiverGenre(0)} >All</button>
            <button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiverGenre(35)}>Comedy</button>
            <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiverGenre(28)}>Action</button>
        </div>
    )
}

export default Filter;