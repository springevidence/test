import React, {FC} from 'react';
import './App.css';


type FilmsToWatchListType = {
    filmsList: filmsType[]
    title: string
}
type filmsType = {
    id: string
    name: string
    score: number
    isWatch: boolean
}
const FilmsToWatchList: FC<FilmsToWatchListType> = ({filmsList, title}) => {
    return (
        <div>
            <h2>{title}</h2>

            <div><input type=""/>
                <button>Add</button>
            </div>

            <ul>{filmsList.map(f => {
                return (<li>
                    <input type="checkbox" checked={false}/>
                    <span>{f.name} - </span>
                    <span>{f.score}</span>
                    <button>x</button>
                </li>)
            })}
            </ul>

        </div>
    );
};

export default FilmsToWatchList;