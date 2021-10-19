import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  MouseEventHandler,
} from "react";
import {
  Text,
  ScrollContainer,
  Message,
  MessageProps,
  MessageInput,
  GreenNewDefaultAvatar,
  BlueNewDefaultAvatar,
  OrangeNewDefaultAvatar,
  SmallUserProfile,
  SmallUserProfileProps,
} from "discord-ui-toolkit";
import { StyleSheet, css } from "aphrodite";

import UserInfoContext, { UserInfo } from "../context/UserInfo";

import useOutsideAlerter from "../hooks/useOutsideClick";

import UserInfoModal from "./UserInfoModal";

export default function Demo() {
  const [userInfoModalVisible, setUserInfoModalVisible] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [userMessages, setUserMessages] = useState<MessageProps[]>([]);
  const [profileInfo, setProfileInfo] = useState<SmallUserProfileProps | null>(
    null
  );
  const [profileTop, setProfileTop] = useState(0);
  const [profileLeft, setProfileLeft] = useState(0);

  const { username, discriminator, color } =
    useContext<UserInfo>(UserInfoContext);

  const profileRef = useRef<HTMLDivElement>();

  useOutsideAlerter({
    ref: profileRef,
    onOutsideClick: () => {
      setProfileInfo(null);
      setProfileTop(0);
      setProfileLeft(0);
    },
  });

  const messages: MessageProps[] = [
    {
      username: "Real User",
      avatarSource: GreenNewDefaultAvatar,
      content: [
        {
          id: 0,
          text: "Hello there!",
        },
        {
          id: 1,
          text: "Welcome to the docs for Discord UI Toolkit!",
        },
      ],
      avatarOnClick: () => {
        setProfileInfo({
          username: "Real User",
          discriminator: "6969",
          avatarSource: GreenNewDefaultAvatar,
        });
      },
      usernameOnClick: () => {
        setProfileInfo({
          username: "Real User",
          discriminator: "6969",
          avatarSource: GreenNewDefaultAvatar,
        });
      },
    },
    {
      username: "Totally Real User",
      avatarSource: BlueNewDefaultAvatar,
      content: [
        {
          id: 0,
          text: (
            <>
              Hello{" "}
              <Text
                variant="mention"
                onClick={() =>
                  setProfileInfo({
                    username,
                    discriminator,
                    avatarSource: OrangeNewDefaultAvatar,
                  })
                }
              >
                @you
              </Text>
              !
            </>
          ),
          mentioned: true,
        },
      ],
      avatarOnClick: () => {
        setProfileInfo({
          username: "Totally Real User",
          discriminator: "0420",
          avatarSource: BlueNewDefaultAvatar,
        });
      },
      usernameOnClick: () => {
        setProfileInfo({
          username: "Totally Real User",
          discriminator: "0420",
          avatarSource: BlueNewDefaultAvatar,
        });
      },
    },
  ];

  const addMessage = () => {
    if (messageInput.replace(/\s/g, "").length > 0) {
      const newItem: MessageProps = {
        username,
        usernameColor: `#${color}`,
        avatarSource: OrangeNewDefaultAvatar,
        content: [
          {
            id: 0,
            text: messageInput.trim(),
          },
        ],
        avatarOnClick: () => {
          setProfileInfo({
            username,
            discriminator,
            avatarSource: OrangeNewDefaultAvatar,
          });
        },
        usernameOnClick: () => {
          setProfileInfo({
            username,
            discriminator,
            avatarSource: OrangeNewDefaultAvatar,
          });
        },
      };
      setUserMessages([...userMessages, newItem]);
      setMessageInput("");
    }
  };

  useEffect(() => {
    const updatedUserMessages = userMessages.map((message) => ({
      ...message,
      username,
      usernameColor: `#${color}`,
    }));

    setUserMessages(updatedUserMessages);
  }, [username, color]);

  return (
    <>
      <UserInfoModal
        visible={userInfoModalVisible}
        setVisible={(value) => setUserInfoModalVisible(value)}
      />
      <div className={css(styles.margin)}>
        <Text variant="old_title">Demo</Text>
      </div>
      <div className={css(styles.demoContainer)}>
        {profileInfo && (
          <div
            ref={profileRef}
            className={css(styles.profileContainer)}
            style={{
              top: profileTop,
              left: profileLeft,
            }}
          >
            <SmallUserProfile {...profileInfo} />
          </div>
        )}
        <ScrollContainer>
          <div className={css(styles.messageContainer)}>
            {[...messages, ...userMessages].map((message, index) => (
              <Message key={`${message.username}-${index}`} {...message} />
            ))}
          </div>
        </ScrollContainer>
        <div className={css(styles.messageInputContainer)}>
          <MessageInput
            placeholder="Message #welcome"
            value={messageInput}
            onChange={(val) => setMessageInput(val)}
            onEnterPress={addMessage}
            rightItems={[
              {
                id: 0,
                value: "settings",
                onClick: () => setUserInfoModalVisible(true),
              },
            ]}
            aboveInputText={userMessages.length > 0 && "Clear your messages"}
            aboveInputVariant="notice"
            aboveInputOnClick={() => setUserMessages([])}
            underInputText={`You are ${username}#${discriminator}`}
          />
        </div>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  margin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px 10px",
  },
  demoContainer: {
    position: "relative",
    zIndex: 1,
  },
  profileContainer: {
    position: "absolute",
    zIndex: 10,
  },
  messageContainer: {
    margin: "10px",
    height: "30vh",
  },
  messageInputContainer: {
    margin: "10px",
  },
});
