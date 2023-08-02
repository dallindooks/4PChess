import type ChessPiece from "./ChessPiece";


export default class Square {
    private _id: string;
    private _coveredBy: ChessPiece | null;
    private _threatenedBy: ChessPiece[] | null;
    private _inBounds: boolean;
  
    constructor(id: string) {
      this._id = id;
      this._coveredBy = null;
      this._threatenedBy = [];
      this._inBounds = true;
    }
  
    get id(): string {
      return this._id;
    }
  
    get coveredBy(): ChessPiece | null {
      return this._coveredBy;
    }
  
    set coveredBy(piece: ChessPiece | null) {
      this._coveredBy = piece;
    }

    set threatenedBy(piece: ChessPiece[] | null) {
      this._threatenedBy = piece;
    }
  
    get threatenedBy(): ChessPiece[] | null {
      return this._threatenedBy;
    }
  
    get inBounds(): boolean {
      return this._inBounds;
    }
  
    set inBounds(value: boolean) {
      this._inBounds = value;
    }
}