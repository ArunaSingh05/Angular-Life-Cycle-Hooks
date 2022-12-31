import { Component, OnChanges, OnDestroy, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, DoCheck, SimpleChanges, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked,DoCheck {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('myContent') content!: ElementRef;
  message = 'hello';
  ngAfterViewInit() {
    console.log('ParentOneComponent ngAfterViewInit - wrapper', this.wrapper);
    console.log('ParentOneComponent ngAfterViewInit - content', this.content);
  }

  ngAfterContentInit() {
    console.log('ParentOneComponent ngAfterContentInit - wrapper', this.wrapper);
    console.log('ParentOneComponent ngAfterContentInit - content', this.content);
  }

  constructor() {
    console.log(`ParentOneComponent:constructor`);
  }
  ngOnInit(): void {
    console.log(`ParentOneComponent:ngOnInit`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ParentOneComponent:ngOnChanges`);
  }
  ngDoCheck(): void {
    console.log(`ParentOneComponent:ngDoCheck`);
  }

  ngAfterContentChecked(): void {
    console.log(`ParentOneComponent:ngAfterContentChecked`);
  }
  ngAfterViewChecked(): void {
    console.log(`ParentOneComponent:ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`ParentOneComponent:ngOnDestroy`);
  }

}
