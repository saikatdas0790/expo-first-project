import React, { Component } from "react";
import { Button, Linking, View, StyleSheet } from "react-native";
import { Constants, WebBrowser } from "expo";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Open URL with ReactNative.Linking"
          onPress={this.handleOpenWithLinking}
          style={styles.button}
        />
        <Button
          title="Open URL with Expo.WebBrowser"
          onPress={this.handleOpeningWithWebBrowser}
          style={styles.button}
        />
      </View>
    );
  }

  handleOpenWithLinking = () => {
    Linking.openURL("https://expo.io");
  };

  handleOpeningWithWebBrowser = () => {
    WebBrowser.openBrowserAsync("https://expo.io");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  button: {
    marginVertical: 10
  }
});
