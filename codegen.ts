import * as dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";
import { plugin } from "@graphql-codegen/typescript-urql";

dotenv.config({ path: "./.env.local" });

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.HASURA_PROJECT_ENDPOINT as string]: {
        headers: {
          "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET as string,
        },
      },
    },
  ],

  documents: "**/*.graphql",
  generates: {
    gql: {
      preset: "client",
      plugins: [],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
