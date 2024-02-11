import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultmovieslayoutComponent } from './defaultmovieslayout.component';

describe('DefaultmovieslayoutComponent', () => {
  let component: DefaultmovieslayoutComponent;
  let fixture: ComponentFixture<DefaultmovieslayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultmovieslayoutComponent]
    });
    fixture = TestBed.createComponent(DefaultmovieslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
