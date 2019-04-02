import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Noticia } from '../../model/noticia';
import { NoticiaService } from '../../services/noticia.service';



/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias: Noticia[];
 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  public NoticiasServ : NoticiaService) {
  }

  ionViewDidLoad() {
    this.NoticiasServ.listaDeNoticias().subscribe(response=>{
      this.noticias = response;
      console.log(this.noticias)
    },error =>{
      console.log('Servidor não disponível');
    })
  }

}

