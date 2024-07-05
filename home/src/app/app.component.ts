import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _bookService:BookService){}

  title = 'home';
  showResult:boolean = false;
  isloading:boolean = false;

  onSearch(query:string){
    this.showResult = true
    this.getSearchresults(query)
  }

  getSearchresults(query:string){
    this._bookService.searchBooks(query).pipe(finalize(()=>{this.isloading = true}))
    .subscribe((data:any)=>{
      console.log(data)
    });
  }

}
