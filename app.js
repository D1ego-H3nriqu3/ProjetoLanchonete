import PromptSync from "prompt-sync";
const prompt = PromptSync();
import sairSistema from "./sair.js";
import saudacao from "./criarSaudacao.js";
import criarPedido from "./criarPedido.js";
import calcTotal from "./calcularTotal.js";

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
        criarS()
        break
        case("2"):
        registrarP()
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

    function criarS(){
        let nome = (prompt("Digite seu nome: ")).trim()
        console.log(saudacao(nome))
    }

    function registrarP(){
        let produto = (prompt("Digite o produto: ")).trim()
        if(produto === ""){
            console.log("\nDigite um produto válido;\n")
            return registrarP()
        }
        let preco = Number(prompt("Digite o preço: "))
        if(isNaN(preco) || preco<=0){
            console.log("\nDigite um preço válido;\n")
            return registrarP()
        }
        let qtd = Number(prompt("Digite a quantidade: "))
        if(isNaN(qtd) || qtd<=0){
            console.log("\nDigite uma quantidade válido;\n")
            return registrarP()
        }
        let pedido = criarPedido(produto, preco, qtd)
        let total = calcTotal(pedido)
        console.log("Pedido:", pedido, "\nTotal: R$", total)
    }