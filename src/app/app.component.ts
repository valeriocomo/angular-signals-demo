import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div>{{number()}}</div>
  <div>{{squared()}}</div>
  <button (click)="clickHandler()">Next</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly number = signal(1);
  readonly squared = computed(() => Math.pow(this.number(), 2));

  clickHandler() {
    this.number.set(this.number() + 1)
  }
}
