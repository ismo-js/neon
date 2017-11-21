import * as fuse from "fuse-bindings"
import {Int, O} from "neon-lowbar"

type Ctor =
    (new (...a :any[])=> {})

type Prop = string | symbol

function getProps(
    o :Object,
) :Prop[] {
    const getNam = O.getOwnPropertyNames
    const getSym = O.getOwnPropertySymbols

    return (getNam(o) as Prop[]).concat(getSym(o))
}

function mix<
      Mixin extends Ctor | Function,
      Dad extends Ctor>(
    dad :Dad,
    mixin :Mixin,
): Dad & Mixin
function mix<
      Mixin extends Ctor | Function>(
    mixin :Mixin,
) :Mixin
function mix(
    dad :Ctor | undefined,
    mixin? :Ctor,
) :Ctor {
    const mixRes = mixin
        ? class extends dad {}
        : (
            [mixin, dad] = [dad, undefined],
        (class {}))
    const getDesc = O.getOwnPropertyDescriptor
    const setDesc = O.defineProperty

    for (let prop of getProps(mixin!.prototype))
        setDesc(
            mixRes.prototype,
            prop,
            getDesc(mixin!.prototype, prop),
        )

    return mixRes
}

// File Handlement
namespace FileHdm {
    export interface Sys {
        destroy() :void
    }
    
    // Permissions:
    export interface Perm {
        readonly x :boolean // e*x*ecute
        readonly w :boolean // *w*rite
        readonly r :boolean // *r*ead
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
    
    export abstract class Attrs {
        abstract own :Ownership
        abstract mode :Mode
        abstract time :Times
    }

    export abstract class File extends mix(Attrs) {
        abstract size :Int
        //…writable to truncate
    }
}

namespace FuseHdm {
    export enum Errors {
        perm = -1, // op not permitted
        noEnt = -2, // no such entity
        io = -5, // i|o error
        busy = -16,
        exist = -17,
        notDir = -20,
        isDir = -21,
        notEmpty = -39, // dir not empty
        loop = -40, // too many symlinks
    }
    //… not complete

    export type Cb<
          Pay0 = undefined,
          Pay1 = undefined> =
        (
            (
                ret :0,
                pay0?: Pay0,
                pay1?: Pay1,
            )=> void
        ) & (
            (ret :Errors)=> void
        )
    
    export class Wrapper {
        //pathC :{[key :number] :FileHdm.Path} = {}
    
        constructor(
            readonly fs? :FileHdm.Sys,
        ) {
        }
        
        readdir(
            ph :string,
            cb :Cb<string[]>,
        ) {
            console.log(`F–Readin dir ${ph}…`)
    
            cb(
                0,
                [
                    ".",
                    "..",
                    "alpha",
                ],
            )
        }
    
        getattr(
            ph :string,
            cb :Cb<Object>,
        ) {
            console.log(`F–Gettin attrs of "${ph}"…`)

            switch (ph) {
                case "/":
                    cb(
                        0,
                        {
                            mtime: 420*20*4*7,
                            atime: Date.now()-1337,
                            ctime: 420*20*4*7,
                            nlink: 1,
                            size: 100,
                            mode: 0o777,
                            uid: 420,
                            gid: 68,
                            dev: 0,
                            ino: 0,
                        },
                    )
                return; case "/alpha":
                    cb(
                        0,
                        {
                            mtime: Date.now()-420,
                            atime: Date.now()-420,
                            ctime: Date.now()-420,
                            nlink: 23,
                            size: 7,
                            mode: 0o204,
                            uid: 420,
                            gid: 68,
                            dev: 0,
                            ino: 0,
                        },
                    )
 
                default:
                    cb(Errors.noEnt)
            }
        }

        open(
            ph :string,
            flags :any,
            cb :Cb<Int>,
        ) {
            console.log(`F–Openin "${ph}" {${flags}}…`)

            cb(0, 42 as Int)
        }

        read(
            ph :string,
            fDesc :Int,
            buffer :Buffer,
            length :Int,
            pos :Int,
            cb :Cb<Int>,
        ) {
            if ("/" === ph) {
                console.log(`F–Readin at root…`)
                cb(Errors.noEnt)
                return
            }

            console.log(`F–Readin at "${ph}"…`)
            cb(0, 0 as Int)
        }
    }
   
    export function init(
        ph :string,
    ) {
        fuse.mount(
            ph,
            new Wrapper(),
            (err :Error)=> {
                if (err) throw err
        
                console.log(`F–Mounted at "${ph}".`)
            },
        )

        process.on("SIGINT", ()=> {
            fuse.unmount(
                ph,
                (err: Error)=> console.log(...err
                    ? [`F–"${ph}" not unmounted! Because: %s`, err]
                    : [`F–"${ph}" unmounted successfully :)`]
                )
            )
        })
    }
}

FuseHdm.init("./mnt5")