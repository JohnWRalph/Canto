<script lang="ts">
    import { quintOut } from "svelte/easing";
    import { crossfade, fade, fly, slide } from "svelte/transition";
    import {
        spriteDirection,
        sprite2Direction,
    } from "../store/spritedirection";
    import {
        characterPosition,
        character2Position,
        hoodiePosition,
    } from "../store/spritePosition";
    // import { flip } from "svelte/animate";
    import Sprite from "./Sprite.svelte";
    import SpriteAI from "./SpriteAI.svelte";
    import Hoodie from "./Hoodie.svelte";
 
    let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let y = [1, 2, 3, 4, 5];

    function onKeyDown(e) {
        console.log("e",e);
        
        switch (e.keyCode) {
            case 37:
                if ($characterPosition[0] === 1) {
                    break;
                }
                if ($characterPosition[1] !== $character2Position[1]) {
                    $characterPosition[0] = $characterPosition[0] - 1;
                    changeSpriteDirection(spriteDirection, false);
                    break;
                }
                if ($characterPosition[0] !== $character2Position[0] + 1) {
                    $characterPosition[0] = $characterPosition[0] - 1;
                    changeSpriteDirection(spriteDirection, false);
                    break;
                } else {
                    changeSpriteDirection(spriteDirection, false);
                    break;
                }

            case 38:
                if ($characterPosition[1] === 1) {
                    break;
                }
                if ($characterPosition[0] !== $character2Position[0]) {
                    $characterPosition[1] = $characterPosition[1] - 1;

                    break;
                }
                if ($characterPosition[1] !== $character2Position[1] + 1) {
                    $characterPosition[1] = $characterPosition[1] - 1;

                    break;
                } else {
                    break;
                }
            case 39:
                if ($characterPosition[0] === x.length) {
                    break;
                }
                if ($characterPosition[1] !== $character2Position[1]) {
                    $characterPosition[0] = $characterPosition[0] + 1;
                    changeSpriteDirection(spriteDirection, true);
                    break;
                }
                if ($characterPosition[0] !== $character2Position[0] - 1) {
                    $characterPosition[0] = $characterPosition[0] + 1;
                    changeSpriteDirection(spriteDirection, true);
                    break;
                } else {
                    changeSpriteDirection(spriteDirection, true);
                    break;
                }
            case 40:
                if ($characterPosition[1] === y.length) {
                    break;
                }
                if ($characterPosition[0] !== $character2Position[0]) {
                    $characterPosition[1] = $characterPosition[1] + 1;

                    break;
                }
                if ($characterPosition[1] !== $character2Position[1] - 1) {
                    $characterPosition[1] = $characterPosition[1] + 1;

                    break;
                } else {
                    break;
                }
            case 65:
                if ($character2Position[0] === 1) {
                    break;
                }
                if ($character2Position[1] !== $characterPosition[1]) {
                    $character2Position[0] = $character2Position[0] - 1;
                    changeSpriteDirection(sprite2Direction, false);
                    break;
                }
                if ($character2Position[0] !== $characterPosition[0] + 1) {
                    $character2Position[0] = $character2Position[0] - 1;
                    changeSpriteDirection(sprite2Direction, false);
                    break;
                } else {
                    changeSpriteDirection(sprite2Direction, false);
                    break;
                }

            case 87:
                if ($character2Position[1] === 1) {
                    break;
                }
                if ($character2Position[0] !== $characterPosition[0]) {
                    $character2Position[1] = $character2Position[1] - 1;

                    break;
                }
                if ($character2Position[1] !== $characterPosition[1] + 1) {
                    $character2Position[1] = $character2Position[1] - 1;

                    break;
                } else {
                    break;
                }
            case 68:
                if ($character2Position[0] === x.length) {
                    break;
                }
                if ($character2Position[1] !== $characterPosition[1]) {
                    $character2Position[0] = $character2Position[0] + 1;
                    changeSpriteDirection(sprite2Direction, true);
                    break;
                }
                if ($character2Position[0] !== $characterPosition[0] - 1) {
                    $character2Position[0] = $character2Position[0] + 1;
                    changeSpriteDirection(sprite2Direction, true);
                    break;
                } else {
                    changeSpriteDirection(sprite2Direction, true);
                    break;
                }
            case 83:
                if ($character2Position[1] === y.length) {
                    break;
                }
                if ($character2Position[0] !== $characterPosition[0]) {
                    $character2Position[1] = $character2Position[1] + 1;

                    break;
                }
                if ($character2Position[1] !== $characterPosition[1] - 1) {
                    $character2Position[1] = $character2Position[1] + 1;

                    break;
                } else {
                    break;
                }
        }

        console.log($characterPosition);
        console.log($character2Position);
    }

    function changeSpriteDirection(character, direction) {
        character.set(direction);

        console.log(Number($spriteDirection));
    }

</script>

<div id="Gameboard">
    {#each x as row}
        <div>
            {#each y as column}
                <div class="boardSpace">
                    {#if row === $characterPosition[0] && column === $characterPosition[1]}
                        <div
                            out:fly={{ x: 20, y: -10, duration: 50 }}
                            in:fly={{ x: 20, y: -30, duration: 100 }}
                            class="characterSpace"
                        >
                            <Sprite />
                        </div>
                    {:else if row === $character2Position[0] && column === $character2Position[1]}
                        <div
                            out:fly={{ x: 20, y: -10, duration: 50 }}
                            in:fly={{ x: 20, y: -30, duration: 100 }}
                            class="characterSpace"
                        >
                            <SpriteAI />
                        </div>
                        <!-- {:else if row === $hoodiePosition[0] && column === $hoodiePosition[1]}
                        <div
                            out:fly={{ x: 20, y: -10, duration: 50 }}
                            in:fly={{ x: 20, y: -30, duration: 100 }}
                            class="characterSpace"
                        >
                            <Hoodie />
                        </div> -->
                    {:else}
                        <div />
                    {/if}
                </div>
            {/each}
        </div>
    {/each}
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
    .boardSpace {
        border: 1px solid black;
        height: 100px;
        width: 100px;
    }
    .characterSpace {
        height: 100px;
        width: 100px;
    }
    #Gameboard {
        display: flex;
        background-color: aliceblue;
    }
</style>
