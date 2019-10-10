import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataSharingService {

    public successNotificationBs = new BehaviorSubject<string>('');
    public successNotificationObs = this.successNotificationBs.asObservable();

    public failureNotificationBs = new BehaviorSubject<string>('');
    public failureNotificationObs = this.failureNotificationBs.asObservable();

    public appliedFlagBs=new BehaviorSubject<string>('');
    public appliedFlagObs=this.appliedFlagBs.asObservable();

    public getNextCompBs=new BehaviorSubject<string>('');
    public getNextCompObs=this.getNextCompBs.asObservable();

    public profileFlagBs=new BehaviorSubject<string>('');
    public profileFlagObs=this.profileFlagBs.asObservable();

    successMessage(notification) {
        console.log(notification)
   this.successNotificationBs.next(notification);
    }
    failureMessage(notification) {
        console.log(notification)
   this.failureNotificationBs.next(notification);
    }

    trigegerApplyFlag(applied){
        this.appliedFlagBs.next(applied)
    }

    trigegerprofileFlag(isUpdateProfile){
        this.profileFlagBs.next(isUpdateProfile)
    }
    triggerUserMappingFlag(isUpdateProfile){
        this.getNextCompBs.next(isUpdateProfile)
    }
    
}