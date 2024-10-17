function renderSquares(){
    let numOfSquares = 0;
    const chessBoard = document.querySelector(".chessBoard")
    const chessSquareArray = []
    while (numOfSquares < 64){
        chessSquare = document.createElement("div")
        chessSquare.classList.add("chessSquare")
        chessSquareArray.push(chessSquare)
        numOfSquares += 1;
    }
    chessSquareArray.forEach((element, i) => {
        determineSquareColor(element, i)
        // determines square color in separate function
    })
    return chessSquareArray.forEach((element) => {
        return chessBoard.append(element)
    })
}

renderSquares()