import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Rituals from "./Rituals/rituals";
import Wedding from "./Wedding/WeddingPackage";
import PreWedding from "./prewedding/prewedding";
import Engagement from "./engagement/engagement";
import Event from "./events/events";
import Privacy from "./Privacy/Privacy";
import Contact from "./Contact/Contact";
import Offer from "./Pricing/Offer";
import Blackwhite from "./BlackWhite/blackwhite";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/login" component={Login} />
      <Route  path="/register" component={Register} />
      <Route  path="/rituals" component={Rituals} />
      <Route  path="/engagement" component={Engagement} />
      <Route  path="/wedding" component={Wedding} />
      <Route  path="/prewedding" component={PreWedding} />
      <Route path="/event" component={Event} />
      <Route path="/contact" component={Contact} />
      <Route path="/offer" component={Offer} />
      <Route path="/blackwhite" component={Blackwhite} />
      <Route path="/privacy-policy" component={Privacy} />

    </Switch>
  );
}

export default Routes;
