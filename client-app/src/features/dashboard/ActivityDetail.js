import React from "react";
import {Card, Icon, Image, Button} from 'semantic-ui-react';

const ActivityDetail = ({setEditMode, activity}) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false} ui={false} wrapped
      />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
            <Button basic color='blue' content='Edit' onClick={() => setEditMode(true)} />
            <Button basic color='grey' content='Cancel' onClick={() => setEditMode(false)}/>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetail;
