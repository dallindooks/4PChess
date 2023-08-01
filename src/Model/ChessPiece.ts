export default class ChessPiece {
  private _id: number;
  private _name: string;
  private _row: number;
  private _column: number;
  private _inPlay: boolean;
  private _imgUrl: string;
  private _playerNumber: number;

  constructor(
    id: number,
    name: string,
    row: number,
    column: number,
    inPlay: boolean,
    imgUrl: string,
    playerNumber: number
  ) {
    this._id = id;
    this._name = name;
    this._row = row;
    this._column = column;
    this._inPlay = inPlay;
    this._imgUrl = imgUrl;
    this._playerNumber = playerNumber;
  }

  // Getters for the private properties
  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get row(): number {
    return this._row;
  }

  get column(): number {
    return this._column;
  }

  get inPlay(): boolean {
    return this._inPlay;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }

  get playerNumber(): number {
    return this._playerNumber;
  }

  // Setters for the private properties
  set id(newId: number) {
    this._id = newId;
  }

  set name(newName: string) {
    this._name = newName;
  }

  set row(newRow: number) {
    this._row = newRow;
  }

  set column(newColumn: number) {
    this._column = newColumn;
  }

  set inPlay(newInPlay: boolean) {
    this._inPlay = newInPlay;
  }

  set imgUrl(newImgUrl: string) {
    this._imgUrl = newImgUrl;
  }

  set playerNumber(newPlayerNumber: number) {
    this._playerNumber = newPlayerNumber;
  }
}

  