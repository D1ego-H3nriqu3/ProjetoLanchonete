function saudacao(nome){
    if(nome === ""){
        return ("\nDigite um nome válido!")
    }else{
        return (`\nOlá, ${nome}! Que bom te ver aqui!`)
    }
}

export default saudacao