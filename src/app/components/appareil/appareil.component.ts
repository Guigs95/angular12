import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../../services/appareil.service';


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  constructor() {
    this.appareilName = '';
    this.appareilStatus = '';
  }

  @Input() appareilName!: string;
  @Input() appareilStatus!: string;

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  getName(): string {
    return this.appareilName;
  }

  getColor() {
    if (this.appareilStatus == 'allumé') {
      return 'green';
    } else if(this.appareilStatus == 'éteint') {
      return 'grey';
    }
    return '';
  }

  onSwitch() {

  }

}
