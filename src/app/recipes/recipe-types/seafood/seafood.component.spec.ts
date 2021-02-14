import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafoodComponent } from './seafood.component';

describe('SeafoodComponent', () => {
  let component: SeafoodComponent;
  let fixture: ComponentFixture<SeafoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeafoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeafoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a button to the recipe', async(() => {
    const fixture = TestBed.createComponent(SeafoodComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(`Seared Scallops`);
  }));
  it('should contain Seafood in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(SeafoodComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Seafood`);
  }));
});
