import React, {useContext} from "react";
import {Card, Image, Button} from 'semantic-ui-react';
import {ActivityContext} from "../../app/contexts";

const ActivityDetail = () => {
  const context = useContext(ActivityContext);
  let {setEditMode, selectedActivity} = context;

  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${selectedActivity.category}.jpg`}
        wrapped
        ui={false} 
      />
      <Card.Content>
        <Card.Header>{selectedActivity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{selectedActivity.date}</span>
        </Card.Meta>
        <Card.Description>
          {selectedActivity.description}
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
