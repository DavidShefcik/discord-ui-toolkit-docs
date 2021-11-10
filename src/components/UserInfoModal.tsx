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
  const [submitButtonLoading, setSubmitButtonLoading] = useState(false);

  const {
    username,
    discriminator,
    color,
    setUsername,
    setDiscriminator,
    setColor,
  } = useContext<UserInfo>(UserInfoContext);

  useEffect(() => {
    if (visible) {
      setUsernameValue(username);
    }
  }, [username, visible]);

  useEffect(() => {
    if (visible) {
      setDiscriminatorValue(discriminator);
    }
  }, [discriminator, visible]);

  useEffect(() => {
    setColorValue(color);
  }, [color]);

  const submit = () => {
    let hasError = false;

    setUsernameError(false);
    setDiscriminatorError(false);
    setSubmitButtonLoading(true);

    if (usernameValue.replace(/\s/g, "").length > 0) {
      setUsername(usernameValue);
    } else {
      setUsernameError(true);
      hasError = true;
    }

    if (discriminatorValue.replace(/\s/g, "").length === 4) {
      setDiscriminator(discriminatorValue.replace("#", ""));
    } else {
      setDiscriminatorError(true);
      hasError = true;
    }

    setColor(colorValue);

    if (!hasError) {
      setVisible(false);
    }
    setSubmitButtonLoading(false);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title="User Information"
      cancelText="Cancel"
      submitText="Update"
      submitColor="green"
      alwaysCloseOnButtonPress={false}
      submitButtonLoading={submitButtonLoading}
      onSubmitClick={submit}
      onCancelClick={() => setVisible(false)}
    >
      <div className={css(styles.container)}>
        <div className={css(styles.topContainer)}>
          <span className={css(styles.leftInput)}>
            <TextInput
              value={usernameValue}
              onChange={(value) => setUsernameValue(value)}
              placeholder="Username"
              error={usernameError}
              onEnterPress={() => {
                submit();
                setVisible(false);
              }}
              width="100%"
              maxLength={128}
            />
          </span>
          <span className={css(styles.rightInput)}>
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
  container: {
    padding: "10px 0",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: "10px",
  },
  leftInput: {
    flex: 1,
  },
  rightInput: {
    marginLeft: "3%",
    width: "20%",
  },
});
