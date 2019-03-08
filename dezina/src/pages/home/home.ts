import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	/**
	*	This is the main constructor of the page and only load once	
	*	@constructs
	*/
  constructor(public navCtrl: NavController) {

  }

  /**
	*	This event determines if a user can enter a page or not
  	*	Fires every time a page is being navigated to
  	*	@function
  */
  ionViewCanEnter(){

  }

  /**
	*	This event fires when all internals are set up and ready to go
  	*	Fires only once
  	*	@function
  */
  ionViewDidLoad(){

  }

  /**
	*	This event signals the start of the transition to bring the page into view
  	*	Fires every time a page is being navigated to
  	*	@function
  */
  ionViewWillEnter(){

  }

  /**
	*	This event signals the page is in view and 100% active
  	*	Fires every time a page is being navigated to
  	*	@function
  */
  ionViewDidEnter(){

  }

  /**
	*	This event determines if a user can leave the current page
  	*	Fires every time a page is being navigated away from
  	*	@function
  */
  ionViewCanLeave(){

  }

  /**
	*	This event signals the start of the transition to remove the page from the view
  	*	Fires every time a page is being navigated away from
  	*	@function
  */
  ionViewWillLeave(){

  }

  /**
	*	This event signals that the page is no longer visible and has been left
  	*	Fires every time a page is being navigated away from
  	*	@function
  */
  ionViewDidLeave(){
  	
  }

  /**
	*	This event signals that the page will be unloaded and removed from memory
  	*	Fires only once and the page is destroyed 
  	*	@function
  */
  ionViewWillUnload(){

  }

}
