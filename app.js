import PromptSync from "prompt-sync";
const prompt = PromptSync();
import sairSistema from "./sair.js";

let indice = true

do{
    console.log(`\n=== Lanchonete do Bairro ===\n
1. Dar boas-vindas ao cliente
2. Registrar pedido
3. Calcular desconto
4. Ver vendas do dia
0. Sair`)
    let resposta = (prompt("Escolha uma opção: ")).trim()
    switch(resposta){
        case("1"):

        break
        case("2"):

        break
        case("3"):

        break
        case("4"):

        break
        case("0"):
        indice = sairSistema(indice)
        break
        default:
            console.log("\nDigite uma opção válida;")
    }
}while(indice === true)