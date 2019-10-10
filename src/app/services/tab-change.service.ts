import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TabChangeService {
  public activateTabNameBS = new BehaviorSubject<string>('');
  public activateTabNameObs = this.activateTabNameBS.asObservable();


  setActivateTab(tab) {
   
this.activateTabNameBS.next(tab);
}
}
