import './App.css'
import {useState} from "react";
import RandomNumber from "./components/Person/RandomNumber.tsx";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32])
    const getRandomNumbers = () => {
        const numbers = new Set<number>()
        while (numbers.size < 5) {
            numbers.add(Math.floor(Math.random() * (36 - 5 + 1)) + 5)
        }
        const numbersArray =  Array.from(numbers).sort((a: number, b: number) => a - b)
        setNumbers(numbersArray)
    }

    return (
        <>
            <button type="button" className="buttonRandom" onClick={getRandomNumbers}>New numbers</button>
            <div className="numberCircleBlock">
                {numbers.map((number, index) => (
                    <RandomNumber key={index} number={number}/>
                ) )}
            </div>
        </>
    )
};

export default App
