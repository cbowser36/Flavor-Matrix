import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTypesComponent } from './recipe-types.component';

describe('RecipeTypesComponent', () => {
  let component: RecipeTypesComponent;
  let fixture: ComponentFixture<RecipeTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a button to the recipe', async(() => {
    const fixture = TestBed.createComponent(RecipeTypesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(`Cocktails`);
  }));
  it('should contain All Recipes in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(RecipeTypesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`All Recipes!`);
  }));
});
