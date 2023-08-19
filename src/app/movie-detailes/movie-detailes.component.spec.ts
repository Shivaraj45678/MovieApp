import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailesComponent } from './movie-detailes.component';

describe('MovieDetailesComponent', () => {
  let component: MovieDetailesComponent;
  let fixture: ComponentFixture<MovieDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailesComponent]
    });
    fixture = TestBed.createComponent(MovieDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
