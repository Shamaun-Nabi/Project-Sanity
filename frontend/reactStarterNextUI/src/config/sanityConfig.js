import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET_NAME,
  useCdn: true,
  apiVersion: "2023-05-03",
  token: import.meta.env.VITE_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});
