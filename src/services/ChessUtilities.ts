import Bishop from '@/Model/Bishop'
import ChessPiece from '@/Model/ChessPiece'
import King from '@/Model/King'
import Knight from '@/Model/Knight'
import Pawn from '@/Model/Pawn'
import Queen from '@/Model/Queen'
import Rook from '@/Model/Rook'

function createChessPieceInstance(pieceData: any): ChessPiece | null {
  if (!pieceData || !pieceData.name) return null

  switch (pieceData.name) {
    case 'pawn':
      return new Pawn(
        pieceData.id,
        pieceData.name,
        pieceData.row,
        pieceData.column,
        pieceData.inPlay,
        pieceData.imgUrl,
        pieceData.playerNumber,
        pieceData.isQueen
      )
      break
    case 'bishop':
      return new Bishop(
        pieceData.id,
        pieceData.name,
        pieceData.row,
        pieceData.column,
        pieceData.inPlay,
        pieceData.imgUrl,
        pieceData.playerNumber
      )
      break
    case 'knight':
      return new Knight(
        pieceData.id,
        pieceData.name,
        pieceData.row,
        pieceData.column,
        pieceData.inPlay,
        pieceData.imgUrl,
        pieceData.playerNumber
      )
      break
    case 'rook':
      return new Rook(
        pieceData.id,
        pieceData.name,
        pieceData.row,
        pieceData.column,
        pieceData.inPlay,
        pieceData.imgUrl,
        pieceData.playerNumber
      )
      break
    case 'queen':
      return new Queen(
        pieceData.id,
        pieceData.name,
        pieceData.row,
        pieceData.column,
        pieceData.inPlay,
        pieceData.imgUrl,
        pieceData.playerNumber
      )
      break
    case 'king':
      return new King(
        pieceData.id,
        pieceData.name,
        pieceData.row,
        pieceData.column,
        pieceData.inPlay,
        pieceData.imgUrl,
        pieceData.playerNumber
      )
      break
    default:
      return new ChessPiece(
        pieceData.id,
        pieceData.name,
        pieceData.row,
        pieceData.column,
        pieceData.inPlay,
        pieceData.imgUrl,
        pieceData.playerNumber
      )
  }
}

export default {
  createChessPieceInstance
}
