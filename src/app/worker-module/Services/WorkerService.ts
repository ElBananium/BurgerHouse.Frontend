import { Injectable } from "@angular/core";
import { ApiWorkerService } from "src/api-module/Services/ApiWorkerService";
import { IAuthService } from "src/app/Services/AuthService";



export abstract class IWorkerService
{
    public abstract SetPercent(orderId : number, percent : number) : Promise<void>;

    public abstract CloseOrder(orderId : number) : Promise<void>;
}



@Injectable()
export class WorkerService implements IWorkerService
{
    public SetPercent(orderId: number, percent: number) : Promise<void> {
        

        return this.apiWorker.SetPercent(orderId,percent, this.auth.GetToken());
    }


    constructor(private apiWorker :ApiWorkerService, private auth : IAuthService ){}


    public CloseOrder(orderId: number): Promise<void> {
        
        return this.apiWorker.CloseOrder(orderId, this.auth.GetToken());
    }

}