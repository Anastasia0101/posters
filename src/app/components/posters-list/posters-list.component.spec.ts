import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostersListComponent } from './posters-list.component';

describe('PostersListComponent', () => {
  let component: PostersListComponent;
  let fixture: ComponentFixture<PostersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
