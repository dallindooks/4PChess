import { ref, get, onValue, update } from 'firebase/database'
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

function getChessPieceIdFromId(inputString: string): [number, string] {
  const regexPattern = /^(\d+)-player(\d+)$/

  const matches = inputString.match(regexPattern)

  if (matches) {
    const firstNumber = matches[1] 
    const playerString = inputString.split('-').pop() || ''; 
    const player = playerString.charAt(0).toUpperCase() + playerString.slice(1);
    return [parseInt(firstNumber), player]
  }
  return [-1, '']
}

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

function updatePiecePosition(id: number, player: string, newRow: number, newColumn: number) {
  const playerRef = ref(db, `${player}/pieces/${id}`)
  const updatedData = {
    row: newRow,
    column: newColumn
  }
  // Update the data in the database
  update(playerRef, updatedData)
    .catch((error) => {
      console.error('Error updating player data:', error)
    })
}

function getRowAndColFromString(inputString: string): [number, number] {
  const regexPattern = /^(\d+)-(\d+)$/

  const matches = inputString.match(regexPattern)

  if (matches) {
    const row = parseInt(matches[1]) // row
    const col = parseInt(matches[2]) // col
    return [row, col]
  }
  return [-1,-1] 
}

export default {
  createChessPieceInstance,
  getChessPieceIdFromId,
  updatePiecePosition,
  getRowAndColFromString
}
