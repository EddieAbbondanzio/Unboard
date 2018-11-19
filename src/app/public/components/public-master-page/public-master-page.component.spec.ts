import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMasterPageComponent } from './public-master-page.component';

describe('PublicMasterPageComponent', () => {
  let component: PublicMasterPageComponent;
  let fixture: ComponentFixture<PublicMasterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicMasterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
