import { Component } from '@angular/core';

@Component({
  selector: 'app-header-controls',
  templateUrl: './header-controls.component.html',
  styleUrl: './header-controls.component.scss',
})
export class HeaderControlsComponent {
  public languages = ['English', 'Romanian', 'Russian'];
  public selectedLanguage = this.languages[0];
  public currencies = ['USD', 'MLD', 'RON'];
  public selectedCurrency = this.currencies[0];

  constructor() {}

  public onSelectLanguage(value: string) {
    this.selectedLanguage = value;
  }

  public onSelectCurrency(value: string) {
    this.selectedCurrency = value;
  }
}
