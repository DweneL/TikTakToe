import { useState } from "react";


const EMPTY = 0
const PLAYER1 = 1
const PLAYER2 = -1;

export default function Game(){
const [turn, setTurn] = useState(true)
const winner = useMemo(() => checkWinner(board),[board])
const[board, setBoard] = useState([
    [0,0,0]
    [0,0,0]
    [0,0,0]

]);

console.log("board", board);
return (
    <div className ="row">
        <Piece value ={row[0]} r ={0} />
        <Piece value ={row[1]} r ={1}/>
        <Piece value ={row[2]} r ={2}/>
        </div>
)

}

function Row({row, r }){
return(
    <div className="row">
    <Piece value={row[0] } r = {r} c= {0} onPiecePressed = {onPiecePressed}/>
    <Piece value={row[1] }r = {r} c= {1} onPiecePressed = {onPiecePressed}/>
    <Piece value={row[2] }r = {r} c= {2} onPiecePressed = {onPiecePressed}/>
    </div>
)
}

function onPiecePressed(r, c){
    const element = board[r][c];

    if (element !== EMPTY) return null;


    if (turn){
        board[r][c] =PLAYER1

    } else {
        board [r][c] = PLAYER2
    }

    console.log(board)
    setBoard(board.slice)
    setTurn(!turn)
}

function resetBoard(){
    setBoard({

    [0,0,0]
    [0,0,0]
    [0,0,0]

    });
    setTurn(true);
}

return(
    <div className="game-container"
)






function Piece({ value, r, c }){
const character = valueToPiece(value);

return(<div className="piece"> 
{r} {c}
</div>);

}

function valueToPiece(value){
    if (value == EMPTY) return null
    if (value == PLAYER1) return "x"
    if (value == PLAYER2) return "0"

    
}


function checkWinner(board){
let sum = 0;

    for(let r = 0; r< 3; r++){
        for(let c = 0; c < 3; c++){
            sum += board[r][c];
        }
        if (sum == -3){
            return -1
        } else if (sum == 3){
            return 1;
        }
        sum = 0;
    }
    sum = 0;
    for(let c = 0; c< 3; c++){
        for(let r = 0; r < 3; r++){
            sum += board[r][c];
        }
        if (sum == -3){
            return -1
        } else if (sum == 3){
            return 1;
        }

}