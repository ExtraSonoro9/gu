import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5836dc9da1f4f7315362d1a7394212c15730990b', queries,  });
export default client;
  