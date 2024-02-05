import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, takeUntil } from 'rxjs';
import { MockService } from '../mock.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css'],
  standalone: !'',
  imports: [CommonModule, ChildComponent],
})
export class ShowCaseComponent implements OnInit {
  @ViewChild(ChildComponent) child!: ChildComponent;
  display = true;
  constructor(private m: MockService) {
    this.m
      .getValues()
      .pipe(takeUntilDestroyed(this.child.destroyRef))
      .subscribe(console.log);
  }
  // destroyRef = inject(DestroyRef);
  // destroyed = new Subject();

  ngOnInit() {
    // let destroyed = new Subject();
    // this.m.getValues().pipe(takeUntil(this.destroyed)).subscribe(console.log);
    // this.m.getValues().pipe(takeUntil(destroyed)).subscribe(console.log);
    // this.destroyRef.onDestroy(() => {
    //   console.log('showcase component got destroyed');
    //   destroyed.next(null);
    //   destroyed.complete();
    // });
  }

  // ngOnDestroy() {
  //   console.log('showcase component got destroyed');
  //   this.destroyed.next(null);
  //   this.destroyed.complete();
  // }

  ngOnDestroy() {
    console.log('showcase component got destroyed');
  }
}
