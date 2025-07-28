import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-default-login-layout',
  imports: [
    MatSlideToggle
  ],
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.css'
})
export class DefaultLoginLayout {
    @Input() title: string = "";
    @Input() primaryBtnText: string = "";
    @Input() disablePrimaryBtn: boolean = true;
    @Output("submit") onSubmit = new EventEmitter();
    //@Output("navigate ") onSubmit = new EventEmitter();

    submit() {
      this.onSubmit.emit();
    }
}

