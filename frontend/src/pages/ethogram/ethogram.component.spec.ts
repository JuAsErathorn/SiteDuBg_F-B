import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthogramComponent } from './ethogram.component';

describe('EthogramComponent', () => {
  let component: EthogramComponent;
  let fixture: ComponentFixture<EthogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EthogramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
