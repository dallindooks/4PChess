import { ref, get, onValue, update } from 'firebase/database'
import 'firebase/database'
import db from '../firebase/init'
import ChessPiece from '@/Model/ChessPiece'
import Pawn from '@/Model/Pawn'
import chessBoardVue from '@/views/chessBoard.vue'

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

// function setupRealtimeListener() {
//   // Define the database reference to the location you want to listen for updates
//   const playersRef = ref(db, 'Player1'); // Replace 'players' with the actual path to your data

//   // Set up the listener with the onValue() method
//   onValue(playersRef, handlePlayerDataUpdate, {
//     // Optionally, you can provide an error callback to handle any errors
//     error: (error) => {
//       console.error('Error getting data:', error);
//     },
//   });
// }

const pieceDbRef = ref(db, `Player1/pieces`)
onValue(pieceDbRef, (snapshot) => {
  const pieceDataObject = snapshot.val()
  const pieceDataArray: ChessPiece[] = Object.values(pieceDataObject)
  console.log('Piece data changed:', pieceDataArray)
  pieceDataArray.forEach((piece) => {
    // console.log(piece)
    const pieceMap = createChessPieceInstance(piece);
    chessBoardVue.movePiece(pieceMap!.id, pieceMap!.row, pieceMap!.column);
  })
})

async function retrieveData() {
  const dbRef = ref(db, 'Player1')
  get(dbRef)
    .then((snapshot) => {
      const data: ChessPiece[] = snapshot.val().pieces
      if (!data) return
      const chessPieces: ChessPiece[] = data
        .map((pieceData) => createChessPieceInstance(pieceData))
        .filter((piece) => piece !== null) as ChessPiece[]
      chessPieces.forEach((piece) => {
        chessBoardVue.addImageToSquare(piece)
      })
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
}

function getChessPieceIdFromId(inputString: string): [number, string] {
  const regexPattern = /^(\d+)-player(\d+)$/

  const matches = inputString.match(regexPattern)

  if (matches) {
    const firstNumber = matches[1]
    const playerString = inputString.split('-').pop() || ''
    const player = playerString.charAt(0).toUpperCase() + playerString.slice(1)
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
  update(playerRef, updatedData).catch((error) => {
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
  return [-1, -1]
}

export default {
  createChessPieceInstance,
  getChessPieceIdFromId,
  updatePiecePosition,
  getRowAndColFromString,
  retrieveData
}
