import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubscription: Subscription;

  // defining a property with a type like below will add that property to this type
  constructor(private personsService: PersonsService) {
    this.personsService = personsService;
  }

  ngOnInit(): void {
    this.personList = this.personsService.persons;
    this.personListSubscription = this.personsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  ngOnDestroy(): void {
    this.personListSubscription.unsubscribe();
  }

  onRemovePerson(personName: string) {
    this.personsService.removePerson(personName);
  }
}


