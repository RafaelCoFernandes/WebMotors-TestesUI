$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/webmotors.feature");
formatter.feature({
  "name": "Verificar a funcionalidade dos campos de busca do site WebMotors.",
  "description": "   Como usuario desejo verificar se os campos de busca estão funcionando dentro da \n   normalidade pesquisando uma marca e modelo específicos.",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@executa"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Pesquisar Honda City, através da concessionaria e com blindagem.",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "inserir a marca \u003cmarca\u003e e o modelo \u003cmodelo\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "clicar na opcao correspondente - Honda City",
  "keyword": "E "
});
formatter.step({
  "name": "selecionar o filtro um - Concessionária",
  "keyword": "E "
});
formatter.step({
  "name": "selecionar o filtro dois - Blindagem",
  "keyword": "E "
});
formatter.step({
  "name": "clicar em um dos veiculos Honda City presentes na tela.",
  "keyword": "E "
});
formatter.step({
  "name": "valido as especificacoes \u003cespecificacoes\u003e do Honda City através de uma foto.",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "marca",
        "modelo",
        "especificacoes"
      ]
    },
    {
      "cells": [
        "\"Honda \"",
        "\"City\"",
        "\"1.5 EX 16V FLEX 4P AUTOMÁTICO\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que eu esteja no site da \"https://www.webmotors.com.br\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "testes.Steps.que_eu_esteja_no_site_da(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pesquisar Honda City, através da concessionaria e com blindagem.",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@executa"
    }
  ]
});
formatter.step({
  "name": "inserir a marca \"Honda \" e o modelo \"City\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "testes.Steps.inserir_a_marca_e_o_modelo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na opcao correspondente - Honda City",
  "keyword": "E "
});
formatter.match({
  "location": "testes.Steps.clicar_na_opcao_correspondente_Honda_City()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/[0:0:0:0:0:0:0:1]:6841\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-69B901K\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.Metodos.clicar(Metodos.java:52)\r\n\tat testes.Steps.clicar_na_opcao_correspondente_Honda_City(Steps.java:36)\r\n\tat ✽.clicar na opcao correspondente - Honda City(file:///C:/Workspace/eclipse-workspace/WebMotors/src/test/resources/Features/webmotors.feature:14)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/[0:0:0:0:0:0:0:1]:6841\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.Metodos.clicar(Metodos.java:52)\r\n\tat testes.Steps.clicar_na_opcao_correspondente_Honda_City(Steps.java:36)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:768)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat java.base/sun.nio.ch.Net.pollConnect(Native Method)\r\n\tat java.base/sun.nio.ch.Net.pollConnectNow(Net.java:660)\r\n\tat java.base/sun.nio.ch.NioSocketImpl.timedFinishConnect(NioSocketImpl.java:549)\r\n\tat java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:597)\r\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:333)\r\n\tat java.base/java.net.Socket.connect(Socket.java:648)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 65 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "selecionar o filtro um - Concessionária",
  "keyword": "E "
});
formatter.match({
  "location": "testes.Steps.selecionar_o_filtro_um_Concessionária()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecionar o filtro dois - Blindagem",
  "keyword": "E "
});
formatter.match({
  "location": "testes.Steps.selecionar_o_filtro_dois_Blindagem()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicar em um dos veiculos Honda City presentes na tela.",
  "keyword": "E "
});
formatter.match({
  "location": "testes.Steps.clicar_em_um_dos_veiculos_Honda_City_presentes_na_tela()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "valido as especificacoes \"1.5 EX 16V FLEX 4P AUTOMÁTICO\" do Honda City através de uma foto.",
  "keyword": "Entao "
});
formatter.match({
  "location": "testes.Steps.valido_as_especificacoes_do_Honda_City_através_de_uma_foto(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Pesquisar Toyota Corolla, através da concessionaria e com blindagem.",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "inserir a marca \u003cmarca\u003e e o modelo \u003cmodelo\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "clicar na opcao correspondente - Toyota Corolla",
  "keyword": "E "
});
formatter.step({
  "name": "selecionar o filtro um - Concessionária",
  "keyword": "E "
});
formatter.step({
  "name": "selecionar o filtro dois - Blindagem",
  "keyword": "E "
});
formatter.step({
  "name": "clicar em um dos veiculos Toyota Corolla presentes na tela.",
  "keyword": "E "
});
formatter.step({
  "name": "valido as especificacoes \u003cespecificacoes\u003e do Toyota Corolla através de uma foto.",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "marca",
        "modelo",
        "especificacoes"
      ]
    },
    {
      "cells": [
        "\"Toyota \"",
        "\"Corolla\"",
        "\"2.0 XEI 16V FLEX 4P AUTOMÁTICO\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que eu esteja no site da \"https://www.webmotors.com.br\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "testes.Steps.que_eu_esteja_no_site_da(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pesquisar Toyota Corolla, através da concessionaria e com blindagem.",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@executa"
    }
  ]
});
formatter.step({
  "name": "inserir a marca \"Toyota \" e o modelo \"Corolla\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "testes.Steps.inserir_a_marca_e_o_modelo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na opcao correspondente - Toyota Corolla",
  "keyword": "E "
});
formatter.match({
  "location": "testes.Steps.clicar_na_opcao_correspondente_Toyota_Corolla()"
});
