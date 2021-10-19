import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Constants, Text, Button } from "discord-ui-toolkit";
import { StyleSheet, css } from "aphrodite";

import Demo from "../components/Demo";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <div
        className={css([
          styles.section,
          styles.centeredContainer,
          styles.textBackground,
        ])}
      >
        <Text variant="old_title" color="white">
          Discord UI Toolkit
        </Text>
        <Text color="white">{siteConfig.tagline}</Text>
      </div>
      <div
        className={css([
          styles.section,
          styles.centeredContainer,
          styles.getStartedContainer,
        ])}
      >
        <Text variant="old_title" color="white">
          Get Started
        </Text>
        <div className={css(styles.buttonContainer)}>
          <div className={css(styles.margin)}>
            <Link to="/docs/getting-started/installation">
              <Button text="Installation" onClick={() => true} />
            </Link>
          </div>
          <div className={css(styles.margin)}>
            <Link to="/docs">
              <Button text="Documentation" onClick={() => true} />
            </Link>
          </div>
        </div>
      </div>
      <Demo />
    </Layout>
  );
}

const styles = StyleSheet.create({
  section: {
    height: "30vh",
  },
  centeredContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 10px",
  },
  getStartedContainer: {
    backgroundColor: Constants.Colors.DARK_NOT_BLACK,
  },
  textBackground: {
    backgroundColor: Constants.Colors.OLD_BLURPLE_DARK,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px 10px",
  },
});
