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

const gameController = (() =>{
    const isX = (sign) => sign === "X"
    let haveWinner = false
    const winCondition = (gameBoard) => {
        for (let k = 0; k < gameBoard.board.length; k++){

            let columnCheck = gameBoard.board.map(x => x[k])
            let diagonal = getMainDiagonal(gameBoard.board)
            let backDiagonal = getAntiDiagonal(gameBoard.board)

            if (gameBoard.board[k].every(isX) || columnCheck.every(isX) || diagonal.every(isX) || backDiagonal.every(isX)){
                haveWinner = true;
            }
        }
        return haveWinner
    }



    
    return {winCondition}
})();

const getMainDiagonal = (board) =>{
    let diagonal = [];
    for (let i = 0; i < board.length; i++) {
        diagonal.push(board[i][i]);
    }
    return diagonal;

}

const getAntiDiagonal = (board) => {
    let antiDiagonal = []
    for (let i = 0; i < board.length; i++){
        antiDiagonal.push(board[i][board.length - 1 - i])
    }
    return antiDiagonal
}

const startGame = () => {
    let initialSign = prompt("Please select a sign")
    let player1 = player("John", initialSign)
    let player2 = initialSign == "X" ? player("Legend", "O") : player("Goofy", "X")
    const currentPlayers = console.log(`Player1: ${player1.getName()} - ${player1.getSign()} \nPlayer2: ${player2.getName()} - ${player2.getSign()}`) 

    return {player1, currentPlayers}

}

const startRound = (player1) => {
    let gameCompleted = false
    while (gameCompleted == false){
        console.log(`${player1.getName()} Your turn`)
        let input = prompt(`${player1.getName()} Your Turn`)
        let signInfo = input.split(",")
        gameBoard.addSign(signInfo[0], signInfo[1], signInfo[2])
        if (gameController.winCondition(gameBoard) != true){
            console.log("Not Won")
        }else{
            console.log("Won")
            gameCompleted = true
        }
        console.log(gameBoard.board)
    }
}

startGame().currentPlayers
console.log(gameBoard.board)
startRound(startGame().player1)



// console.log(gameBoard.board)
// console.log(gameController.winCondition(gameBoard))

