import React, { useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

const ActivityForm = ({ setEditMode, activity, createOrUpdateActivity, submitting }) => {
  
  const initializeForm = () => {
    if (activity) {
      return activity;
    } else {
      return {
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: ""
      };
    }
  };
  const [activityForm, setActivityForm] = useState(initializeForm);
  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setActivityForm({ ...activityForm, [name]: value });
  };
  const handleSubmit = () => {
    createOrUpdateActivity(activityForm);
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name="title"
          placeholder="Title"
          value={activityForm.title}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name="description"
          placeholder="Description"
          value={activityForm.description}
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder="Category"
          name="category"
          value={activityForm.category}
        />
        <Form.Input
          onChange={handleInputChange}
          type="string"
          name="date" type='datetime-local'
          placeholder="dd/mm/yyyy"
          value={activityForm.date}
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder="City"
          name="city"
          value={activityForm.city}
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder="Venue"
          name="venue"
          value={activityForm.venue}
        />
        <Button floated="right" loading={submitting} positive type="submit" content="Submit" />
        <Button
          floated="right"
          content="Cancel"
          onClick={() => setEditMode(false)}
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
