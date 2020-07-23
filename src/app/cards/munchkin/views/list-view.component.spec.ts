import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListViewComponent } from "./list-view.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListViewComponent", () => {

  let fixture: ComponentFixture<ListViewComponent>;
  let component: ListViewComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListViewComponent]
    });

    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
