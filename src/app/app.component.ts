import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyA1L6RhvOO7CfNisZr2pmCD-RfIkatStNc",
      authDomain: "potholealert-c7a09.firebaseapp.com",
      databaseURL: "https://potholealert-c7a09.firebaseio.com",
      storageBucket: "potholealert-c7a09.appspot.com",
      messagingSenderId: "1003430972671"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.rootPage = LoginPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}