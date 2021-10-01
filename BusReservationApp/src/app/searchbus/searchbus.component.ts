import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { Busschedule } from '../busschedule';

@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {
  
  SearchBusForm:FormGroup= new FormGroup({
    Startingpt:new FormControl(""),
    Destination:new FormControl(""),
    ScheduledDate:new FormControl("")
   /*  DepartureTime:new FormControl(""),
    ArrivalTime:new FormControl(""),
    FareAmount:new FormControl(""), */
  }
  );
  message:boolean=false;
   
    bus: Busschedule[]=[];
    constructor(private service:BusService, private route: Router) { }
  
    ngOnInit(): void {
    }
    SearchBus(){
      console.log(this.SearchBusForm.value);
      
      this.service.Search(this.SearchBusForm.value).subscribe(
        data => {
          
          this.bus=data;
          console.log(data);
         this.SearchBusForm.reset();   
          this.message=true;
          
        },
        error=>{
          console.log(error.message)
         this.SearchBusForm.reset(); 
        }
        );
    }
    back(){
      this.message=false; 
      console.log("done")
      this.ngOnInit();
      this.route.navigateByUrl('searchbus');  
     } 
    get Startingpt()
    {
      return this.SearchBusForm.get('StartingPt');
    }
    get Destination()
    {
      return this.SearchBusForm.get('Destination');
    }
    get ScheduledDate()
    {
      return this.SearchBusForm.get('ScheduledDate');
    }
   /*  get DepartureTime()
    {
      return this.SearchBusForm.get('DepartureTime');
    }
    get ArrivalTime()
    {
      return this.SearchBusForm.get('ArrivalTime');
    }
    get FareAmount()
    {
      return this.SearchBusForm.get('FareAmount');
    } */
   
  
  
}
