import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";

interface Template1Props {
  username: string;
}

const Template1: React.FC<Template1Props> = ({ username }) => (
  <Document>
    <Page size="A4">
      <Text>Hello {username}</Text>
    </Page>
  </Document>
);

export default Template1;
