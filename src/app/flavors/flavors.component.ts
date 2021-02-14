import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css','./flavor.styles.scss'
]
})
export class FlavorsComponent implements OnInit {
 
  flavorNames=['allspice','basil','bay leaves','black pepper','cardamom','cayenne pepper','cinnamon','cumin','garlic','ginger','mint','nutmeg','paprika','rosemary','salt','thyme','vanilla'];

  
    constructor() { 
   
  
  }

  ngOnInit(){
    
      
  }
   





}
