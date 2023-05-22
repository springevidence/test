import React, {useState} from 'react';
import './App.css';
import Counter from "./component/Counter";

function App() {
    const minNum = 0;
    const maxNum = 5;
    const [num, setNum] = useState<number>(minNum)

    const addNum = () => {
        if (num < maxNum) {
            setNum(num + 1)
        }
    }
    const resetToNull = () => {
        setNum(minNum)
        // alert('wtf')
    }

    return (
        <div className="App">
            <Counter addNum={addNum}
                     resetToNull={resetToNull}
                     count={num}
                     maxNum={maxNum}
                     minNum={minNum}/>
        </div>
    );
}

export default App;
