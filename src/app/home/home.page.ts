import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  public resultado: string = ''; // variável que irá armazenar o resultado da operação
  public precoAlcool: string; // variável que irá armazenar o valor do preço do álcool
  public precoGasolina: string; // variável que irá armazenar o valor do preço da gasolina

  constructor() {
    this.precoAlcool = "";
    this.precoGasolina = "";
   }

  // método que irá realizar a operação
  public calcular(): void {
    // validar se os campos foram preenchidos
    if (this.precoAlcool && this.precoGasolina)  
    {
      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

      /*
        Faz o cálculo para saber qual a melhor opção de abastecimento
        se: (preço do álcool / preço da gasolina) >= 0.7 é melhor abastecer com gasolina
        senão é melhor utilizar álcool
      */

      var res = pAlcool / pGasolina
      if (res >= 0.7) {
        this.resultado = res + " Melhor utilizar Gasolina!"
      }else{
        this.resultado = res + " Melhor utilizar Álcool!"
      }

    } else{
      this.resultado = "Preencha os campos corretamente!"
    }
  }

}
