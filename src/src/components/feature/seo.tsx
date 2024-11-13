import Head from "next/head";

export interface Props {
  title: string;
  description?: string;
  url: string;
  type?:
    | "article"
    | "blog"
    | "website"
    | "bar"
    | "company"
    | "cafe"
    | "hotel"
    | "restaurant"
    | "album"
    | "book"
    | "drink"
    | "food"
    | "game"
    | "movie"
    | "product"
    | "song"
    | "tv_show"
    | "cause"
    | "sports_league"
    | "sports_tea"
    | "band"
    | "government"
    | "non_profit"
    | "school"
    | "university"
    | "actor"
    | "athlete"
    | "author"
    | "director"
    | "musician"
    | "politician"
    | "profile"
    | "public_figure"
    | "city"
    | "country"
    | "landmark"
    | "state_province"
    | "activity"
    | "sport";
  image?: string;
  canonical?: string;
  siteName?: string;
  icon?: string;
  twitter?: {
    twitterCard: "summary" | "summary_large_image";
    twitterSite?: string;
    twitterCreator?: string;
    twitterImage?: string;
  };
}

export const SEO = (props: Props) => {
  const {
    title,
    description,
    url,
    type = "website",
    image = "summary_base_thumbnail_image.png",
    canonical,
    siteName = "Fumitsuzuri",
    icon = "favicon.ico",
    twitter,
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {description && <meta name="description" content={description} />}

      <meta property="og:title" content={title} />

      {description && <meta name="og:description" content={description} />}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${url}/${image}`} />

      {twitter && (
        <>
          <meta name="twitter:title" content={title} />
          {description && (
            <meta name="twitter:description" content={description} />
          )}

          <meta name="twitter:card" content={twitter.twitterCard} />

          {twitter.twitterSite && (
            <meta name="twitter:site" content={twitter.twitterSite} />
          )}

          {twitter.twitterCreator && (
            <meta name="twitter:creator" content={twitter.twitterCreator} />
          )}

          <meta
            name="twitter:image"
            content={twitter.twitterImage ? `${url}/${twitter.twitterImage}` : `${url}/${image}`}
          />
        </>
      )}

      <link rel="icon" href={icon} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};
