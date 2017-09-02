import Latin1 from "./latin1"
import Latin2 from "./latin2"

/* ––^––v––^–– */
export {Latin1, Latin2}
export type Latin = Latin1 & Latin2
export const Latin = {
    ...Latin1,
    ...Latin2,
}
