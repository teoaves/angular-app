import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users:Person[] = 
    [
      {
        "givenName": "Dylan",
        "surname": "Cox",
        "email": "dylan.alan.cox@yahoo.com",
        "age": 45,
        "address": "Glenwood"
      },
      {
        "givenName": "Christina",
        "surname": "Powell",
        "email": "c_powell@gmail.com",
        "age": 44,
        "address": "Warwick"
      },
      {
        "givenName": "Emily",
        "surname": "Walker",
        "email": "e.walker@aol.com",
        "age": 46,
        "address": "Laconia"
      },
      {
        "givenName": "Emily",
        "surname": "Bennett",
        "email": "elbennett@gmail.com",
        "age": 71,
        "address": "Marshall"
      },
      {
        "givenName": "Daniel",
        "surname": "Bryant",
        "email": "daniel_bryant@ymail.com",
        "age": 48,
        "address": "Exmore"
      },
      {
        "givenName": "Elizabeth",
        "surname": "Edwards",
        "email": "ejedwards59@outlook.com",
        "age": 72,
        "address": "Knapp"
      },
      {
        "givenName": "Alexandra",
        "surname": "Ramirez",
        "email": "alexandra_ramirez@yahoo.com",
        "age": 77,
        "address": "Crystal Lake"
      },
      {
        "givenName": "Nathan",
        "surname": "Hughes",
        "email": "nathan_hughes@yahoo.com",
        "age": 75,
        "address": "East Hartford"
      },
      {
        "givenName": "Matthew",
        "surname": "Barnes",
        "email": "matthewalanbarnes@gmail.com",
        "age": 65,
        "address": "Fordsville"
      },
      {
        "givenName": "Eric",
        "surname": "Roberts",
        "email": "e.roberts@yahoo.com",
        "age": 77,
        "address": "Pylesville"
      }
    
  ]
}



