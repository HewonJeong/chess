// TODO: Refacetor todo as class

type Observer = ((position:number[]) => void) | null

let knightPosition = [0, 0];
let observer: Observer = null;

function emitChange() {
  observer && observer(knightPosition);
}

export function observe(o: (position:number[]) => void) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX: number, toY: number) {
  knightPosition = [toX, toY];
  emitChange();
}