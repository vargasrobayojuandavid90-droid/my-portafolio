import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-skills',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Skills {}
