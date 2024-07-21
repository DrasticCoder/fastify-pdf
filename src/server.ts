import Fastify from "fastify";
import { generatePDF } from "./pdfGenerator";
import Template1 from "./pdfTemplates/template1";
import Template2 from "./pdfTemplates/template2";

const fastify = Fastify({ logger: true });

const templates: Record<string, React.FC<any>> = {
  1: Template1,
  2: Template2,
};

fastify.get("/", async (request, reply) => {
  return { status: "ok" };
});

fastify.post("/generate-pdf/template/:templateId", async (request, reply) => {
  const { templateId } = request.params as { templateId: string };
  const data = request.body as Record<string, any>;

  const TemplateComponent = templates[templateId];

  if (!TemplateComponent) {
    reply.status(404).send({ error: "Template not found" });
    return;
  }

  try {
    const pdfBuffer = await generatePDF(TemplateComponent, data);
    reply
      .header("Content-Type", "application/pdf")
      .header("Content-Disposition", "attachment; filename=document.pdf")
      .send(pdfBuffer);
  } catch (error) {
    request.log.error(error);
    reply.status(500).send("Error generating PDF");
  }
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
