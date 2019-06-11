import { Component, Input, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit {
  personList: string[];

  // defining a property with a type like below will add that property to this type
  constructor(private personsService: PersonsService) {
    this.personsService = personsService;
  }

  ngOnInit(): void {
    this.personList = this.personsService.persons;
  }

}


