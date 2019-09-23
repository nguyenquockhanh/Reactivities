// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import agent from "./api/agent";

export const ActivityContext = createContext();

export const ActivityProvider = props => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const handleSelectActivity = id => {    
    setSelectedActivity(activities.find(e => e.id === id));
  };
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [target, setTarget] = useState("");

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  useEffect(() => {
    agent.Activities.list()
      .then(response => {
        let activities = [];
        response.forEach(activity => {
          activity.date = activity.date.split(".")[0];
          activities.push(activity);
        });
        setActivities(activities);
      })
      .then(() => setLoading(false));
  }, []);

  const createOrUpdateActivity = activity => {
    setSubmitting(true);
    if (!activity.id) {
      activity.id = uuid();
      agent.Activities.create(activity).then(response => {
        setActivities([...activities, activity]);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      var index = activities.findIndex(item => item.id === activity.id);
      if (index < 0) return;
      agent.Activities.update(activity).then(response => {
        activities[index] = { ...activity };
        setActivities([...activities]);
        setSelectedActivity({ ...activity });
        setEditMode(false);
        setSubmitting(false);
      });
    }
  };

  const deleteActivity = (event, id) => {
    setTarget(event.currentTarget.name);
    agent.Activities.delete(id).then(response => {
      setActivities([...activities.filter(item => item.id !== id)]);
      setTarget("");
    });
  };
  return (
    <ActivityContext.Provider
      value={{
        loading,
        handleOpenCreateForm,
        createOrUpdateActivity,
        selectedActivity,
        handleSelectActivity,
        activities,
        editMode,
        setEditMode,
        deleteActivity,
        submitting,
        target
      }}
    >
      {props.children}
    </ActivityContext.Provider>
  );
};
