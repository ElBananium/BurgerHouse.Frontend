import { Injectable } from "@angular/core";
import { ApiAuth } from "src/api-module/Services/ApiAuthService";

export abstract class IAuthService
{
    public abstract IsLoggedIn() : boolean;

    public abstract IsHavePhoneNumber() : boolean;

    public abstract GetPhoneNumber() : string;

    public abstract SetPhoneNumber(phoneNumber : string) : void;


    public abstract RequestLoginCode() : Promise<void>;

    public abstract LoginWithCode(code : string) : Promise<string>;


    public abstract GetToken() : string;


    public abstract DropInfo() : void;
}


@Injectable()
export class AuthService implements IAuthService

{

    private isHavePhoneNumber=  false;

    private phoneNumber = "";

    private token = "";

    private isHaveToken = false;

    public GetToken(): string {
        if(this.isHaveToken)
        {
            return this.token;
        }
        else
        {
            throw new Error("Not Logged in");
        }
    }
    public IsLoggedIn(): boolean {
        return this.isHaveToken;
    }
    public IsHavePhoneNumber(): boolean {
        return this.isHavePhoneNumber;
    }
    public GetPhoneNumber(): string {
        if(this.isHavePhoneNumber)
        {
            return this.phoneNumber;
        }
        else
        {
            throw new Error("Havent phone number");
        }
    }
    
    public SetPhoneNumber(phoneNumber: string): void {


        if(phoneNumber.length != 11 || isNaN(Number.parseInt(phoneNumber))) throw new Error("Invalid format of phoneNumber : "+phoneNumber);
        
        this.phoneNumber = phoneNumber;
        window.localStorage.setItem("phoneNumber",phoneNumber);
        this.isHavePhoneNumber = true;
    }
    public async RequestLoginCode(): Promise<void> 
    {
        if(!this.isHavePhoneNumber) throw new Error("Havent phone number"); 

        
        
        await this.apiAuth.getCode(this.phoneNumber);

        
    }
    public async LoginWithCode(code: string): Promise<string> {
        if(!this.isHavePhoneNumber) throw new Error("Havent phone number"); 

        let token = await this.apiAuth.Login(this.phoneNumber, code);

        this.isHaveToken = true;

        window.localStorage.setItem("token", token);

        this.token = token;

        return token;
    }


    constructor(private apiAuth : ApiAuth)
    {

        let number = window.localStorage.getItem("phoneNumber");
        if(number)
        {
            this.isHavePhoneNumber = true;
            this.phoneNumber = number;
        }

        let token = window.localStorage.getItem("token");
        if(token)
        {
            this.isHaveToken = true;
            this.token = token;
        }
    }
    public DropInfo(): void {
        window.localStorage.removeItem("phoneNumber");
        window.localStorage.removeItem("token");

        this.isHavePhoneNumber = false;
        this.isHaveToken = false;

        this.phoneNumber = "";

        this.token   = "";
    }
    
}