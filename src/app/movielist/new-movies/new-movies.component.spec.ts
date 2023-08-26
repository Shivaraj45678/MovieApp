import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoviesComponent } from './new-movies.component';

describe('NewMoviesComponent', () => {
  let component: NewMoviesComponent;
  let fixture: ComponentFixture<NewMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMoviesComponent]
    });
    fixture = TestBed.createComponent(NewMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
