import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadComponent } from './bread.component';

describe('BreadComponent', () => {
  let component: BreadComponent;
  let fixture: ComponentFixture<BreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a button to the recipe', async(() => {
    const fixture = TestBed.createComponent(BreadComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(`Ciabatta Rolls`);
  }));
  it('should contain Bread in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(BreadComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Bread`);
  }));
});
