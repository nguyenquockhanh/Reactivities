import React, {useContext} from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetail from "./ActivityDetail";
import ActivityForm from "./ActivityForm";
import {ActivityContext} from "../../app/contexts";

const ActivitiyDashboard = () => {
  const context = useContext(ActivityContext);
  let { selectedActivity, editMode } = context;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList/>
      </Grid.Column>
      <Grid.Column width={6}>
          {selectedActivity && !editMode && <ActivityDetail />}
          {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
};

export default ActivitiyDashboard;
