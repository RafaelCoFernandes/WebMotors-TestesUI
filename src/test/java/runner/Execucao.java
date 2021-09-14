package runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="src/test/resources/Features/webmotors.feature", 
		glue={"testes"},
		tags = "@executa",
		dryRun = false,
        monochrome = true, 
        plugin = { "pretty","junit:target/JUnitReports/report.xml",
		"json:target/JSONReports/report.json",
		"html:target/HtmlReports/report.html"})

public class Execucao {

}
