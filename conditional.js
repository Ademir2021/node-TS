let VouPescar = false
let EstaChovendo = true

if(VouPescar && EstaChovendo){
    console.log("Nao posso ir pescar devido a chuva")
}
else if(VouPescar || !EstaChovendo){
    console.log("Mesmo com chuva pretendo ir pescar")
}
else if(VouPescar){
    console.log("Nao estou afim de pescar hoje")
}
else if(EstaChovendo){
    console.log("Sem chuva mas nao estou afim de pescar hoje")
}
else{
    console.log("Vou ficar em casa")
}