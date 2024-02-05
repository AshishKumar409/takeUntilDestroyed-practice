import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ChildComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  constructor() {}

  ngOnInit() {
    this.destroyRef.onDestroy(() => {
      console.log('child of showcase got destroyed');
    });
  }
}
