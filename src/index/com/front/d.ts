import {detect} from "jschardet"

declare function detect(
    src :string
) :{
    encoding :string,
    confidence :number,
}

//TODO  Embed this check into the loader
export default function d() {
    detect("\xc3\xa0\xc3\xad\xc3\xa0\xc3\xa7\xc3\xa3")
}
