function fatorial(n) {
    let res = 1
    for(let c = n; c > 1; c= c-1) {
        res = res * c
    }
    return res
}
console.log(fatorial(5))

// 5! = 5 x 4 x 3 x 2 x 1 = 120