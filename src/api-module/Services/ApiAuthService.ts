import { Injectable } from "@angular/core";





@Injectable()
export class ApiAuthZatichka implements ApiAuth
{
    public async getCode(phoneNumber: string): Promise<void> {
        await new Promise(r => setTimeout(r, 2000));
    }
    public async Login(phoneNumber: string, code: string): Promise<string> {
        await new Promise(r => setTimeout(r, 2000));


        return "1sas";
    }
    
    
}










@Injectable(
    {
        providedIn : "root",
        useClass : ApiAuthZatichka
    }
)




export abstract class ApiAuth
{
    public abstract getCode(phoneNumber : string) : Promise<void>

    public abstract Login(phoneNumber : string, code : string) : Promise<string>
}


