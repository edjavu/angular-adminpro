import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {




  constructor(private settingsService: SettingsService){}

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: String){
    this.settingsService.changeTheme(theme);
  }


}
