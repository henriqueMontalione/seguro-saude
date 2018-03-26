import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {

    static handleError(error : Response | any){
        
        let errorMessage : string

        if (error instanceof Response){
            errorMessage = `Erro : ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
            console.log(errorMessage);
        } else {
            console.log(`Erro : ${error.message}`);
        }
      
        return Observable.throw(errorMessage)
    }
}