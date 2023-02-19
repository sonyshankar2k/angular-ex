import { Component, OnInit } from '@angular/core';
import { DemolibraryService } from 'demolibrary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:[DemolibraryService]
})
export class AppComponent {
  title = 'test ';
  constructor(private demoSvc: DemolibraryService) {
    this.title = this.title + this.demoSvc.welcomeMethod('ConsumerApp');
    this.testWelcomeMethosOfDemoLibrary();
    console.log('constructor');
  }

  testWelcomeMethosOfDemoLibrary() {
    // this.title = this.title + this.demoSvc.welcomeMethod('ConsumerApp');
    console.log('testWelcomeMethosOfDemoLibrary');
  }
}
