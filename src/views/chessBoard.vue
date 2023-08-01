<script lang="ts">
import Bishop from '@/Model/Bishop'
import ChessPiece from '@/Model/ChessPiece'
import MyNameClass from '../MyNameClass'
import Pawn from '@/Model/Pawn'
import db from '../firebase/init'
import { ref, get, onValue } from 'firebase/database'
import { connectFirestoreEmulator } from 'firebase/firestore'
import ChessService from '../services/ChessService'

let testPiece: ChessPiece

const player1 = ref(db, 'Player1')

async function retrieveData() {
  const dbRef = ref(db, 'Player1')
  get(dbRef)
    .then((snapshot) => {
      const data: ChessPiece[] = snapshot.val().pieces
      if (!data) return
      const chessPieces: ChessPiece[] = data
        .map((pieceData) => ChessService.createChessPieceInstance(pieceData))
        .filter((piece) => piece !== null) as ChessPiece[]
        chessPieces.forEach((piece) => addImageToSquare(piece))
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
}

function addImageToSquare(chessPiece: ChessPiece) {
  console.log(chessPiece)
  const location = `${chessPiece.row}-${chessPiece.column}`

  const parentElement = document.getElementById(location) as HTMLElement

  const imgElement = document.createElement('img')

  imgElement.src = chessPiece.imgUrl

  imgElement.height = 40
  imgElement.draggable = true
  imgElement.alt = ''
  imgElement.id = `${chessPiece.id}-player:${chessPiece.playerNumber}`

  imgElement.addEventListener('dragstart', drag)

  parentElement.appendChild(imgElement)
}

function allowDrop(ev: DragEvent) {
  ev.preventDefault()
}

function drag(ev: DragEvent) {
  ev.dataTransfer!.setData('text', (ev.target as HTMLElement).id)
}

function drop(ev: DragEvent) {
  ev.preventDefault()
  var data = ev.dataTransfer!.getData('text')
  const target = <HTMLElement>ev.target
  target.appendChild(document.getElementById(data)!)
  const audio = new Audio('src/assets/audio/mixkit-on-or-off-light-switch-tap-2585.wav')
  audio.play()
}

export default {
  data() {
    return {
      message: 'Hello from MyComponent!',
      test: new MyNameClass('dallin', 'wright')
    }
  },
  methods: {
    allowDrop,
    drop,
    drag
  },
  mounted(): void {
    retrieveData()
  }
}
</script>

<template>
  <!-- player one  -->
  <div class="player-vertical">
    <div class="row">
      <div class="invisible-square" id="1-1"></div>
      <div class="invisible-square" id="1-2"></div>
      <div class="square white" id="1-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="1-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="1-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="1-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="1-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="1-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="1-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="1-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="invisible-square" id="1-11"></div>
      <div class="invisible-square" id="1-12"></div>
    </div>
    <div class="row">
      <div class="invisible-square" id="2-1"></div>
      <div class="invisible-square" id="2-2"></div>
      <div class="square black" id="2-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="2-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="2-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="2-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="2-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="2-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="2-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="2-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="invisible-square" id="2-11"></div>
      <div class="invisible-square" id="2-12"></div>
    </div>
  </div>
  <!-- standard board -->
  <div class="chessboard-standard">
    <div class="row">
      <div class="square white" id="3-1" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="3-2" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="3-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="3-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="3-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="3-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="3-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="3-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="3-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="3-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="3-11" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="3-12" @drop="drop" @dragover="allowDrop"></div>
    </div>
    <div class="row">
      <div class="square black" id="4-1" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="4-2" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="4-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="4-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="4-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="4-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="4-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="4-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="4-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="4-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="4-11" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="4-12" @drop="drop" @dragover="allowDrop"></div>
    </div>
    <div class="row">
      <div class="square white" id="5-1" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="5-2" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="5-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="5-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="5-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="5-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="5-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="5-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="5-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="5-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="5-11" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="5-12" @drop="drop" @dragover="allowDrop"></div>
    </div>
    <div class="row">
      <div class="square black" id="6-1" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="6-2" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="6-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="6-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="6-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="6-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="6-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="6-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="6-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="6-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="6-11" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="6-12" @drop="drop" @dragover="allowDrop"></div>
    </div>
    <div class="row">
      <div class="square white" id="7-1" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="7-2" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="7-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="7-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="7-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="7-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="7-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="7-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="7-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="7-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="7-11" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="7-12" @drop="drop" @dragover="allowDrop"></div>
    </div>
    <div class="row">
      <div class="square black" id="8-1" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="8-2" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="8-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="8-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="8-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="8-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="8-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="8-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="8-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="8-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="8-11" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="8-12" @drop="drop" @dragover="allowDrop"></div>
    </div>
    <div class="row">
      <div class="square white" id="9-1" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="9-2" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="9-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="9-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="9-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="9-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="9-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="9-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="9-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="9-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="9-11" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="9-12" @drop="drop" @dragover="allowDrop"></div>
    </div>
    <div class="row">
      <div class="square black" id="10-1" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="10-2" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="10-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="10-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="10-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="10-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="10-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="10-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="10-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="10-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="10-11" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="10-12" @drop="drop" @dragover="allowDrop"></div>
    </div>
  </div>
  <!-- player three  -->
  <div class="player-vertical">
    <div class="row">
      <div class="invisible-square" id="11-1"></div>
      <div class="invisible-square" id="11-2"></div>
      <div class="square white" id="11-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="11-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="11-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="11-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="11-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="11-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="11-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="11-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="invisible-square" id="11-11"></div>
      <div class="invisible-square" id="11-12"></div>
    </div>
    <div class="row">
      <div class="invisible-square" id="12-1"></div>
      <div class="invisible-square" id="12-2"></div>
      <div class="square black" id="12-3" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="12-4" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="12-5" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="12-6" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="12-7" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="12-8" @drop="drop" @dragover="allowDrop"></div>
      <div class="square black" id="12-9" @drop="drop" @dragover="allowDrop"></div>
      <div class="square white" id="12-10" @drop="drop" @dragover="allowDrop"></div>
      <div class="invisible-square" id="12-11"></div>
      <div class="invisible-square" id="12-12"></div>
    </div>
  </div>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

/* .chessboard-standard {
  border: 2px solid #333;
} */

.row {
  display: flex;
}

.square {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.invisible-square {
  width: 50px;
  height: 50px;
}

.white {
  background-color: #f0d9b5;
}

.black {
  background-color: #b58863;
}
</style>
