import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActordetailesComponent } from './actordetailes.component';

describe('ActordetailesComponent', () => {
  let component: ActordetailesComponent;
  let fixture: ComponentFixture<ActordetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActordetailesComponent]
    });
    fixture = TestBed.createComponent(ActordetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
