import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  isLoaded = false;

  codeSended = false;

  returnUrl = "/";

  constructor(private activatedRoute : ActivatedRoute,private router : Router ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(x =>
      {
        this.returnUrl = x.return ? x.return : "/";
        this.isLoaded = true;
      });
  }

  OnCodeSended()
  {
    this.codeSended = true;
  }


  OnAuthorized()
  {
    if(this.isLoaded)
    {
      
      this.router.navigateByUrl(this.returnUrl);



    }
    else
    {
      setTimeout(this.OnAuthorized, 10);
    }
  }

  ReturnBtnClicked()
  {
    this.router.navigateByUrl("/");
  }





}
