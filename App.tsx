import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { ThemeContextProvider } from "./src/core/themeProvider";

import TabBar from "./src/components/TabBar";

import MainScreen from "./src/screens/Main";
import SettingsScreen from "./src/screens/Settings";

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainScreen,
    Settings: SettingsScreen
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return (
      <ThemeContextProvider>
        <AppContainer />
      </ThemeContextProvider>
    );
  }
}
