//TESTES DE APRENDIZADO JavaScript

/*Testar nas ferramentas do desenvolvedor na aba "Console": é o comando básico de print do JavaScript.
console.log("Hello Word");

 //Aparece nome na tela.
 $("#main").append("[Wanessa]");
  
 //Copie e cole na aba "Console" em ferramentas do desenvolvedor:
 //var firstname="Wanessa";
 //var age=32;
 //console.log(firstname); 
 //Aparece a frase da variável awesomeThoughts na tela.
 
 var awesomeThoughts="I am Wanessa and I am AWESOME!";
 console.log(awesomeThoughts); 
 
 var email="camero@udacity.com";
 //.replace modifica o nome do servidor de email ou qualquer item que deseja modificar.
 var newEmail=email.replace("udacity","gmail");
 //Mostra email na tela.
 console.log(email);
 //Mostra newEmail na tela.
 console.log(newEmail); 
 //Usando .replace para var nova receber todos os dados da antiga.
 var funThoughts=awesomeThoughts.replace("awesomeThoughts","funThoughts");
 console.log(awesomeThoughts);
 console.log(funThoughts);
 //Alterando AWESOME para FUN ao exibir no navegador.
 funThoughts=awesomeThoughts.replace("AWESOME","FUN");
 //Utilizando o seletor jQuery #Main para id main e acrescentar nova variável "funThoughts".
 $("#main").append("<br>"+funThoughts); 
 
var s = "audacity";
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    return s;
};
//Como a audácia tem mais de Udacity nela, podemos usar .slice () para copiar a parte que precisamos.
// Did your code work? The line below will tell you!
console.log(udacityizer(s));*/



 /*Seletor jQuery p/ cabeçalho. #(cerquilha) indica que estamos procurando elemento com id cabeçalho*/
 /*.append add algo no final e
   .prepend add no inicio*/
 
 /*$("#header").append("<h1><b>Wanessa Luisa Pereira Costa</b></h1>");*/
 //NÃO PRECISA DISSO $("#header").append("<h2><b>Analyst Systems</b></h2>");
 
  
 name="Wanessa Luisa Pereira Costa";  
 //Aparece faixa no topo.
 var formattedName=HTMLheaderName.replace("%data%", name); 
 /*Subtitui os espaços no html por dados reais.*/ 
 //Insere nome abaixo da linha-> $("#header").append(formattedName);
 var role="Analyst Systems";
 var formattedRole=HTMLheaderRole.replace("%data%", role);
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 
 
 
 
 
 
 
 
 
 
 
 