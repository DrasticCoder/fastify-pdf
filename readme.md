# Fastify PDF Generation

This project is a Fastify server that generates dynamic PDFs on the fly using React components and `@react-pdf/renderer`. It uses Prisma for database interaction and provides endpoints for generating PDFs based on different templates.

## Prerequisites

- Node.js (v14 or later)
- pnpm (Package manager)

## Project Structure
```
fastify-pdf-server/
├── node_modules/
├── prisma/
│ └── schema.prisma //
├── src/
│ ├── pdfTemplates/
│ │ ├── template1.tsx
│ │ ├── template2.tsx
│ ├── pdfGenerator.ts
│ └── server.ts
├── .env //
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```
___

## Setup

1. **Clone this repository:**
```
git clone https://github.com/DrasticCoder/fastify-pdf.git
```

Install dependencies:
```
pnpm install
```

Start the Fastify server:
```
pnpm run dev
```
The server should be running on http://localhost:3000.

## Endpoints
**Generate PDF**

Endpoint: POST /generate-pdf/template/:templateId

Description: Generates a PDF using the specified template and data.

Parameters:
templateId: The ID of the template to use (e.g., 1 for template1, 2 for template2).

Request Body: JSON data to be passed to the template.
Templates
Template 1 (template1)

Parameters: { "username": "string" }

Example:
```
curl -X POST -H "Content-Type: application/json" -d '{"username":"DrasticCoder"}' -o document1.pdf http://localhost:3000/generate-pdf/template/1
```
Template 2 

Example:
```
curl -X POST -H "Content-Type: application/json" -d '{"title":"My Title", "content":"This is a formatted content of the PDF."}' -o document2.pdf http://localhost:3000/generate-pdf/template/2
```

for timed request

```
time curl -X POST -H "Content-Type: application/json" -d '{"title":"My Title", "content":"This is a formatted content of the PDF."}' -o document2.pdf http://localhost:3000/generate-pdf/template/2
```

