function player (name, sign){
    const getName = () => name
    const getSign = () => sign


    return {getName, getSign};
}


const gameBoard = (() =>{
    let rows = 3
    let cols = 3
    let board = []

    
    for (let i = 0; i < rows; i++){
        board[i] = []
        for (let j = 0; j < cols; j++){
            board[i][j] = i * cols + j
        }
    }

    const addSign = (sign, row, col) => {
        board[row][col] = sign
    }

    return {board, addSign}
    

})();




console.log(gameBoard.board)
gameBoard.addSign("X", 0, 0)
console.log(gameBoard.board)

const john = player("John", "X")
const Harry = player("Harry", "O")

console.log(john.getSign())
console.log(Harry.getSign())