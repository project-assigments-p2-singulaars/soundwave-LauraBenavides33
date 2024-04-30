import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-discover',
    standalone: true,
    templateUrl: './discover.component.html',
    styleUrl: './discover.component.scss',
    imports: [FooterComponent]
})
export class DiscoverComponent {

}
