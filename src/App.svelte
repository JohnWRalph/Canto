<script lang="ts">
  import { toUnicode } from "punycode";
  import GameBoard from "./components/GameBoard.svelte";
  import onKeyDown from "./components/GameBoard.svelte";
  import { sprite2Direction, spriteDirection } from "./store/spritedirection";
  import {
    character2Position,
    characterPosition,
  } from "./store/spritePosition";

  let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let y = [1, 2, 3, 4, 5];

  function player1Left() {
    console.log("e");

    if ($characterPosition[0] === 1) {
      // break;
    } else if ($characterPosition[1] !== $character2Position[1]) {
      $characterPosition[0] = $characterPosition[0] - 1;
      changeSpriteDirection(spriteDirection, false);
      // break;
    } else if ($characterPosition[0] !== $character2Position[0] + 1) {
      $characterPosition[0] = $characterPosition[0] - 1;
      changeSpriteDirection(spriteDirection, false);
      // break;
    } else {
      changeSpriteDirection(spriteDirection, false);
      // break;
    }
  }

  function player1Up() {
    if ($characterPosition[1] === 1) {
    } else if ($characterPosition[0] !== $character2Position[0]) {
      $characterPosition[1] = $characterPosition[1] - 1;
    } else if ($characterPosition[1] !== $character2Position[1] + 1) {
      $characterPosition[1] = $characterPosition[1] - 1;
    } else {
    }
  }

  function player1Down() {
    if ($characterPosition[1] === y.length) {
    } else if ($characterPosition[0] !== $character2Position[0]) {
      $characterPosition[1] = $characterPosition[1] + 1;
    } else if ($characterPosition[1] !== $character2Position[1] - 1) {
      $characterPosition[1] = $characterPosition[1] + 1;
    } else {
    }
  }

  function player1Right() {
    if ($characterPosition[0] === x.length) {
    } else if ($characterPosition[1] !== $character2Position[1]) {
      $characterPosition[0] = $characterPosition[0] + 1;
      changeSpriteDirection(spriteDirection, true);
    } else if ($characterPosition[0] !== $character2Position[0] - 1) {
      $characterPosition[0] = $characterPosition[0] + 1;
      changeSpriteDirection(spriteDirection, true);
    } else {
      changeSpriteDirection(spriteDirection, true);
    }
  }
function player2Left(){
  if ($character2Position[0] === 1) {
                    ;
                }
                else if ($character2Position[1] !== $characterPosition[1]) {
                    $character2Position[0] = $character2Position[0] - 1;
                    changeSpriteDirection(sprite2Direction, false);
                    ;
                }
                else if ($character2Position[0] !== $characterPosition[0] + 1) {
                    $character2Position[0] = $character2Position[0] - 1;
                    changeSpriteDirection(sprite2Direction, false);
                    ;
                } else {
                    changeSpriteDirection(sprite2Direction, false);
                    ;
                }
}
  function player2Up() {
    if ($character2Position[1] === 1) {
    } else if ($character2Position[0] !== $characterPosition[0]) {
      $character2Position[1] = $character2Position[1] - 1;
    } else if ($character2Position[1] !== $characterPosition[1] + 1) {
      $character2Position[1] = $character2Position[1] - 1;
    } else {
    }
  }

  function player2Right() {
    if ($character2Position[0] === x.length) {
    } else if ($character2Position[1] !== $characterPosition[1]) {
      $character2Position[0] = $character2Position[0] + 1;
      changeSpriteDirection(sprite2Direction, true);
    } else if ($character2Position[0] !== $characterPosition[0] - 1) {
      $character2Position[0] = $character2Position[0] + 1;
      changeSpriteDirection(sprite2Direction, true);
    } else {
      changeSpriteDirection(sprite2Direction, true);
    }
  }

  function player2Down() {
    if ($character2Position[1] === y.length) {
    }
   else  if ($character2Position[0] !== $characterPosition[0]) {
      $character2Position[1] = $character2Position[1] + 1;
    }
    else if ($character2Position[1] !== $characterPosition[1] - 1) {
      $character2Position[1] = $character2Position[1] + 1;
    } else {
    }
  }
  // case 68:

  // case 83:

  //     }

  console.log($characterPosition);
  console.log($character2Position);

  function changeSpriteDirection(character, direction) {
    character.set(direction);

    console.log(Number($spriteDirection));
  }
</script>
<div id="controls">
  <div id="Player1controls"> 
  <button id="P1Up" class="P1MovementButton" on:click={player1Up}> up </button><br>
  <button id="P1Left" class="P1MovementButton" on:click={player1Left}>
    left
  </button>
  <button id="P1Right" class="P1MovementButton" on:click={player1Right}>
    right
  </button><br>
 
  <button id="P1Down" class="P1MovementButton" on:click={player1Down}>
    down
  </button>
</div>

<div id="Player2Controls"> 
   <button id="P2Up" class="P2MovementButton" on:click={player2Up}> Up </button><br>
  <button id="P2Left" class="P2MovementButton" on:click={player2Left}> Left </button>

  <button id="P2Right" class="P2MovementButton" on:click={player2Right}>
    Right
  </button><br>
  <button id="P2Down" class="P2MovementButton" on:click={player2Down}>
    Down
  </button>
</div>
</div>


<div id="info">
  W-A-S-D for Red player movement
  <br />
  Arrow Keys for Greenplayer movement
</div>

<main>
  <GameBoard />
</main>

<style>
  #info {
    color: white;
  }
  .P1MovementButton {
    background-color: green;
    margin: 20px;
  }
  .P2MovementButton {
    background-color: brown;
    margin: 20px;
  }

  #controls{
    display:flex;
    justify-content: center;
    justify-content: space-around;
  }
</style>
