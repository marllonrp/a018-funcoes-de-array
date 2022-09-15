const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

let caixaAlta = (objeto) => {
  let object = {...objeto}
    for (i in object){
   object[i] = object[i].toUpperCase()
  }
  return object
};


const textoCorrido = (objeto) => {
let texto = " "

for (i in objeto){
    texto += `${objeto[i]} `  
}
return texto.trim()

    //   return (
//     objeto.nome +
//     " " +
//     objeto.profissao +
//     " " +
//     objeto.username +
//     " " +
//     objeto.senha
 
};

const imprimir = (objeto, funcao) => {
    console.log(funcao(objeto) )
}

imprimir (objeto,caixaAlta)
imprimir (objeto, textoCorrido)