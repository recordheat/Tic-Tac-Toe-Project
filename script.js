// Player's sign throughout the game
const player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    }

    return {getSign};
};

//Checks the condition of the string in the game board array

const gameBoard = (() => {
const boardArray = ["", "","","","","","","","", ""];

const setField = (index, sign) => {
    if (index > boardArray.length)return;
     boardArray[index] = sign;
};

const getField = (index) => {
    if (index > boardArray.length) return;
    return boardArray [index];
};

const boardReset = () => {
    for (let i = 0; i < boardArray.length; i++) {
        boardArray[i] = "";
    }
};

return {setField, getField, boardReset};

})();


const display = (() => {

const restartButton = document.getElementById('restartButton');
console.log(restartButton);

});


