import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
  wishlistItems:any[] = [];
  wishlistItemsList = new BehaviorSubject<any[]>(this.wishlistItems);

  getTotalWishlistItems(){
    return this,this.wishlistItemsList.asObservable();
  }
  addItemsToWishilist(item:any){
    this.wishlistItems.push(item);
    this.wishlistItemsList.next(this.wishlistItems);
  }
  removeItemFromWishlist(ele:any){
    this.wishlistItems.map((item:any,index) => {
      if(ele.id == item.id){
        this.wishlistItems.splice(index, 1);
      }
    })
    this.wishlistItemsList.next(this.wishlistItems);
  }
  emptyWishList(){
    this.wishlistItems = [];
    this.wishlistItemsList.next(this.wishlistItems);
  }
  filterWishlistItems(arr:any){
    this.wishlistItems = arr;
    this.wishlistItemsList.next(this.wishlistItems);
  }
}
