import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CssServices
{
    public isexpandFlagBs=new BehaviorSubject<boolean>(true);
    public isExpandFlagObs=this.isexpandFlagBs.asObservable();

    public isleavestatusFlagBs=new BehaviorSubject<boolean>(true);
    public isleavestatusFlagObs=this.isleavestatusFlagBs.asObservable();

    trigegerexpandFlag(isExpand){
        this.isexpandFlagBs.next(isExpand)
    }

    trigegerstatusFlag(isleavestatus){
        this.isleavestatusFlagBs.next(isleavestatus)
    }
}