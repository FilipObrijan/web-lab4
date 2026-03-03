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
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
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
                label: "Lead Text",
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
                    label: "Value",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
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
                name: "eyebrow",
                label: "Eyebrow",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "linkText",
                    label: "Link Text",
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
                name: "eyebrow",
                label: "Eyebrow",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "lead",
                label: "Lead Text",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "Benefit Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
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
                name: "eyebrow",
                label: "Eyebrow",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
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
            label: "Mobile Promo Banner",
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
