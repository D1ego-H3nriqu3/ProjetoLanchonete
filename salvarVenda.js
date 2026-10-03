import fs from "node:fs"

function sVenda(pedido){
    fs.appendFileSync("vendas.txt", `${pedido.quantidade}x - ${pedido.produto} - R$ ${pedido.preco}\n`)
}

export default sVenda
