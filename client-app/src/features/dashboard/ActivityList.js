import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";

const ActivityList = ({ activities, selectActivity, deleteActivity, submitting, target }) => {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  content="View"
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  color="blue"
                />
                <Button floated="right" content="delete" loading={target === activity.id} color="red" name={activity.id} onClick={(e) => deleteActivity(e, activity.id)} />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
