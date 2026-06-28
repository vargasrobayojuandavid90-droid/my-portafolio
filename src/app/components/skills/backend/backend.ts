import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-backend',
  imports: [],
  templateUrl: './backend.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Backend {}
