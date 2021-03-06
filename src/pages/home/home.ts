import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { EventCreatePage } from '../event-create/event-create';
import { EventListPage } from '../event-list/event-list';
import { EventMapPage} from '../map/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }

  goToProfile(){
    this.nav.push(ProfilePage);
  }

  goToCreate(){
    this.nav.push(EventCreatePage);
  }

  goToList(){
    this.nav.push(EventListPage);
  }

  goToMap(){
    this.nav.push(EventMapPage);
  }



}
