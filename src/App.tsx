import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";

import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

import "@ionic/react/css/typography.css";
import React, { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import MonsterBuilder from "./pages/MonsterBuilder";
import MonstersContext from "./store/MonstersContext";
/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const context = useContext(MonstersContext);

  const { initContext } = context;

  useEffect(() => {
    initContext();
  }, [initContext]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/monster-builder">
            <MonsterBuilder />
          </Route>
          <Redirect to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
