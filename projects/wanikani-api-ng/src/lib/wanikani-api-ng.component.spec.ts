import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanikaniApiNgComponent } from './wanikani-api-ng.component';

describe('WanikaniApiNgComponent', () => {
  let component: WanikaniApiNgComponent;
  let fixture: ComponentFixture<WanikaniApiNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanikaniApiNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanikaniApiNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
