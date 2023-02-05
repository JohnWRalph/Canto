import { writable } from "svelte/store";

const spriteDirection = writable<boolean>();
spriteDirection.set(false)
const sprite2Direction = writable<boolean>();
sprite2Direction.set(false)

export  {spriteDirection, sprite2Direction}