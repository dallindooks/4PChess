import ChessPiece from "./ChessPiece";

export default class Rook extends ChessPiece{

    constructor(id: number, name: string = 'rook', row: number, column: number, inPlay: boolean, imgUrl: string = 'src/assets/pieces/rook.png', playerNumber: number) {
        super(id, name, row, column, inPlay, imgUrl, playerNumber);
      }

}