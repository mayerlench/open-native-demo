import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';

// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app’s first module.

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });

import { Application, isAndroid } from '@nativescript/core'
import SpInAppUpdates, {
    NeedsUpdateResponse,
    IAUUpdateKind,
    StartUpdateOptions,
} from 'sp-react-native-in-app-updates';
import App from './components/App';
import { getVersion } from 'react-native-device-info';

console.log('version', getVersion())

Application.on(Application.resumeEvent, async () => {
    try {
        const inAppUpdates = new SpInAppUpdates(
            false // isDebug
        );
        // curVersion is optional if you don't provide it will automatically take from the app using react-native-device-info
        inAppUpdates.checkNeedsUpdate({ curVersion: '0.0.8' }).then((result) => {
            if (result.shouldUpdate) {
                let updateOptions: StartUpdateOptions = {};
                if (isAndroid) {
                    // android only, on iOS the user will be promped to go to your app store page
                    updateOptions = {
                        updateType: IAUUpdateKind.FLEXIBLE,
                    };
                }
                inAppUpdates.startUpdate(updateOptions); // https://github.com/SudoPlz/sp-react-native-in-app-updates/blob/master/src/types.ts#L78
            }
        });
    } catch (e) {
        console.log('error:', e);
    }

});

ReactNativeScript.start(React.createElement(App, {}, null));

// Do not place any code after the application has been started as it will not
// be executed on iOS.
