import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-skills',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skills.css'
  
})
export default class Skills {

}
