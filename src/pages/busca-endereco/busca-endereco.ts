import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Endereco } from '../../model/endereco';
import { FormBuilder } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-busca-endereco',
  templateUrl: 'busca-endereco.html',
})
export class BuscaEnderecoPage {

  formGroup: FormGroup;
  endereco : Endereco = new Endereco();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public enderecoServ : EnderecoService,
    public formBullder : FormBuilder) {
    this.formGroup = this.formBullder.group({

      cep : [''],
      logradouro : [''],
      bairro : [''],
      localidade : [''],
      uf : ['']

    })
  }

  buscar(){
    let cep = this.formGroup.controls['cep'].value
    this.enderecoServ.buscaCEP(cep)
    .subscribe(response =>{
      console.log(response)
    })
  }

}
