import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDailymotionComponent } from './ngx-dailymotion.component';

describe('NgxDailymotionComponent', () => {
  let component: NgxDailymotionComponent;
  let fixture: ComponentFixture<NgxDailymotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDailymotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDailymotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
