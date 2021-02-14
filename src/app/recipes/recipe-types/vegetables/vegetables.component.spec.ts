import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesComponent } from './vegetables.component';

describe('VegetablesComponent', () => {
  let component: VegetablesComponent;
  let fixture: ComponentFixture<VegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a button to the recipe', async(() => {
    const fixture = TestBed.createComponent(VegetablesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(`Garlic Parmesan Roasted Brussel Sprouts`);
  }));
  it('should contain Appetizers in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(VegetablesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Vegetables`);
  }));
});
