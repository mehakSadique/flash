import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { EventData } from 'tns-core-modules/ui/page';
import * as appSettings from 'tns-core-modules/application-settings';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { request } from 'tns-core-modules/http';

@Component({
	selector: 'timer',
	templateUrl: './timer.component.html',
	styleUrls: ['./timer.component.scss']
})

export class TimerComponent  {
	startEndTimes = [];
	startTime: string = "";
	endTime: string = "";
	public lat;
	public long;
	public time: number = 0;
	start_count: number = 0;
    public interval;
	
	constructor(public router: RouterExtensions) { 
		this.time = JSON.parse(appSettings.getString('endTimes','[]'));
	}

  startTimer() {
		geolocation.enableLocationRequest()
		// //Then get the current location
		.then(()=>{
		 geolocation.getCurrentLocation({desiredAccuracy: Accuracy.high})
		     .then((location)=>{
				 this.lat = location.latitude
				 this.long = location.longitude

				 appSettings.setString('latitude',JSON.stringify(this.lat));
				 appSettings.setString('longitude',JSON.stringify(this.long));

				//  this.lat = appSettings.getString('latitude');
				//  this.long = appSettings.getString('longitude');
			 });
		});
	
	this.start_count+=1;
	if(this.start_count==1){
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
	}, 1000);
	}
	appSettings.setString('startTimes',JSON.stringify(this.time))
	this.startTime = appSettings.getString('startTimes');
  }
  
  pauseTimer() {
	this.start_count=0;
    clearInterval(this.interval);
  }

transform(value: number, args?: any): string {

    const hours: number = Math.floor(value / 60);
    const minutes: number = (value - hours * 60);

    if (hours < 10 && minutes < 10) {
        return '0' + hours + ' : 0' + (value - hours * 60);
    }
    if (hours > 10 && minutes > 10) {
        return '0' + hours + ' : ' + (value - hours * 60);
    }
    if (hours > 10 && minutes < 10) {
        return hours + ' : 0' + (value - hours * 60);
    }
    if (minutes > 10) {
        return '0' + hours + ' : ' + (value - hours * 60);
    }}
  

	
  saveTime() {
		appSettings.setString('endTimes',JSON.stringify(this.time));
		//this.endTime = appSettings.getString('endTimes');
		let voteLocation = [appSettings.getString("longitude"), appSettings.getString("latitude")]
		request({
			url:
			  'https://us-central1-time-to-vote-q2.cloudfunctions.net/device',
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			content: JSON.stringify({
			  id: appSettings.getString("deviceID"),
			  voteTimerStartedAt: "0", 
			  voteTimerEndedAt: appSettings.getString("endTimes"),
			  voteLocation 
			})
		  })
			  .then(res => {
				console.log(res)
			  })
			.catch(err => {
			  console.log(err);
			});
		// console.log(this.startTime);
		// console.log(this.endTime);
		// this.startEndTimes.push({
		// 	start: this.startTime,
		// 	end: this.endTime,
		// 	latitude: this.lat,
		// 	longitude: this.long
		// });
		//console.log(JSON.stringify(this.startEndTimes))
  }

  reset() {
	this.time = 0;
	  this.pauseTimer();
  }

	finish() {
		 dialogs.confirm({
			message: "Have you finished voting?",
			okButtonText: "YES",
			cancelButtonText: "NO",
		}).then( (result) => {
			this.router.navigate(['main', 'survey']);
		});
	}

	back() {
		this.router.back();
	}
}