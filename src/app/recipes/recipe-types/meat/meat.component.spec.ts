import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatComponent } from './meat.component';

describe('MeatComponent', () => {
  let component: MeatComponent;
  let fixture: ComponentFixture<MeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a button to the recipe', async(() => {
    const fixture = TestBed.createComponent(MeatComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(`Roasted Pork Loin`);
  }));
  it('should contain Meat in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(MeatComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Meat`);
  }));
});
