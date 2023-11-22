import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeNavDataservicesService {

  Value: any
  constructor() { }
  AddNav = new Subject<boolean>();
  AddDashboard = new Subject<boolean>();
  SubmitLink=new Subject<boolean>();
}
