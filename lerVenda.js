import fs from "node:fs"

function lerVenda(){
    let existe = fs.existsSync("vendas.txt")
        if(existe === false){
            return ("\nNão há nada para se ver aqui!")
        }else{
            console.log("\n===Vendas===\n")
            return fs.readFileSync("vendas.txt", "utf-8")
        }
}

export default lerVenda