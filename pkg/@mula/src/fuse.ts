import fuse from "fuse-bindings"
import {Int} from "neon-lowbar"

namespace FileHdm {
    export interface Sys {
        destroy() :void
    }
    
    export interface Perm {
        readonly x :boolean,
        readonly w :boolean,
        readonly r :boolean,
    }
    
    export interface Ownership {
        readonly userId :Int
        readonly groupId :Int
    }
    
    export interface Mode {
        readonly owner :Perm
        readonly group :Perm
        readonly other :Perm
    }

    export interface Times {
        readonly accessed :Int
        readonly modified :Int
        readonly changed :Int
    }
    
    export interface Attrs {
        own :Ownership
        mode :Mode
        time :Times
        size :Int
    }

    export interface File {
        access(mode :Mode)
    
        //…writable to truncate
    }
}

class FuseWrap {
    pathC :{[key :number] :FileHdm.Path} = {}

    constructor(
        readonly fs :FileHdm.Sys,
    ) {
    }
    
    readdir(ph, cb) {
        console.log(`F–Readin ${ph}…`)

    }
}

fuse.mount(
    "./mnt",
    new FuseWrap(),
    (err :Error)=> {
        if (err) throw err

        console.log(`F–Mounted.`)
    },
)