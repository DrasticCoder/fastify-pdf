import React from "react";
import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

interface Template2Props {
  title: string;
  content: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#4a4a4a",
  },
  content: {
    fontSize: 12,
    lineHeight: 1.6,
    color: "#555555",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    color: "#aaaaaa",
  },
  divider: {
    margin: "10px 0",
    borderBottom: "1px solid #eeeeee",
  },
});

const Template2: React.FC<Template2Props> = ({ title, content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>{title}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.content}>
        <Text>{content}</Text>
      </View>
      <View style={styles.footer}>
        <Text>auto gen by backend side </Text>
      </View>
    </Page>
  </Document>
);

export default Template2;
