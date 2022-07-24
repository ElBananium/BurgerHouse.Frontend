import { Injectable } from "@angular/core";





@Injectable()
export class ApiWorkerServicesZatichka implements ApiWorkerService

{
    public CloseOrder(orderId: number, token: string): Promise<void> {
        return new Promise(r => setTimeout(r, 2000));
    }
    public SetPercent(orderId: number, percent: number, token: string): Promise<void> {
        return new Promise(r => setTimeout(r, 2000));
    }
    
}



@Injectable(
    {
        providedIn : "root",
        useClass : ApiWorkerServicesZatichka
    }
)

export abstract class ApiWorkerService

{
    public abstract SetPercent(orderId : number, percent : number, token : string) : Promise<void>

    public abstract CloseOrder(orderId : number, token : string) : Promise<void>;
}