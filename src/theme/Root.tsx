import React, { ReactChild, useState } from "react";
import { DiscordProvider } from "discord-ui-toolkit";
import UserInfoContext from "../context/UserInfo";
import DocsThemeContext, { Theme } from "../context/DocsTheme";

import "discord-ui-toolkit/build/assets/css/discord-ui-toolkit.css";

export default function Root({ children }: { children: ReactChild }) {
  const [username, setUsername] = useState("Me");
  const [discriminator, setDiscriminator] = useState("9999");
  const [color, setColor] = useState("ffffff");

  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  return (
    <DiscordProvider>
      <UserInfoContext.Provider
        value={{
          username,
          discriminator,
          color,
          setUsername: (val) => setUsername(val),
          setDiscriminator: (val) => setDiscriminator(val),
          setColor: (val) => setColor(val),
        }}
      >
        <DocsThemeContext.Provider
          value={{ theme, setTheme: (val) => setTheme(val) }}
        >
          {children}
        </DocsThemeContext.Provider>
      </UserInfoContext.Provider>
    </DiscordProvider>
  );
}
