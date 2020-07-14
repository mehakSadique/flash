import {Directive, Input} from '@angular/core';
import {ScrollView} from 'tns-core-modules/ui/scroll-view';
import {getViewById} from 'tns-core-modules/ui/core/view-base';
import {View} from 'tns-core-modules/ui/core/view';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input() scrollView;
  @Input() scrollViewId;
  target;
  @Input('target')  set setTarget(tar) {
    if (tar) {
      setTimeout(() => {
        const scrollView = this.scrollView as ScrollView;
        const baseView = getViewById(scrollView, scrollView.id.toString()) as View;
        const target = getViewById(baseView, tar.id.toString()) as View;
        scrollView.scrollToVerticalOffset(target.getLocationRelativeTo(baseView).y, true);
        scrollView.isUserInteractionEnabled = true;
      });
    }
  }
  constructor() {
  }

}
