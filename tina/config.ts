import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "screenshots",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            required: true,
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "eyebrow",
                label: "Eyebrow Text",
              },
              {
                type: "string",
                name: "heading",
                label: "Main Heading",
              },
              {
                type: "string",
                name: "lead",
                label: "Lead Paragraph",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "value",
                    label: "Metric Value",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Metric Label",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Section Heading",
              },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon Emoji",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Service Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Service Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits Section",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Section Heading",
              },
              {
                type: "object",
                name: "items",
                label: "Benefit Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon Emoji",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Benefit Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Benefit Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Section",
            fields: [
              {
                type: "string",
                name: "schedule",
                label: "Schedule",
              },
              {
                type: "string",
                name: "address",
                label: "Address",
              },
              {
                type: "string",
                name: "phone",
                label: "Phone",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
            ],
          },
          {
            type: "object",
            name: "promo",
            label: "Promo Banner",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
              },
            ],
          },
        ],
      },
    ],
  },
});
