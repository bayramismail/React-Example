import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C4E35AQHw1g-X-L4u4w/profile-framedphoto-shrink_100_100/0/1618156947009?e=1642500000&v=beta&t=U4tqcEmCpvpJOxKso_SfMjmL6nQyZZUyPGF5iaqAuxI"
        />
        <Dropdown pointing="top left" text="İsmail">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
