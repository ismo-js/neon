function modload(ctx = {}) {
    const [...scripts] = document.getElementsByTagName("script")
    const modScripts = scripts.filter(el=> "module" === el.type)

    for (let el of modScripts) {
        fetch(el.src)
            .then(res=> res.arrayBuffer())
            .then(bs=> WebAssembly.instantiate(bs, ctx))
            .then(was=> {
                const sum = was.instance.exports.sum(2, 3)
                console.log("Sum: ", sum)
            })
    }
}

document.addEventListener("DOMContentLoaded", ev=> {
    modload()
})
