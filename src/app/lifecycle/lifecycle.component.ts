import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input('life') data! : string;
    constructor() {
      console.log(`new - data is ${this.data}`);
    }

    ngOnChanges() {
      console.log(`ngOnChanges - data is ${this.data}`);
    }

    ngOnInit(){
       console.log(`ngOnInit  - data is ${this.data}`) ;
    }

    ngDoCheck() {
      console.log("ngDoCheck");
    }

    ngAfterContentInit() {
      console.log("ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
    }

}

