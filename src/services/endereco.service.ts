import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Endereco } from "../model/endereco";

@Injectable()
export class ClienteService{
    
    constructor(private http : HttpClient){
    }

    buscaCEP(cep : string) : Observable<Endereco> {
        return this.http.get<Endereco>(`viacep.com.br/ws/${cep}/json/`);
    }

}
