import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { DiscoverComponent } from "./discover/discover.component";
import { JoinComponent } from "./join/join.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent, DiscoverComponent, JoinComponent]
})
export class AppComponent {
  title = 'soundwave';
}
