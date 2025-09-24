function fatorial(n){
    let fat = 1
    for(let i=n; i>1; i--){
        //fat multiplica por i e recebe o resultado a cada vez que passa pelo for
        fat*=i
    }
    return fat
}
console.log(fatorial(5))