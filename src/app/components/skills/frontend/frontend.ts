import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-frontend',
  imports: [],
  templateUrl: './frontend.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Frontend {}
