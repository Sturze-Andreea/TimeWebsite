import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  onstructor() {}

  ngOnInit(): void {
    this.startClock();
  }

  startClock(): void {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hoursDeg = (hours % 12) * 30 + (minutes / 60) * 30;
      const minutesDeg = minutes * 6 + (seconds / 60) * 6;
      const secondsDeg = seconds * 6;

      if (hourHand) hourHand.style.transform = `rotate(${hoursDeg - 90}deg)`;
      if (minuteHand)
        minuteHand.style.transform = `rotate(${minutesDeg - 90}deg)`;
      if (secondHand)
        secondHand.style.transform = `rotate(${secondsDeg - 90}deg)`;
    }, 1000);
  }
}
