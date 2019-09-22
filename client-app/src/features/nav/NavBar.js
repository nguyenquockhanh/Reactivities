import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

const NavBar = ({handleOpenCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img alt='logo' src="/assets/logo.png" style={{marginRight: '10px'}}/>
            Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive content="Create Activity" onClick={handleOpenCreateForm}/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
