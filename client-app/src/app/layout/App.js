import React, { useState, useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import ActivitiyDashboard from "../../features/dashboard/ActivitiyDashboard";
import LoadingComponent from "../layout/LoadingComponent";
import {ActivityContext} from '../contexts';

function App() {
  const context = useContext(ActivityContext);
  let {loading} = context;

  if (loading) return <LoadingComponent content="Loading..." />;

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivitiyDashboard />
      </Container>
    </Fragment>
  );
}

export default App;
