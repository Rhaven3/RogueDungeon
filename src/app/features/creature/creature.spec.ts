import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creature } from './creature';

describe('Creature', () => {
  let component: Creature;
  let fixture: ComponentFixture<Creature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Creature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
