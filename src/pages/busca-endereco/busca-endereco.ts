import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Endereco } from '../../model/endereco';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnderecoService } from '../../services/endereco.service';



@IonicPage()
@Component({
  selector: 'page-busca-endereco',
  templateUrl: 'busca-endereco.html',
})
export class BuscaEnderecoPage {
 
  formGroup: FormGroup;
  @ViewChild('cep') cep;
 

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
    
    this.enderecoServ.buscaCEP(this.cep.value)
    .subscribe(response =>{
     
      this.formGroup = this.formBullder.group({

        logradouro : [response['logradouro']],
        bairro :  [response['bairro']],
        localidade :  [response['localidade']],
        uf : [response['uf']],
  
      })
    })
  }

}
