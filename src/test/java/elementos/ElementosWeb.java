package elementos;

import org.openqa.selenium.By;

public class ElementosWeb {

	private By barraBusca = By.id("searchBar");
	private By dropMenuCity = By.className("SearchBar__results__result__name");
	private By dropMenuCorolla = By.xpath("//*[@id=\"WhiteBox\"]/div[1]/div[2]/div/div/div/div/div/div/a[2]/div[2]");
	private By concessionaria = By.xpath("//*[@id=\"root\"]/main/div[1]/div[2]/div/div[5]/div[2]/label");
	private By blindagem = By.xpath("//*[@id=\"root\"]/main/div[1]/div[2]/div/div[15]/div[2]/label[1]");
	private By clicarCity = By
			.xpath("//*[@id=\"root\"]/main/div[1]/div[3]/div[2]/div/div[1]/div/div[2]/div/div[2]/a[1]/div[2]/h2");
	private By clicarCorolla = By
			.xpath("//*[@id=\"root\"]/main/div[1]/div[3]/div[2]/div/div[1]/div/div[6]/div/div[2]/a[1]/div[2]/h2");
	private By especicacoesCity = By.xpath("//*[@id=\"VehicleBasicInformationDescription\"]");
	private By especificacoesCorolla = By.xpath("//*[@id=\"VehicleBasicInformationDescription\"]");

	public By getBarraBusca() {
		return barraBusca;
	}

	public By getDropMenuCity() {
		return dropMenuCity;
	}

	public By getConcessionaria() {
		return concessionaria;
	}

	public By getBlindagem() {
		return blindagem;
	}

	public By getClicarCity() {
		return clicarCity;
	}

	public By getEspecicacoesCity() {
		return especicacoesCity;
	}

	public By getClicarCorolla() {
		return clicarCorolla;
	}

	public By getEspecificacoesCorolla() {
		return especificacoesCorolla;
	}

	public By getDropMenuCorolla() {
		return dropMenuCorolla;
	}

}
