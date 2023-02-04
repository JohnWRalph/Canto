import { writable } from "svelte/store";

const characterPosition = writable<number[]>();
characterPosition.set([1,1])
const character2Position = writable<number[]>();
character2Position.set([3,3])
export  {characterPosition, character2Position}