import Path from "./path"
import {
    Jsonable,
    JsonVal,
} from "./jsonify"

export default class Mirror {
    // source:
    src :Jsonable | JsonVal
    // relative destination:
    relDest :Path


}
