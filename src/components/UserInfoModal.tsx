import React, { useState, useContext, useEffect } from "react";
import { Modal, TextInput, ColorPicker } from "discord-ui-toolkit";
import { StyleSheet, css } from "aphrodite";

import UserInfoContext, { UserInfo } from "../context/UserInfo";

interface UserInfoModalProps {
  visible: boolean;
  setVisible(value: boolean): void;
}

export default function UserInfoModal({
  visible,
  setVisible,
}: UserInfoModalProps) {
  const [usernameValue, setUsernameValue] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [discriminatorValue, setDiscriminatorValue] = useState("");
  const [discriminatorError, setDiscriminatorError] = useState(false);
  const [colorValue, setColorValue] = useState("");

  const {
    username,
    discriminator,
    color,
    setUsername,
    setDiscriminator,
    setColor,
  } = useContext<UserInfo>(UserInfoContext);

  useEffect(() => {
    setUsernameValue(username);
  }, [username]);

  useEffect(() => {
    setDiscriminatorValue(discriminator);
  }, [discriminator]);

  useEffect(() => {
    setColorValue(color);
  }, [color]);

  const submit = () => {
    setUsernameError(false);
    setDiscriminatorError(false);

    if (usernameValue.replace(/\s/g, "").length > 0) {
      setUsername(usernameValue);
    } else {
      setUsernameError(true);
    }

    if (discriminatorValue.replace(/\s/g, "").length > 0) {
      setDiscriminator(discriminatorValue.replace("#", ""));
    } else {
      setDiscriminatorError(true);
    }

    setColor(colorValue);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title="User Information"
      cancelText="Cancel"
      submitText="Update"
      submitColor="green"
      onSubmitClick={submit}
    >
      <div className={css(styles.container)}>
        <div className={css(styles.topContainer)}>
          <TextInput
            value={usernameValue}
            onChange={(value) => setUsernameValue(value)}
            placeholder="Username"
            error={usernameError}
            onEnterPress={() => {
              submit();
              setVisible(false);
            }}
            width="80%"
            maxLength={128}
          />
          <span className={css(styles.marginLeft)}>
            <TextInput
              value={discriminatorValue}
              onChange={(value) => setDiscriminatorValue(value)}
              placeholder="9999"
              error={discriminatorError}
              onEnterPress={() => {
                submit();
                setVisible(false);
              }}
              prefix="#"
              width="15%"
              maxLength={4}
            />
          </span>
        </div>
        <ColorPicker
          value={colorValue}
          onChange={(val) => setColorValue(val)}
        />
      </div>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  topContainer: {
    display: "flex",
    flexDirection: "row",
  },
  marginLeft: {
    marginLeft: "3%",
  },
});
