import React from "react";
import NavigationProvider from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";

function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider style={{flex:1}}>
        <NavigationProvider />
      </SafeAreaProvider>
    </StoreProvider>
  );
}

export default App;