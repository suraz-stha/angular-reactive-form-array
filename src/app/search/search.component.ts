import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchField: FormControl; 
  searches: string[] = []; 

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
     this.searchField.valueChanges
        .subscribe(term => {
          this.searches.push(term);
        });
  }

}
