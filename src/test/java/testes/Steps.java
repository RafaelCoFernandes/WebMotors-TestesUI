package testes;

import java.io.IOException;

import elementos.ElementosWeb;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pages.Metodos;

public class Steps {

	Metodos met = new Metodos();
	ElementosWeb ele = new ElementosWeb();

	@Dado("que eu esteja no site da {string}")
	public void que_eu_esteja_no_site_da(String site) {

		met.abrirNavegador(site);

	}

	@Quando("inserir a marca {string} e o modelo {string}")
	public void inserir_a_marca_e_o_modelo(String marca, String modelo) throws IOException {

		met.escrever(ele.getBarraBusca(), marca);
		met.escrever(ele.getBarraBusca(), modelo);

	}

	@E("clicar na opcao correspondente - Honda City")
	public void clicar_na_opcao_correspondente_Honda_City() throws InterruptedException {

		Thread.sleep(5000);
		met.clicar(ele.getDropMenuCity());

	}

	@E("clicar na opcao correspondente - Toyota Corolla")
	public void clicar_na_opcao_correspondente_Toyota_Corolla() throws InterruptedException {

		Thread.sleep(5000);
		met.clicar(ele.getDropMenuCorolla());

	}

	@E("selecionar o filtro um - Concessionária")
	public void selecionar_o_filtro_um_Concessionária() throws InterruptedException {

		Thread.sleep(5000);
		met.clicarBarraRolagem(ele.getConcessionaria());
	}

	@E("selecionar o filtro dois - Blindagem")
	public void selecionar_o_filtro_dois_Blindagem() throws InterruptedException {

		Thread.sleep(5000);
		met.clicarBarraRolagem(ele.getBlindagem());

	}

	@E("clicar em um dos veiculos Honda City presentes na tela.")
	public void clicar_em_um_dos_veiculos_Honda_City_presentes_na_tela() throws InterruptedException {

		Thread.sleep(5000);
		met.clicar(ele.getClicarCity());

	}

	@E("clicar em um dos veiculos Toyota Corolla presentes na tela.")
	public void clicar_em_um_dos_veiculos_Toyota_Corolla_presentes_na_tela() throws InterruptedException {

		Thread.sleep(5000);
		met.clicar(ele.getClicarCorolla());

	}

	@Entao("valido as especificacoes {string} do Honda City através de uma foto.")
	public void valido_as_especificacoes_do_Honda_City_através_de_uma_foto(String textoEsperado)
			throws IOException, InterruptedException {
		Thread.sleep(5000);
		met.validarInformacao(ele.getEspecicacoesCity(), textoEsperado);
		met.screenShot("Teste Validado - Honda City");
		met.fecharNavegador();
	}

	@Entao("valido as especificacoes {string} do Toyota Corolla através de uma foto.")
	public void valido_as_especificacoes_do_Toyota_Corolla_através_de_uma_foto(String textoEsperado)
			throws IOException, InterruptedException {
		Thread.sleep(5000);
		met.validarInformacao(ele.getEspecificacoesCorolla(), textoEsperado);
		met.screenShot("Teste Validado - Toyota Corolla");
		met.fecharNavegador();
	}

}
