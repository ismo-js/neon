import {Char} from "./char"

export interface TrimOpt {

}

export class Line extends Char {
    mkOpt(opt :TrimOpt) :TrimOpt {
        return opt
    }
}
