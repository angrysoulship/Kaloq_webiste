"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "kaloq",
  title: "Kaloq Content Studio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) => S.list().title("Content").items([
        S.listItem()
          .title("Blog posts")
          .schemaType("post")
          .child(
            S.documentList()
              .title("Blog posts")
              .filter('_type == "post" && coalesce(locale, "en") != "zh"'),
          ),
      ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: { types: schemaTypes },
});
