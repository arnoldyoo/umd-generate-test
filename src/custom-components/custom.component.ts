import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'custom',
    template: `<h1>custom component</h1>`
})

export class CustomComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}