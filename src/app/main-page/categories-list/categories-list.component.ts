import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/api-module/Modules/Category';
import { IShopStateService } from 'src/app/Services/ShopStateService';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  @ViewChild('list') list! :ElementRef;

  @Input()
  dataLoaded! : Observable<void>

  falseData! : Array<Category>

  isDataLoaded =false;

   isHiddenScrollLeft = true;

   isHiddenScrollRight = false;

   selectedCategory = 1;

   elementWidth = 1;


  @Input()
  categoriesList! : Array<Category>



  constructor(private shopStateService : IShopStateService) 
  {
    this.falseData = new Array<Category>();
    for(let i = 0; i<15; i++)
    {
      this.falseData.push(new Category(i,"Fasjasjir"));
    }
   }

  ngOnInit(): void {


    this.dataLoaded.subscribe(() =>{
      this.isDataLoaded = true;

      this.ngDoCheck();
    })
    
  }

  ngDoCheck() : void
  {
    

    this.categoriesList = this.shopStateService.GetCurrentCategories();

    this.selectedCategory = this.shopStateService.GetCurrentCategoryId();

    
    
  }

  onScrollEnd()
  {
    this.isHiddenScrollLeft = this.list.nativeElement.scrollLeft == 0;
    let fullWidth = 0;
    for(let item of this.list.nativeElement.children)
    {
      fullWidth += item.clientWidth
    }


    this.isHiddenScrollRight = (fullWidth) <= (this.list.nativeElement.scrollLeft+1000);
    
  }

  GoRightBtnClicked()
  {
    this.elementWidth = this.list.nativeElement.clientWidth;
    this.list.nativeElement.scrollTo({
      top : 0,
      left : this.list.nativeElement.scrollLeft+ (this.elementWidth-150),
      behavior : "smooth"
    });
  }

  GoLeftBtnClicked()
  {
    this.elementWidth = this.list.nativeElement.clientWidth;
    this.list.nativeElement.scrollTo({
      top : 0,
      left : this.list.nativeElement.scrollLeft- (this.elementWidth-150),
      behavior : "smooth"
    });

  }

}
