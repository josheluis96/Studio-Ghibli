import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTree } from './film-tree';

describe('FilmTree', () => {
  let component: FilmTree;
  let fixture: ComponentFixture<FilmTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmTree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
