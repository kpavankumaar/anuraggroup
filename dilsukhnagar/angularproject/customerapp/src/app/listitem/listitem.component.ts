import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-list-item',
    template: `
        <h2>Welcome to List item</h2>
        <div class="row">
            <div class="col well" *ngFor = 'let student of studentInfo1'>
                <label>Name: </label> {{student.name}}<br>
                <label>Email: </label> {{student.email}}
                <br>
            </div>
        </div>
    `,
    styles: [`h2{background-color:lightblue}`]

})

export class ListItemComponent {
    @Input() studentInfo1;
}

