import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service/data.service';
import { Person } from '../models/person';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['../styles/data-cards/data-cards.component.sass']
})

export class DataCardsComponent implements OnInit, OnChanges {
  private data: Person;
  private _searchTerm = '';

  constructor(private _dataService: DataService) { }

  @Input()
  set searchTerm(searchTerm: string) {
    if (searchTerm !== null) {
      this._searchTerm = searchTerm;
    }
  }

  populateCards() {
    this._dataService.getData(this._searchTerm == null ? '' : this._searchTerm).subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  ngOnInit() {
  }
  ngOnChanges(changes: {[_searchTerm: string]: SimpleChange}): void {
    this.populateCards();
  }
}
