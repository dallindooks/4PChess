import ChessPiece from "./ChessPiece";

export default class Queen extends ChessPiece{

    constructor(id: number, name: string = 'queen', row: number, column: number, inPlay: boolean, imgUrl: string = 'src/assets/pieces/queen.png', playerNumber: number) {
        super(id, name, row, column, inPlay, imgUrl, playerNumber);
      }

}