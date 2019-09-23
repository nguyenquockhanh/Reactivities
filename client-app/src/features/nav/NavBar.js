import React, { useContext } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { ActivityContext } from "../../app/contexts";

const NavBar = () => {
  const context = useContext(ActivityContext);
  const { handleOpenCreateForm } = context;
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            alt="logo"
            src="/assets/logo.png"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            positive
            content="Create Activity"
            onClick={handleOpenCreateForm}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
