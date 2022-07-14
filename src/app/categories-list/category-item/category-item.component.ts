import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Category } from 'src/api-module/Modules/Category';
import { ICategoriesService } from 'src/app/Services/CategoriesService';
import { ILoadingStateService } from 'src/app/Services/LoadingStateService';
import { IShopStateService } from 'src/app/Services/ShopStateService';

@Component({
  selector: 'category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input()
  category! : Category

  @HostListener("click")

  onClick()
  {
    if(this.loadingStateService.IsLoading())
    {
      return;
    }
    this.loadingStateService.StartLoading();

    
    this.categoriesService.GetItems(this.category.id).then(value => 
      {
        this.shopStateService.SetState(this.category.id, value, this.shopStateService.GetCurrentCategories());

        this.loadingStateService.StopLoading();
      });


    }


  constructor(private loadingStateService : ILoadingStateService, private shopStateService : IShopStateService, private categoriesService : ICategoriesService) { }

  ngOnInit(): void {
  
  }

}
