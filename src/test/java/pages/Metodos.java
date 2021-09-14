package pages;

import static org.junit.Assert.assertEquals;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Metodos {

	WebDriver driver;

	public void abrirNavegador(String site) {

		String projectPath = System.getProperty("user.dir");
		System.out.println("Project path is: " + projectPath);
		System.setProperty("webdriver.chrome.driver",
				projectPath + "\\src\\test\\resources\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(site);
		driver.manage().window().maximize();

	}

	public void escrever(By elementos, String texto) throws IOException {

		try {

			driver.findElement(elementos).sendKeys(texto);

		}

		catch (Exception e) {

			System.out.println("======= Erro ao inserir ======= >>> " + texto + " " + LocalDateTime.now());
			screenShot("error/" + texto);
		}
	}

	public void clicar(By elementos) {

		driver.findElement(elementos).click();

	}

	public void clicarBarraRolagem(By elementos) {

		WebElement element = driver.findElement(elementos);
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
		driver.findElement(elementos).click();

	}

	public void validarInformacao(By elementos, String textoEsperado) {

		ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs2.get(1));

		String texto = driver.findElement(elementos).getText();
		assertEquals(textoEsperado, texto);

	}

	public void screenShot(String validacao) throws IOException {

		TakesScreenshot scrShot = ((TakesScreenshot) driver);
		File srcFile = scrShot.getScreenshotAs(OutputType.FILE);
		File destFile = new File("./src/evidencias/" + validacao + ".png");
		FileUtils.copyFile(srcFile, destFile);

	}

	public void fecharNavegador() {

		driver.quit();

	}

}
