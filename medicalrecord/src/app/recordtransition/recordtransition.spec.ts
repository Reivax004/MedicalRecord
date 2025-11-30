import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTransition } from './recordtransition';

describe('Recordtransition', () => {
  let component: RecordTransition;
  let fixture: ComponentFixture<RecordTransition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordTransition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordTransition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
