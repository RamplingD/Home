import {
    Component,
    OnInit
}                           from '@angular/core';

import { fadeInAnimation }  from '../../animations/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-cover',
    animations: [ fadeInAnimation ],
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.css'],
    host: { '[@fadeInAnimation]': '' }
})
export class CoverComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
