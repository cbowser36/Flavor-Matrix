import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorsComponent } from './flavors.component';

describe('FlavorsComponent', () => {
  let component: FlavorsComponent;
  let fixture: ComponentFixture<FlavorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain info in a p tag', async(() => {
    const fixture = TestBed.createComponent(FlavorsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(String);
  }));
  it('should contain input field', async(() => {
    const fixture = TestBed.createComponent(FlavorsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').textContent).toContain(String);
  }));
});
