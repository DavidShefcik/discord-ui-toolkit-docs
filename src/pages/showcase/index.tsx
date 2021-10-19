import React from "react";
import Layout from "@theme/Layout";
import { StyleSheet, css } from "aphrodite";

import { projects, Project } from "./projects";

export default function Showcase() {
  return (
    <Layout title="Showcase">
      <p>Showcase</p>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
