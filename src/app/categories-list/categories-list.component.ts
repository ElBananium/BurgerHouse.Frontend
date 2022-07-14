import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/api-module/Modules/Category';
import { IShopStateService } from '../Services/ShopStateService';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  @ViewChild('list') list! :ElementRef;


   isHiddenScrollLeft = true;

   isHiddenScrollRight = false;

   selectedCategory = 1;

   elementWidth = 1;


  @Input()
  categoriesList! : Array<Category>



  constructor(private shopStateService : IShopStateService) { }

  ngOnInit(): void {

    
    
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
