export default class ChessPiece {
    private _name: string;
    private _row: number;
    private _column: number;
    private _inPlay: boolean;
    private _imgUrl: string;
  
    constructor(name: string, row: number, column: number, inPlay: boolean, imgUrl: string) {
      this._name = name;
      this._row = row;
      this._column = column;
      this._inPlay = inPlay;
      this._imgUrl = imgUrl;
    }
  
    // Getter for Name
    get name(): string {
      return this._name;
    }
  
    // Setter for Name
    set name(newName: string) {
      this._name = newName;
    }
  
    // Getter for Row
    get row(): number {
      return this._row;
    }
  
    // Setter for Row
    set row(newRow: number) {
      this._row = newRow;
    }
  
    // Getter for Column
    get column(): number {
      return this._column;
    }
  
    // Setter for Column
    set column(newColumn: number) {
      this._column = newColumn;
    }
  
    // Getter for InPlay
    get inPlay(): boolean {
      return this._inPlay;
    }
  
    // Setter for InPlay
    set inPlay(newInPlay: boolean) {
      this._inPlay = newInPlay;
    }
  
    // Getter for ImgUrl
    get imgUrl(): string {
      return this._imgUrl;
    }
  
    // Setter for ImgUrl
    set imgUrl(newImgUrl: string) {
      this._imgUrl = newImgUrl;
    }
  }
  