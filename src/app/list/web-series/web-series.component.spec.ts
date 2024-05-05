import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSeriesComponent } from './web-series.component';

describe('WebSeriesComponent', () => {
  let component: WebSeriesComponent;
  let fixture: ComponentFixture<WebSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebSeriesComponent]
    });
    fixture = TestBed.createComponent(WebSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
