import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { SiriusAnimations } from "../../../../../../libs/sirius/src/lib/animations";

@Component({
  selector: "app-headline-expansion",
  templateUrl: "./headline-expansion.component.html",
  styleUrls: ["./headline-expansion.component.scss"],
  animations: SiriusAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadlineExpansionComponent implements OnInit {
  collapsed: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
