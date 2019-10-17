import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

export interface master {
  name: string;
  type: string;
}

export interface slave {
  name: string;
  type: number;
}

const ELEMENT_DATA: master[] = [
  {name: 'Dolphins',type: 'Sea'},
  {name: 'Jellyfish',type: 'Sea'},
  {name: 'Lobsters',type: 'Sea'},
  {name: 'Seahorses',type: 'Sea'},
  {name: 'Seals',type: 'Sea'},
  {name: 'Whales',type: 'Sea'},
  {name: 'Angler Fish',type: 'Sea'},
  {name: 'Hammer Head Shark',type: 'Sea'},
  {name: 'Blue Whale',type: 'Sea'},
  {name: 'Caribbean Roughshark',type: 'Sea'},
  {name: 'Buffalo',type: 'Land'},
  {name: 'Giraffe',type: 'Land'},
  {name: 'Bison',type: 'Land'},
  {name: 'Black Bear',type: 'Land'},
  {name: 'Rhinoceros',type: 'Land'},
  {name: 'Anteater',type: 'Land'},
  {name: 'Elephant',type: 'Land'},
  {name: 'Cow',type: 'Land'},
  {name: 'Goat',type: 'Land'},
  {name: 'Hyena',type: 'Land'},
  {name: 'Crow',type: 'Air'},
  {name: 'Peacock',type: 'Air'},
  {name: 'Dove',type: 'Air'},
  {name: 'Sparrow',type: 'Air'},
  {name: 'Goose',type: 'Air'},
  {name: 'Ostrich',type: 'Air'},
  {name: 'Pigeon',type: 'Air'},
  {name: 'Owl',type: 'Air'},
  {name: 'Hawk',type: 'Air'},
  {name: 'Parrot',type: 'Air'},
  {name: 'Flamingo',type: 'Air'},
];


@Component({
  selector: 'app-multiple-mat-table-task',
  templateUrl: './multiple-mat-table-task.component.html',
  styleUrls: ['./multiple-mat-table-task.component.scss']
})
export class MultipleMatTableTaskComponent implements OnInit {

  types: any[] = ['Sea','Land','Air']

  displayedColumns1: string[] = ['name', 'type','action'];
  dataSource1 = ELEMENT_DATA;
  displayedColumns2: string[] = ['name', 'type'];
  dataSource2 = [];
  displayedColumns3: string[] = ['name', 'type'];
  dataSource3 = [];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextTask(){
    this.router.navigate(['customDirective'])
  }

}
