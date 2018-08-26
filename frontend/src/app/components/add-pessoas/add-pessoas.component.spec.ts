import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPessoasComponent } from './add-pessoas.component';

describe('AddPessoasComponent', () => {
  let component: AddPessoasComponent;
  let fixture: ComponentFixture<AddPessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
