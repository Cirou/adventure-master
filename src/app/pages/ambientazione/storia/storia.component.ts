import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storia',
  standalone: true,
  imports: [],
  templateUrl: './storia.component.html',
  styleUrls: ['./storia.component.scss']
})
export class StoriaComponent implements OnInit {
  
  ngOnInit() {
    console.log('StoriaComponent loaded!');
  }
}
