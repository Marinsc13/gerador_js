// Função chamada pelo botão
function gerarPersonagem() {

  /* Declaração das variáveis */
  var js_nome;
  var js_habilidade;
  var js_descricao;
  var js_frase;

  /* Entrada de dados */
  js_nome = document.getElementById("nome").value;

  var selectHabilidade = document.getElementById("escolha");
  js_habilidade = selectHabilidade.options[selectHabilidade.selectedIndex].text;

  js_descricao = document.getElementById("descricao").value;

  /* Validação */
  if (js_nome == "") {
    alert("⚠️ Digite o nome do herói!");
    return;
  }

  /* Processamento */
  js_frase = "🏆 O(a) herói " + js_nome +
    " realizou um feito marcante usando sua habilidade de " +
    js_habilidade + ".";

  if (js_descricao != "") {
    js_frase = js_frase + " Características: " + js_descricao + ".";
  }

  /* Saída de dados */
  document.getElementById("resultado").innerHTML = js_frase;
}