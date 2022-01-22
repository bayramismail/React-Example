import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
export default function SignedOut({ signIn }) {
  return (
    <>
      <Menu.Item>
        <Button onClick={signIn} size="mini" color="facebook">
          <Icon name="sign-in" /> Giriş Yap
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button size="mini" color="instagram">
          <Icon name="sign-out" /> Kayıt Ol
        </Button>
      </Menu.Item>
    </>
  );
}
