import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()

export class InstagramService {
    public grams : JSON;
    constructor(public http: Http){}
    getGrams(){
       return this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=55558285.0835065.81980ecb75aa418e8425502473dbbb0e')
        .map(response => response.json())
        .subscribe(
            data => this.grams = data,
            err => this.logError(err),
            ()  => console.log('get em')
        )
    } 
    logError(err){
       console.error('There was an error: ' + err);
     }
    
}

