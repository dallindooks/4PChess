import ChessPiece from "./ChessPiece";

export default class Bishop extends ChessPiece{

    constructor(id: number, name: string = 'bishop', row: number, column: number, inPlay: boolean, imgUrl: string = 'src/assets/pieces/bishop.png', playerNumber: number) {
        super(id, name, row, column, inPlay, imgUrl, playerNumber);
      }

}