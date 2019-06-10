import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Playlist } from '../model/Playlist';

import { Channel } from '../model/Channel';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	options: StreamingVideoOptions= {
		  successCallback: () => {},
		  errorCallback: (e) => {},
		  orientation: 'landscape',
		  shouldAutoClose: true,
		  controls: true
		};

	data:Observable<any>;
	//playlists:Array<Playlist>;
	playlists;
	channels:Array<Channel>=new Array();


	requests:Array<string>;     //the final array that will contain each line of .sql file
    testtext: string;              //a variable we'll use to test the content of the request

	slideOpts = {
    initialSlide: 1,
    speed: 400
  	};
	 
	  constructor(private navCtrl:NavController,private http: HttpClient,private streamingMedia: StreamingMedia) {
	  	this.load();
	  }
	  load(){
	  	/*this.data=this.http.get('/assets/data.txt');
	  	this.data.subscribe(result =>{
	  		this.playlists=result;
	  		console.log(result);
	  	});*/
	  	this.http.get('/assets/data.M3U',{responseType: 'text'}) 
	  			//.pipe(map((response: any) => response.text()))         //gets the file
                 //.pipe(map(res => res.text()) )                    //maps it as text
                 .subscribe(data => {                         //saves the data in our array
                     this.requests = data.split('\n');
                     //console.log(this.requests);
                     this.clear(this.requests)
                 });
	  }

	  clear(data:Array<string>){
	  	let k=0;
	  	for (var i =1;i< data.length ; i+=2) {
	  		//#EXTINF:-1,
	  		let aux=data[i].split(',');
	  		
	  		let c:Channel=new Channel();
	  		c.name=aux[1];
	  		c.link=data[i+1];
	  		this.channels[k]=c;
	  		k++;
	  	}
	  }

	  play(channel:Channel){
		this.streamingMedia.playVideo(channel.link, this.options);	
	}

	  pushList(ch:string){
    	this.navCtrl.navigateForward(ch);
  	}

	
}
