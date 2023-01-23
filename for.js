// function soma(...num){
//     let res=0
//     let qtde=num.length
//     for(let i=0; i<qtde; i++){
//         res+=num[i]
//     }
//     return res
// }

// console.log(soma(1,2,3))

const soma=(...valores)=>{
const somar=val=>{
    let res=0
    for( v of val)
    res += v
    return res
}
    return somar(valores)
}

console.log(soma(1,2,3))