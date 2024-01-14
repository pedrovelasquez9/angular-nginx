import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageComponent } from './my-page.component';

describe('MyPageComponent', () => {
  let component: MyPageComponent;
  let fixture: ComponentFixture<MyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
