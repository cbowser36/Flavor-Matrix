import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { element } from 'protractor';

import { SingleFlavorComponent } from './single-flavor.component';

describe('SingleFlavorComponent', () => {
  let component: SingleFlavorComponent;
  let fixture: ComponentFixture<SingleFlavorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFlavorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain each flavors name',() =>{
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    const name = h1.textContent;
    expect(name).toBe(`ALLSPICE`);
    })
   
});
