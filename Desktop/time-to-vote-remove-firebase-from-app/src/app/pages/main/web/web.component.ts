import { Component, OnInit } from '@angular/core';
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { ActivatedRoute } from '@angular/router';
import { PageRoute } from 'nativescript-angular';
import { isAndroid} from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'ns-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  webViewSrc: string;
  public sub: any;
  public isAndroid = isAndroid;

  constructor(private route: ActivatedRoute, private router: RouterExtensions) {
    this.route.queryParams.subscribe(params => {
      this.webViewSrc = params['link'];
    });
  }

  ngOnInit() {
  }

    onLoadStarted(args: LoadEventData) {}

    onLoadFinished(args: LoadEventData) {}

    close() {
      this.router.navigate(['main', 'home']);
    }

}
