import ChessPiece from './ChessPiece'

export default class Pawn extends ChessPiece {
  private _isQueen: boolean

  constructor(
    id: number,
    name: string = 'pawn',
    row: number,
    column: number,
    inPlay: boolean,
    imgUrl: string = 'src/assets/pieces/pawn.png',
    playerNumber: number,
    isQueen: boolean
  ) {
    super(id, name, row, column, inPlay, imgUrl, playerNumber)
    this._isQueen = isQueen;
  }

  get isQueen(): boolean {
    return this._isQueen;
  }

  set isQueen(newIsQueen: boolean) {
    this._isQueen = newIsQueen;
  }
}
