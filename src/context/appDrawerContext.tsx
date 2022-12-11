import * as React from "react";
import { Drawer as NativeScriptDrawer } from '@nativescript-community/ui-drawer';
import { Drawer } from '@nativescript-community/ui-drawer/react';
import { NSVElement, StyleSheet } from 'react-nativescript';

interface AppDrawerContextData {
  showDrawer(): void;
  closeDrawer(): void;
}

export const AppDrawerContext = React.createContext({} as AppDrawerContextData);

export const AppDrawerContextProvider: React.FC = ({ children }) => {
  const drawerRef = React.useRef<NSVElement<NativeScriptDrawer>>(null);
  function showDrawer() {
    drawerRef?.current?.nativeView.open('left');
  }

  function closeDrawer() {
    drawerRef?.current?.nativeView.close('left');
  }
  return (
    <AppDrawerContext.Provider
      value={{
        closeDrawer,
        showDrawer,
      }}
    >
      <Drawer ref={drawerRef} className="drawer">
        <stackLayout nodeRole="mainContent">
          {children}
        </stackLayout>
        <gridLayout nodeRole="leftDrawer" width="300">
          <stackLayout
            style={styles.drawerContent}
          >
            <button text="Clost Drawer" onTap={closeDrawer}/>
          </stackLayout>
        </gridLayout>
      </Drawer>
    </AppDrawerContext.Provider>
  );
};


const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: 'white'
  }
})
