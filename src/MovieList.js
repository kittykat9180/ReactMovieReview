import React from "react";
import Movie from "./MoviePage";

export default function MovieList() {
    const movieData = { 
        name: 'Morbius',
        year: '2022',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg',
        description: `Biochemist Michael Morbius tries to cure himself of a rare blood disease, 
        but he inadvertently infects himself with a form of vampirism instead.`
    }

    return (
        <Movie { ...movieData } />
    );
}