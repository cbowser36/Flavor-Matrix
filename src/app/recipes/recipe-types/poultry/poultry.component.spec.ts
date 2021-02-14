import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoultryComponent } from './poultry.component';

describe('PoultryComponent', () => {
  let component: PoultryComponent;
  let fixture: ComponentFixture<PoultryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoultryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoultryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
it('should contain a button to the recipe', async(() => {
    const fixture = TestBed.createComponent(PoultryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(`Tuscan Parmesan Chicken`);
  }));
  it('should contain Poultry in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(PoultryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Poultry`);
  }));
});
