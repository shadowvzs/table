import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParentComponent } from './table-parent.component';

describe('TableParentComponent', () => {
  let component: TableParentComponent;
  let fixture: ComponentFixture<TableParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
