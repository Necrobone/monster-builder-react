import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSpinner,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
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
import { construct, skull } from "ionicons/icons";
import React, { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import Monsters from "./pages/Monsters";
import Traps from "./pages/Traps";
import MonstersContext from "./store/MonstersContext";
import MonstersContextProvider from "./store/MonstersContextProvider";
import TrapsContextProvider from "./store/TrapsContextProvider";
/* Theme variables */
import "./theme/variables.css";
import "./theme/theme.css";

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
        <React.Suspense fallback={<IonSpinner />}>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/monster-builder">
                <MonstersContextProvider>
                  <Monsters />
                </MonstersContextProvider>
              </Route>
              <Route exact path="/trap-builder">
                <TrapsContextProvider>
                  <Traps />
                </TrapsContextProvider>
              </Route>
              <Route exact path="/new-monster">
                <Monsters />
              </Route>
              <Route exact path="/new-trap">
                <Traps />
              </Route>
              <Redirect to="/monster-builder" />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton href="/monster-builder" tab="monster">
                <IonIcon icon={skull} />
                <IonLabel>Monsters</IonLabel>
              </IonTabButton>
              <IonTabButton href="/trap-builder" tab="trap">
                <IonIcon icon={construct} />
                <IonLabel>Traps</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </React.Suspense>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
