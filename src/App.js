import React, { useReducer } from "react";

import appContext from "./context/context";
import appReducer, { initialState } from "./context/reducer";

import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import Tv from "./pages/Tv";

const App = props => {
  const [store, dispatch] = useReducer(appReducer, initialState);

  return (
    <appContext.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={store.theme ? DarkTheme : LightTheme}>
        <GlobalStyle />
        {/* <Head>
          <title>Ostaco </title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <Tv />
      </ThemeProvider>
    </appContext.Provider>
  );
};

export default App;
