import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-combo',
    providers: [...magicProviders],
    templateUrl: './combo.component.html'
}) export class combo extends TaskBaseMagicComponent {}