// TODO: Refacetor todo as class

type Observer = ((position:number[]) => void) | null

let knightPosition = [1, 7];
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

export function canMoveKnight(toX: number, toY: number) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}