import React from 'react';
import './App.css';
import FilmsToWatchList from "./FilmsToWatchList";
import {v1} from "uuid";

function App() {
    const filmsList = [
        {id: v1(), name: 'The Green Mile', score: 9, isWatch: true},
        {id: v1(), name: 'The Shawshank Redemption', score: 8, isWatch: true},
        {id: v1(), name: 'Forrest Gump', score: 0, isWatch: false},
        {id: v1(), name: 'The Lord of the Rings', score: 8, isWatch: true},
        {id: v1(), name: 'Interstellar', score: 0, isWatch: false},
        {id: v1(), name: 'Pulp Fiction', score: 9, isWatch: true}]
    const title = 'Films to watch'
    return (
        <div className="App">
            <FilmsToWatchList filmsList={filmsList}
                              title={title}/>
        </div>
    );
}

export default App;
