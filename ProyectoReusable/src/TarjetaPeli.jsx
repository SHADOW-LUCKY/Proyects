import React from 'react';
function TarjetaPeli({movie1}) {
    return (
        
                <div className="movie">
                    <div>
                        <p>Año: {movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400" } alt={movie1.Title} />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
    )
};

export default TarjetaPeli