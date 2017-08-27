import {
    Component,
    OnInit
}                           from '@angular/core';

import { routerTransition }  from '../../animations/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-cover',
    animations: [ routerTransition ],
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.css'],
})
export class CoverComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
