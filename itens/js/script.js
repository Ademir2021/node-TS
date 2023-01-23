//'use strict'
var id = 1
var venda = 1;
var totalVenda = 0;

const buttonAddItem = document.querySelector("#add");
buttonAddItem.addEventListener("click", function(e){
    e.preventDefault()
    let itens = [];
    let item = {}
    item.id = id++
    item.item = document.getElementById("item").value
    item.quant = document.getElementById("quant").value
    item.valor = document.getElementById("valor").value
    itens.push(item)

    var vendaItens = document.getElementById('vendaItens');
    itens.map ((val) =>{
    val.total = val.quant * val.valor
    vendaItens.innerHTML +=`
    <fieldset>
    <div id="itens_list">
    <p>Id: ${val.id}
    <p>Descrição: ${val.item}</p>
    <p>Valor: R$${val.valor}</p>
    <p>Quantidade: ${val.quant}</p>
    <p>Total Item: R$${val.total} </p>
    </div>
    </fieldset>`
});

const vendidos = document.getElementById('vendidos')
itens.map((val) => {
    if (val.quant > 0){}
    vendidos.innerHTML =`
    
    <tr>
    <td width="0px" >ID</td>
    <td width="120px">Descrição</td>
    <td width="9px">Quant</td>
    <td width="0px">Valor</td>
    <td width="0px">TItem</td>
    <tr>
    
    `
});

var vendido = document.getElementById('vendido');
itens.map((val) => {
    if(val.quant > 0){
        vendido.innerHTML +=`
        <tr>
        <td width="0%">${val.id}</td>
        <td width="0%">${val.item}</td>
        <td width="19%">${val.quant}</td>
        <td width="0%">R$${val.valor}</td>
        <td width="0%">R$${val.total}</td>
        </tr>
        `}
    })
    itens.map ((val) =>{
        totalVenda +=  val.quant * val.valor
    })

    document.getElementById("totalVenda").innerHTML = `
    <div>Total Venda: R$`+totalVenda+`</div>
    `
    document.getElementById("numVenda").innerHTML = `
    <div>Numero Venda: ${venda++}</div>
  `
});
