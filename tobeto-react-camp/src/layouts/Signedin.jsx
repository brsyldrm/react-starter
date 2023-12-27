import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
        />
        <Dropdown pointing="top right" text="Admin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={signOut}
              text="Cikis Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}