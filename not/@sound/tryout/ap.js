syntax ap = function (ctx) {
  var x
  var y = []
  while (x = ctx.expand("expr")) y = y.concat(#`(x)`)
}

ap a b c
