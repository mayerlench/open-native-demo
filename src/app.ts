import * as React from 'react'
import { registerDrawer } from '@nativescript-community/ui-drawer/react';

registerDrawer()

/* Controls react-nativescript log verbosity. true: all logs; false: only error logs. */
Object.defineProperty(global, '__DEV__', { value: true })

// allow property rippleColor on styles
declare module "@nativescript/core/ui/styling/style" {
    interface Style {
        rippleColor: string;
    }
}
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as ReactNativeScript from 'react-nativescript'
import { android as andApp, AndroidApplication, exitEvent } from '@nativescript/core/application'
import { Application, ApplicationSettings, CoreTypes, Frame, isAndroid as isAnd, isAndroid, knownFolders, TouchManager } from '@nativescript/core'
import SpInAppUpdates, {
    NeedsUpdateResponse,
    IAUUpdateKind,
    StartUpdateOptions,
  } from 'sp-react-native-in-app-updates';
import { MainStack } from './components/MainStack';
  

TouchManager.enableGlobalTapAnimations = true
TouchManager.animations = {
    down: {
        scale: { x: 0.95, y: 0.95 },
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut
    },
    up: {
        scale: { x: 1, y: 1 },
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut
    }
}

Application.on(Application.resumeEvent, () => {
    
      const inAppUpdates = new SpInAppUpdates(
        false // isDebug
      );
      // curVersion is optional if you don't provide it will automatically take from the app using react-native-device-info
      inAppUpdates.checkNeedsUpdate().then((result) => {
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
});

if (isAnd) {
    andApp.on(AndroidApplication.activityBackPressedEvent, (args: any) => {
        const frame = Frame.topmost()
        if (frame && !frame.canGoBack()) args.cancel = true
    })

    andApp.on(exitEvent, (args) => {
        knownFolders.temp().clear()
    })
}

ReactNativeScript.start(React.createElement(MainStack, {}, null))

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/


