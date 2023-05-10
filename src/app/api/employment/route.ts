import { Education } from "@/types/contentful";
import { createClient } from "contentful";

export async function GET(request: Request) {
  console.log("oi");
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  });

  const response = await client.getEntries<Education>({
    content_type: "education",
  });

  return response;
}
