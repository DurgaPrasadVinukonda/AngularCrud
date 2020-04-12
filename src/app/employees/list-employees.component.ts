import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  //  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
// We take the class name of a List Class and I was creating the hard code values theire
  employees:Employee[]= [ 
    {id:1,
    name:'PrasadVinukonda',
    gender:'Male',
    contactPrefernce:'Phone',
    phoneNumber:'9676600234',
    dateOfBirth: new Date('01/12/1996'),
    department:'Software-Engineer, MLA',
    isActive:true,
    photoPath: '/assets/images/p.jpg'},
  {
    id:2,
      name:'PawanKalyan',
      gender:'Male',
      contactPrefernce:'email',
      email:'Pawan.Kondedla@gmail.com',
      dateOfBirth: new Date('09/02/1971'),
      department:'Movie Hero, Politician',
      isActive:true,
      photoPath: '/assets/images/pk.jfif'
  },
{id:3,
  name:'Captain America',
  gender:'Male',
  contactPrefernce:'email',
  email:'ca.america@gmail.com',
  dateOfBirth: new Date('11/20/2020'),
  department:'HR',
  isActive:true,
  photoPath: '/assets/images/ca.jfif'
}
 ];

  constructor() { }

  ngOnInit() {
  }

}
