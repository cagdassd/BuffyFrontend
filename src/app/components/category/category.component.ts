import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category = {categoryId:1,categoryName:"Kıyafetler"}
  category2 = {categoryId:2,categoryName:"Oyuncaklar"}
  category3 = {categoryId:3,categoryName:"Temizlik Ürünleri"}

  categories = [this.category,this.category2,this.category3]
}
