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
import MonsterBuilder from "./pages/MonsterBuilder";

import Monsters from "./pages/Monsters";
import Traps from "./pages/Traps";
import MonsterBuilderContext from "./store/MonsterBuilderContext";
import "./theme/theme.css";
/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const context = useContext(MonsterBuilderContext);

  const { initContext } = context;

  useEffect(() => {
    console.log("Initializing context");
    initContext();
  }, [initContext]);

  return (
    <IonApp>
      <IonReactRouter>
        <React.Suspense fallback={<IonSpinner />}>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/monsters" component={Monsters} />
              <Route exact path="/traps" component={Traps} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton href="/monsters" tab="monster">
                <IonIcon icon={skull} />
                <IonLabel>Monsters</IonLabel>
              </IonTabButton>
              <IonTabButton href="/traps" tab="trap">
                <IonIcon icon={construct} />
                <IonLabel>Traps</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
          <Route exact path="/monsters/:id" component={MonsterBuilder} />
          <Route exact path="/traps/:id" component={MonsterBuilder} />
          <Route exact path="/new-monster" component={MonsterBuilder} />
          <Route exact path="/new-trap" component={Traps} />
          <Redirect to="/monsters" />
        </React.Suspense>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
