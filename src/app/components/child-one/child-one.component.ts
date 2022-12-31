import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, DoCheck {

  constructor() {
    console.log(`ChildOneComponent:constructor`);
  }
  ngOnInit(): void {
    console.log(`ChildOneComponent:ngOnInit`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ChildOneComponent:ngOnChanges`);
  }
  ngDoCheck(): void {
    console.log(`ChildOneComponent:ngDoCheck`);
  }
  ngAfterContentInit(): void {
    console.log(`ChildOneComponent:ngAfterContentInit`);
  }
  ngAfterContentChecked(): void {
    console.log(`ChildOneComponent:ngAfterContentChecked`);
  }
  ngAfterViewChecked(): void {
    console.log(`ChildOneComponent:ngAfterViewChecked`);
  }
  ngAfterViewInit(): void {
    console.log(`ChildOneComponent:ngAfterViewInit`);
  }
  ngOnDestroy(): void {
    console.log(`ChildOneComponent:ngOnDestroy`);
  }
}
