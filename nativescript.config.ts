import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.opennativedemo',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ignoredNativeDependencies: ['ramda']
} as NativeScriptConfig;