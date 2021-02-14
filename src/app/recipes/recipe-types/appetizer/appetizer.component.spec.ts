import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppetizerComponent } from './appetizer.component';

describe('AppetizerComponent', () => {
  let component: AppetizerComponent;
  let fixture: ComponentFixture<AppetizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppetizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppetizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a button to the recipe', async(() => {
    const fixture = TestBed.createComponent(AppetizerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(`Jalepeno Popper Bites`);
  }));
  it('should contain Appetizers in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppetizerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Appetizers`);
  }));
});
