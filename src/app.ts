import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import App from './components/App';

// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app’s first module.

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });

import { Application, isAndroid } from '@nativescript/core'
import { NativeModules } from "@open-native/core"
console.log(process.env.TESTENV) // uncomment this line to get env errorß
console.log(process.env)

Application.on(Application.resumeEvent, async () => {


});

ReactNativeScript.start(React.createElement(App, {}, null));

// Do not place any code after the application has been started as it will not
// be executed on iOS.
