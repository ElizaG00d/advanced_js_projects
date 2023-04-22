import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  cropWidth = 75;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

    //rating: number = 4;
    //cropWidth: number = 75;
  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  } //watches changes for input properties

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  } //display js template literal, placeholder for expression in a string
}