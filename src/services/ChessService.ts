import { ref, get, onValue } from 'firebase/database'
import db from '../firebase/init'
import ChessPiece from '@/Model/ChessPiece'
import Pawn from '@/Model/Pawn'

// function updatePiecePosition(row: number, column: number, player: number, pieceId: number) {
//     const playerNumber: string = `Player${player}`;
//     const playerDbRef = ref(db, playerNumber);

//     try {
//         const snapshot = await get(playerDbRef);

//         // if (snapshot.exists) {
//         //     const currentPiece = snapshot.val().pieces.
//         // }
//     }
// }

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
      // Add other cases for other subclasses if needed
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
