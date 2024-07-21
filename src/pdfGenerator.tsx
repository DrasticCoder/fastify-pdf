import React from "react";
import { renderToStream } from "@react-pdf/renderer";

export const generatePDF = async (
  TemplateComponent: React.FC<any>,
  data: any
): Promise<Buffer> => {
  const stream = await renderToStream(<TemplateComponent {...data} />);
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
};
