import { createContext } from "react";

export interface UserInfo {
  username: string;
  discriminator: string;
  color: string;
  setUsername(value: string): void;
  setDiscriminator(value: string): void;
  setColor(value: string): void;
}

export default createContext<UserInfo>({
  username: "Me",
  discriminator: "9999",
  color: "ffffff",
  setUsername: () => {},
  setDiscriminator: () => {},
  setColor: () => {},
});
