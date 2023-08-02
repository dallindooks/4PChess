import ChessPiece from "./ChessPiece";

export default class Knight extends ChessPiece{

    constructor(id: number, name: string = 'knight', row: number, column: number, inPlay: boolean, imgUrl: string = 'src/assets/pieces/knight.png', playerNumber: number) {
        super(id, name, row, column, inPlay, imgUrl, playerNumber);
      }

      canJump(row: number, col: number) {

      }

}