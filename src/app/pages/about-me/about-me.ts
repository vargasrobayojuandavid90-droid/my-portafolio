import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutMe {}
