import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-mfe',
  templateUrl: './show-mfe.component.html',
  styleUrls: ['./show-mfe.component.scss']
})
export class ShowMfeComponent implements OnInit {

ngOnInit(): void {
  this.loadMfe();
}

loadMfe() {
  const script = document.createElement('script');
  script.src = 'http://localhost:6060/micro-fe.js';
  script.async = true;
  document.body.appendChild(script);
}

}
