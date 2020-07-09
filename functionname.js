
  // Guarda todos os nomes
  var stringNomes = ['John Doe', 'Peter Parker', 'Mary Jane Watson-Parker', 'James Doe', 'John Elvis Doe', 'Jane Doe', 'Penny Parker'];
  //guarda nome do dominio
  var company ="@company.com"
	var usernames = [];
  //Repetição para separação e escrita dos nomes
  for (i = 0; i < stringNomes.length; i++) {
          // Guarda os nomes e separa-os
          var name = stringNomes[i];
          var cortar = name.split(" ", 3);
            // analisa se qtd é igual a 3 e guarda cada nome em uma var
            if (cortar.length == 3) {
                  var priNome = cortar[0];
                 var segNome = cortar[1];
                 var terNome = cortar[2];
                 // Separa apenas primera lentra do Nome e nome do meio
                 priNome = priNome.slice("",1);
                 segNome = segNome.slice("",1);
                 // guarda tudo em ordem e transforma em minusc
                 var all = (terNome.toLowerCase() + "." + priNome.toLowerCase() + "." + segNome.toLowerCase());
                 // trata tirando hifen dos nomes
                 all = all.replace(/-/g, "");
                 // monta nome + dominio
                 console.log(all + company);
                 // Separa o primeiro e segundo nome caso tenha apenas 2
              }   else {
                      var priNome = cortar[0];
                      var segNome = cortar[1];
                      // Separa apenas primera lentra do Nome
                      priNome = priNome.slice("",1);
                      // guarda tudo em ordem e transforma em minusc
                      var all = (segNome.toLowerCase() + "." + priNome.toLowerCase());
                      // trata tirando hifen dos nomes
                      all = all.replace(/-/g, "");
                      compemail = all + i + company;


                      // monta nome + número da linha dominio
                      console.log(compemail);
          }
usernames.forEach(function (el) {
    document.getElementById('email').innerHTML += '<p>' + el + '</p>';
})

  }
