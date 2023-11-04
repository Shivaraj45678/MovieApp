import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedMoviesComponent } from './top-rated-movies.component';

describe('TopRatedMoviesComponent', () => {
  let component: TopRatedMoviesComponent;
  let fixture: ComponentFixture<TopRatedMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatedMoviesComponent]
    });
    fixture = TestBed.createComponent(TopRatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
