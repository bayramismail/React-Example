import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import "./css/category.css";
export default function Categories() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Menu pointing inverted vertical>
            <Menu.Item>
              <Menu.Header>
                <h3>Kategoriler</h3>
              </Menu.Header>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Products</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="enterprise" />
                <Menu.Item name="consumer" />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>CMS Solutions</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="rails" />
                <Menu.Item name="python" />
                <Menu.Item name="php" />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Hosting</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="shared" />
                <Menu.Item name="dedicated" />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Support</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="email">E-mail Support</Menu.Item>
                <Menu.Item name="faq">FAQs</Menu.Item>
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
