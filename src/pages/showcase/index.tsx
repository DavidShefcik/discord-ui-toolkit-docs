import React from "react";
import Layout from "@theme/Layout";
import { StyleSheet, css } from "aphrodite";
import {
  FullUserProfile,
  FullUserProfileTab,
  GreenNewDefaultAvatar,
  Button,
  Toast,
  DiscordLoadingAnimation,
} from "discord-ui-toolkit";

import { projects, Project } from "./projects";

const ADD_PROJECT_LINK =
  "https://github.com/DavidShefcik/discord-ui-toolkit-docs/blob/master/src/pages/showcase/projects.ts#L20";

function ProjectItem({
  name,
  description,
  author,
  image_url,
  open_source,
  repository_url,
  live_url,
}: Project) {
  const tabs: FullUserProfileTab[] = [];
  if (live_url) {
    tabs.push({
      id: 0,
      label: "Live Version",
      content: (
        <Button
          text="Open live version"
          type="green"
          onClick={() => window.open(live_url, "_blank")}
        />
      ),
    });
  }

  if (open_source && repository_url) {
    tabs.push({
      id: 1,
      label: "Open Source",
      content: (
        <Button
          text="Open repository"
          type="green"
          onClick={() => window.open(repository_url, "_blank")}
          childrenPosition="right"
        />
      ),
    });
  }

  return (
    <div className={css(styles.projectContainer)}>
      <FullUserProfile
        username={name}
        avatarSource={image_url || GreenNewDefaultAvatar}
        activityTitle={description}
        activitySubtitle={`Author: ${author}`}
        tabs={tabs.length === 0 ? null : tabs}
        defaultTab={0}
      />
    </div>
  );
}

export default function Showcase() {
  return (
    <Layout title="Showcase">
      <div className={css(styles.projectList)}>
        {projects.map((project) => (
          <ProjectItem key={project.repository_url} {...project} />
        ))}
      </div>
      <div className={css(styles.toastContainer)}>
        <Toast
          text="Want to add your project?"
          visible={true}
          setVisible={() => {}}
          okText="Click Here"
          onOkClick={() => window.open(ADD_PROJECT_LINK, "_blank")}
          width="90%"
        />
      </div>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  projectContainer: {
    margin: "10px 5px",
  },
  projectList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  toastContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    position: "sticky",
    marginBottom: 10,
    bottom: 20,
    left: 0,
  },
});
