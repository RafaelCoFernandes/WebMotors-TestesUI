# WebMotors – Testes UI 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/RafaelCoFernandes/WebMotors-TestesUI/blob/master/LICENSE) 
# 1) Sobre o projeto
A aplicação consiste em efetuar testes automatizados no site da WebMotors, usando as ferramentas Cucumber/Selenium/JUnit com BDD na execução dos testes.
# 2) Objetivo
Na condição de usuário, devemos realizar buscas pelo site, a fim de encontrar o veículo desejado. Enquanto QA, devemos verificar se o site se comporta de maneira adequada a necessidade do usuário e validar os testes através de imagens que comprovem a funcionalidade do componente de pesquisa.
## Cenários de Teste
- Descrição dos cenários de teste.

<img src="https://user-images.githubusercontent.com/81786010/133172736-5ef574f9-16fc-43c2-85b1-3d6742ccc9de.png" alt="drawing" width="800"/>

## Execução dos Cenários
- Métodos Utilizados.

<img src="https://user-images.githubusercontent.com/81786010/133172741-be7d82bd-0532-4c3c-b8ac-a96acaf36b2c.png" alt="drawing" width="800"/>

# 3) Tecnologias utilizadas

- BDD;
- Gherkin;
- Cucumber;
- Selenium WebDriver;
- JUnit;
- Java 11;

# 4) Dependências Utilizadas
| Plugin | Mais informações |
| ------ | ------ |
| Cucumber | [https://mvnrepository.com/artifact/io.cucumber/cucumber-java]|
| JUnit | [https://mvnrepository.com/artifact/junit/junit] |
| Selenium | [https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java]|
| Ashot | [https://mvnrepository.com/artifact/ru.yandex.qatools.ashot/ashot] |

# 5) Como executar o projeto

## Clonar Repositório

Abra a WorkSpace da sua IDE e no seu terminal GIT, insira o comando abaixo:

```bash
git clone https://github.com/RafaelCoFernandes/WebMotors-TestesUI.git
```
Após clonar o projeto, abra a sua IDE e importe o projeto Maven, com isso, basta executar a aplicação através da classe "Execucao" ou do modo que preferir.

## Obs Importantes

É importante certificar-se que o seu projeto esteja em UTF-8, pois como existem acentuações no texto, podem acabar gerando caracteres inválidos após a importação, causando problemas no momento da execução do aplicativo, no entanto eventuais erros deste tipo, são resolvidos facilmente corrigindo os caracteres necessários.

Caso os veículos utilizados como exemplo no teste não estejam mais presentes no site, pois as mudanças são contínuas, basta pesquisar por outros veículos na documentação Cucumber e alterar o elemento correspondente do site WebMotors na classe "ElementosWeb".

# Autor

Rafael Coelho Fernandes

- Linkedin: 
www.linkedin.com/in/rafael-fernandes-QA1997
