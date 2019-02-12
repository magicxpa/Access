import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-checkboxweb',
    providers: [...magicProviders],
    templateUrl: './checkboxweb.component.html'
}) export class checkboxweb extends TaskBaseMagicComponent {}