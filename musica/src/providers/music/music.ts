import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API: string = "https://orangevalleycaa.org/api/music/";
@Injectable()
export class MusicProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicProvider Provider');
  }

  /**
	* Function that will provide particular music data for the users
  	* @function
  */
  getMusic(){
  	return this.http.get(API);
  }

  /**
	* Function that will provide a particular song from the list
	* @function
  */
  getOneSong(){
  	let oneSongUrl = API + "id/1";
  	return this.http.get(oneSongUrl);
  }
}
