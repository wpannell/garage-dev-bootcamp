import {getTestBed, TestBed} from '@angular/core/testing';
import {CardComponent} from './card.component';
import {CardModule} from './card.module';
import {RootComponent, RootModule} from '../root';

require('should');

describe('card component should show', () => {
  let element;

  it('hi card', () => {
    element.querySelector('mat-card-title[rel=card-title]').textContent.should.containEql('Shiba Inu');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [CardModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(CardComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});
