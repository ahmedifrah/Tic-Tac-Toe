function player (name, sign){
    const getName = () => name
    const getSign = () => sign


    return {getName, getSign};
}


const gameBoard = (() =>{
    const board = [
        ["A", "B", "C"],
        ["D", "E", "F"],
        ["G", "H", "I"]
    ];

    return {board}
    

})();

const gameScore = (() => {
    let addSign = (sign, position) => {
        gameBoard.slice(position, 0, sign)
    }

    return {addSign}
})();

console.log(gameBoard[0][0])
