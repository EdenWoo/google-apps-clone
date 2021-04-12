import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  searchControl = new FormControl();
  options: string[] = ['Coronavirus', 'Auckland', 'Hamilton', 'Healthcare'];
  filteredOptions: Observable<string[]>;

  @Input() sidenav: MatSidenav;

  constructor() {
  }

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
