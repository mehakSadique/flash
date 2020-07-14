import {isAndroid} from 'tns-core-modules/platform';
import * as application from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
declare var android;
declare var java;
declare var exit;
export class Process {

    public static restart(msg?) {
       // const application = require('application');
        if (isAndroid) {
            const mStartActivity = new android.content.Intent(application.android.context, application.android.startActivity.getClass());
            const mPendingIntentId = Math.random() * 100000;
            //noinspection JSUnresolvedFunction,JSUnresolvedVariable
            const mPendingIntent = android.app.PendingIntent.getActivity(
                application.android.context, mPendingIntentId, mStartActivity, android.app.PendingIntent.FLAG_CANCEL_CURRENT);
            //noinspection JSUnresolvedFunction,JSUnresolvedVariable
            const mgr = application.android.context.getSystemService(android.content.Context.ALARM_SERVICE);
            //noinspection JSUnresolvedFunction,JSUnresolvedVariable
            mgr.set(android.app.AlarmManager.RTC, java.lang.System.currentTimeMillis() + 100, mPendingIntent);
            //noinspection JSUnresolvedFunction,JSUnresolvedVariable
            android.os.Process.killProcess(android.os.Process.myPid());
        } else {
            dialogs.alert({
                title: 'Please restart application',
                message: msg || 'The application needs to be restarted.',
                okButtonText: 'Quit!'
            }).then(function () {
                //noinspection JSUnresolvedFunction,JSHint
                exit(0);
            });
            return false;
        }
    }
}
