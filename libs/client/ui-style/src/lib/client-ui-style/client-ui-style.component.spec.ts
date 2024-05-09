import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientUiStyleComponent } from './client-ui-style.component';

describe('ClientUiStyleComponent', () => {
  let component: ClientUiStyleComponent;
  let fixture: ComponentFixture<ClientUiStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUiStyleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientUiStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
