import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-enter-passenger-details',
  templateUrl: './enter-passenger-details.component.html',
  styleUrls: ['./enter-passenger-details.component.css']
})
export class EnterPassengerDetailsComponent implements OnInit {

  data=false;

  constructor(private service:BusService,private route:Router) { }
  PassengerForm :FormGroup= new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(5)]),
    email:new FormControl("",[Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"),Validators.required]),
    contact:new FormControl("",[Validators.pattern("[789][0-9]{9}"),Validators.maxLength(10)]),
    age:new FormControl(),
    gender:new FormControl(),
    numberOfPassengers:new FormControl()
  });


  ngOnInit(): void {
  }
  get name()
  {
    return this.PassengerForm.get('name');
  }
  get email()
  {
    return this.PassengerForm.get('email');
  }
  
  get contact()
  {
    return this.PassengerForm.get('contact');
  }
  get age()
  {
    return this.PassengerForm.get('age');
  }
  get gender()
  {
    return this.PassengerForm.get('gender');
  }
  get numberOfPassengers()
  {
    return this.PassengerForm.get('numberOfPassengers');
  }
  DisplayPassenger()    
  {    
  this.service.PassDetails(this.PassengerForm.value).subscribe(    
    (data)=>    
    {    
      console.log(data);
       
      this.PassengerForm.reset();    
      //this.message=" Successfully"
      this.route.navigateByUrl('Payment')
    },
    /* error=>{
      console.log(error.message)
      this.message=""
    } */
    );    
  }    


}
