const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

let caixaAlta = (objeto) => {
  objeto.nome = objeto.nome.toUpperCase();
  objeto.profissao = objeto.profissao.toUpperCase();
  objeto.username = objeto.username.toUpperCase();
  objeto.senha = objeto.senha.toUpperCase();
  return objeto;
};


const textoCorrido = (objeto) => {
  return (
    objeto.nome +
    " " +
    objeto.profissao +
    " " +
    objeto.username +
    " " +
    objeto.senha
  );
};

const imprimir = (objeto, funcao) => {
    console.log(funcao(objeto) )
}

imprimir (objeto,caixaAlta)
imprimir (objeto, textoCorrido)