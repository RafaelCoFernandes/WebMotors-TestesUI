#language: pt
#Autor - Rafael Fernandes
@executa
Funcionalidade: Verificar a funcionalidade dos campos de busca do site WebMotors.
  
   Como usuario desejo realizar buscas pelo site da WebMotors, pesquisando pelo menos dois veículos diferentes
   através dos campos de pesquisa e opções de filtro dispobilizadas por ele.

  Contexto: Acessar o site da WebMotors.
    Dado que eu esteja no site da "https://www.webmotors.com.br"

  Esquema do Cenario: Pesquisar Honda City, através da concessionaria e com blindagem.
    Quando inserir a marca <marca> e o modelo <modelo>
    E clicar na opcao correspondente - Honda City
    E selecionar o filtro um - Concessionaria
    E selecionar o filtro dois - Blindagem
    E clicar em um dos veiculos Honda City presentes na tela.
    Entao valido as especificacoes <especificacoes> do Honda City atraves de uma foto.

    Exemplos: 
      | marca    | modelo | especificacoes                  |
      | "Honda " | "City" | "1.5 EX 16V FLEX 4P AUTOMÁTICO" |

  Esquema do Cenario: Pesquisar Toyota Corolla, através da concessionaria e com blindagem.
    Quando inserir a marca <marca> e o modelo <modelo>
    E clicar na opcao correspondente - Toyota Corolla
    E selecionar o filtro um - Concessionaria
    E selecionar o filtro dois - Blindagem
    E clicar em um dos veiculos Toyota Corolla presentes na tela.
    Entao valido as especificacoes <especificacoes> do Toyota Corolla atraves de uma foto.

    Exemplos: 
      | marca     | modelo    | especificacoes                     |
      | "Toyota " | "Corolla" | "2.0 VVT-IE FLEX XEI DIRECT SHIFT" |
