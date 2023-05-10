import { Employment } from "@/types/contentful";
import { createClient } from "contentful";

export async function GET(request: Request) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  });

  const response = await client.getEntries<Employment>({
    content_type: "employment",
  });

  return response;
}
