import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIndexedDbComponent } from './ngx-indexed-db.component';

describe('NgxIndexedDbComponent', () => {
  let component: NgxIndexedDbComponent;
  let fixture: ComponentFixture<NgxIndexedDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxIndexedDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxIndexedDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
