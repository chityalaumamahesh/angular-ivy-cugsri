import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MyServiceService} from './services/MyServiceService';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  name = 'Angular ' + VERSION.major;
  items = [];
  constructor(
    private http: HttpClient,
    private service:MyServiceService,
    private observale_list: BehaviorSubject<any> = new BehaviorSubject([])
  ) {}
ngOnInit(){
  this.getNames()

}
  getNames() {
    return this.service
      .subscribe(((res:any)=>{
        this.items = res.data
        console.log(this.items)
      }),
  }
}
