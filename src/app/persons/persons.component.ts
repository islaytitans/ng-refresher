import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isLoading: boolean = false;
  private personListSubscription: Subscription;

  // defining a property with a type like below will add that property to this type
  constructor(private personsService: PersonsService) {
    this.personsService = personsService;
  }

  ngOnInit(): void {
    this.personListSubscription = this.personsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isLoading = false;
    });
    this.isLoading = true;
    this.personsService.fetchPersons();
  }

  ngOnDestroy(): void {
    this.personListSubscription.unsubscribe();
  }

  onRemovePerson(personName: string) {
    this.personsService.removePerson(personName);
  }
}


