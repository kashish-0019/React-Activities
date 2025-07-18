import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue:0, red: 0, yellow: 0, green: 0});
    
    let updateBlue=()=>{
        setMoves((prevMoves)=>{
            return { ...prevMoves, blue: prevMoves.blue+1}
        })
    }
    let updateYellow=()=>{
        setMoves((prevMoves)=>{
            return { ...prevMoves, yellow: prevMoves.yellow+1}
        })
    }
    let updateGreen=()=>{
        setMoves((prevMoves)=>{
            return { ...prevMoves, green: prevMoves.green+1}
        })
    }
    let updateRed=()=>{
        setMoves((prevMoves)=>{
            return { ...prevMoves, red: prevMoves.red+1}
        })
    }

    return(
        <div className="container-fluid text-center mt-5">
            <h3>Game Begins!</h3>
            <div className="board row d-grid col-2 mx-auto">
                <p>Blue Moves = {moves.blue}</p>
                <button className="btn bg-primary mb-2" onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button className="btn btn-warning mb-2" onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button className="btn btn-success mb-2" onClick={updateGreen}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button className="btn btn-danger mb-2" onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}