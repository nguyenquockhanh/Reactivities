import React from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetail from "./ActivityDetail";
import ActivityForm from "./ActivityForm";

const ActivitiyDashboard = ({deleteActivity, createOrUpdateActivity, activities, selectActivity, selectedActivity, editMode, setEditMode, submitting, target }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList target={target} submitting={submitting} activities={activities} deleteActivity={deleteActivity} selectActivity={selectActivity}/>
      </Grid.Column>
      <Grid.Column width={6}>
          {selectedActivity && !editMode && <ActivityDetail  activity={selectedActivity} editMode={editMode} setEditMode={setEditMode}/>}
          {editMode && <ActivityForm submitting={submitting} key={selectedActivity && selectedActivity.id || 0} createOrUpdateActivity={createOrUpdateActivity} setEditMode={setEditMode} activity={selectedActivity}/>}
      </Grid.Column>
    </Grid>
  );
};

export default ActivitiyDashboard;
