import Head from "next/head";

interface IMeta {
  title: string;
  keywords: string;
  description: string;
  oGImageUrl: string;
}

const Meta = ({
  title,
  keywords,
  description,
  oGImageUrl,
}: IMeta) => {
  return (
    <Head>
      {/* Title and others */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="manifest" href="/manifest.json" />
      <title>{title} | A demo clothing shop</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {/* Twitter tags */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={`${title} | A demo clothing shop`}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:image" content={oGImageUrl} />
      {/* Open graph tags */}
      <meta
        property="og:title"
        content={`${title} | A demo clothing shop`}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={oGImageUrl} />
    </Head>
  );
};

Meta.defaultProps = {
  keywords:
    "clothe, clothing, shop, clothing shop, mens clothing, womens clothing, demo",
  description:
    "A demo clothing shop made for educational purposes",
  oGImageUrl:
    "https://res.cloudinary.com/drsgyshsf/image/upload/v1665243289/clothing-shop/open-graph/Clothing_Shop_wkzuiy.png",
};

export default Meta;
