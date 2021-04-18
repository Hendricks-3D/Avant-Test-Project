import { Component } from '@angular/core';
import { IAddress } from './Interfces/iaddress';
import { HttpUtilitiesService } from './Services/http/http-utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Avant-Test-Project';

  public address= {} as IAddress;
  public jsonData:Array<any>[] = [];
constructor(private httpUtil:HttpUtilitiesService){

}


  public getLocation():void{

    //let stringObj:string = `{Addresses:${this.address.city}, ${this.address.state},${this.address.radius}}`
  /*let addressObj = new Array({
      'Addresses':[this.address.city,this.address.state,this.address.radius]
    });*/
    let  jsonString = JSON.parse(`{"Addresses": ["${this.address.city}","${this.address.state}","${this.address.radius}"]}`);
    console.log(jsonString);

     this.jsonData =  this.httpUtil.getCarriers(jsonString);
     console.log(this.jsonData);
  }
  
}



