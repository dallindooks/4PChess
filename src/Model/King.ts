import ChessPiece from "./ChessPiece";

export default class King extends ChessPiece{

    constructor(id: number, name: string = 'king', row: number, column: number, inPlay: boolean, imgUrl: string = 'src/assets/pieces/king.png', playerNumber: number) {
        super(id, name, row, column, inPlay, imgUrl, playerNumber);
      }

}