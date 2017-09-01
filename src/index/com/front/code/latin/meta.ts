export {Latin1} from "./latin1"
export {Latin2} from "./latin2"

type Latin = Latin1 & Latin2
const Latin = {
    ...Latin1,
    ...Latin2,
}
