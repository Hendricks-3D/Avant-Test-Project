import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse, } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpUtilitiesService {
  private apiUrl:string = "https://devapi.alvys.io/api/carriers/QueryCarriersByAddress";
  private token = 'amRldjpUbU5zTFRBeFl6Y3lOREkwTFRsak1HSXROR1EwWmkxaVpqYzFMV1JrT1RjM09XWXdZakJqTWkwdGJYSks=';
private jsonData:Array<any>[] = [];
  
 header= new HttpHeaders({  
    'Content-Type':'application/json',
    'Authorization':`Basic ${this.token}`
  
  })

  
  
  constructor(private http: HttpClient) { }




  //This method will get the list of carriers from the API
  public getCarriers(Addresses:any):Array<any>[] {

   // let Addresses:string[]=["Miami","Florida","dgsdg"];  //test data

    this.http.post(this.apiUrl, Addresses).toPromise().then(data=>{
        console.log(data);

        for(let id in data){
      if(data.hasOwnProperty(id)){
               
                this.jsonData.push(data[id])
                
         }
        }
        
       
    }).catch(err=>{
      console.log(err);
    })
    console.log(this.jsonData)
    return this.jsonData;
  }


//This method will gte the list of cities from the google API

  public getCities(city:string){

    let  googleApiURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cities near ${city}&radius=50&key=AIzaSyD4WxV1Neep_1fhh--Pb4SSU2gZ9eeYu7g`;
  
    this.http.get(googleApiURL).toPromise().then(cities=>{
        console.log("Google API output");
        console.log(cities)
    })
  }

}
