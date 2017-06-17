import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  onClickChild1(event) {
    alert(event);
  }

  onClickChild2(harano) {
    alert(harano);
  }
}
