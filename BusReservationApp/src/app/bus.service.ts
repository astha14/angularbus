import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject ,BehaviorSubject} from 'rxjs';
import { Busschedule } from './busschedule';
import { PassengerDetails } from './passenger-details';
import { RegisterCustomer } from './register-customer';

@Injectable({
  providedIn: 'root'
})
export class BusService {
 
 private FareSource=new BehaviorSubject<any>("current_cost")
 CurrentFare=this.FareSource.asObservable();
 
  private searchurl="http://localhost:5000/api/busschedule";
 
  public subject=new Subject<boolean>();
  url :string;  
 
  token ?: string;  
  header : any;  
  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}  
  
  constructor(public client:HttpClient) { 
     this.url="http://localhost:5000/api/RegCustomer";
     

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
 

 
  Get():Observable<RegisterCustomer[]>{
    return this.client.get<RegisterCustomer[]>(this.url);
  }
 
Register(customer:RegisterCustomer)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.client.post<RegisterCustomer[]>(this.url , customer, httpOptions)  
   }
Login(customer:RegisterCustomer){
     
    return this.client.post(this.url+'/Login',JSON.stringify(customer),this.HttpOptions );  
   }

Search(bus:Busschedule):Observable<Busschedule[]>{

  return this.client.post<Busschedule[]>(this.searchurl+'/GetBus',JSON.stringify(bus),this.HttpOptions );
}
PassDetails(passenger:PassengerDetails):Observable<PassengerDetails>{

  return this.client.post<PassengerDetails>(this.searchurl+'/PassengerDetails',JSON.stringify(passenger),this.HttpOptions );
}

SendFare(Fare:any){
  this.FareSource.next(Fare);
}

}
