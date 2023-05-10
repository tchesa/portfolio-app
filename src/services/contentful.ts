import { ContentfulMedia, Education, Employment } from "@/types/contentful";
import { Entry, EntryCollection } from "contentful";

const BASE_URL = "https://cdn.contentful.com";

export const getEmploymentCollection = async (): Promise<
  EntryCollection<Employment>
> => {
  const response = await fetch(
    `${BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=employment`
  );

  const data = (await response.json()) as EntryCollection<Employment>;

  const companyLogoCollection = await Promise.all(
    data.items.map(async (item, index) => {
      if (!item.fields.companyLogo) {
        return { item: index, logo: null };
      }

      const getLogoResponse = await fetch(
        `${BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/assets/${item.fields.companyLogo.sys.id}?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`
      );

      const getLogoData = await getLogoResponse.json();
      return { item: index, logo: getLogoData };
    })
  );

  companyLogoCollection.forEach((companyLogo) => {
    if (companyLogo.logo) {
      data.items[companyLogo.item].fields.companyLogo = companyLogo.logo;
    }
  });

  return data;
};

export const getEducationCollection = async (): Promise<
  EntryCollection<Education>
> => {
  const response = await fetch(
    `${BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=education`
  );

  const data = (await response.json()) as EntryCollection<Education>;

  const schoolThumbnailCollection = await Promise.all(
    data.items.map(
      async (
        item,
        index
      ): Promise<{
        item: number;
        thumbnail: Entry<ContentfulMedia> | null;
      }> => {
        if (!item.fields.schoolThumbnail) {
          return { item: index, thumbnail: null };
        }

        const getThumbnailResponse = await fetch(
          `${BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/assets/${item.fields.schoolThumbnail.sys.id}?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`
        );

        const getThumbnailData = await getThumbnailResponse.json();
        return { item: index, thumbnail: getThumbnailData };
      }
    )
  );

  schoolThumbnailCollection.forEach((thumbnailData) => {
    if (thumbnailData.thumbnail) {
      data.items[thumbnailData.item].fields.schoolThumbnail =
        thumbnailData.thumbnail;
    }
  });

  return data;
};
