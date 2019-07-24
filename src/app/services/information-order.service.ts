import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationOrderService {
  // la idea es que este servicio maneje la informacion 
  
  //a.- declaracion de variables 
  productSeletedInBreakfast:string;
  arr = []; 

  private enviarMensajeSubject =  new Subject<string>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  
  // b.- creacion de una function momentanea evaluacion 

   // 1ero cada elemento tickeado debe ser leido ok
  enviarMensaje(productSeletedInBreakfast:string){

    this.productSeletedInBreakfast = productSeletedInBreakfast;
    this.enviarMensajeSubject.next(productSeletedInBreakfast);
    console.log( "dentro de InformationServicio , en enviarMensaje :" + productSeletedInBreakfast);
   
  }


  // 2do cada elemento tickeado debe ser guardado
pusheando(productSeletedInBreakfast: string,arr: any[]){
  this.productSeletedInBreakfast = productSeletedInBreakfast;
  this.arr = arr;
  arr.push(productSeletedInBreakfast);

  console.log(arr); // ok 
  return arr;
}








  // el elemento es guardado en un array de objetos 
  // ese array de objetos debe imprimirse en consola
  // luego debe imprimirse cn cierto formato en el container Order
  
}
