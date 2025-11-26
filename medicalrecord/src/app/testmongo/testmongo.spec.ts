import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testmongo } from './testmongo';

describe('Testmongo', () => {
  let component: Testmongo;
  let fixture: ComponentFixture<Testmongo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testmongo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testmongo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
