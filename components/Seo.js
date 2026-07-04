import Head from 'next/head';

export default function Seo({ title, description, path }) {
  const siteName = 'Edafe Dmouthpiece';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const desc = description || 'Edafe Omadevwe, professionally known as Edafe Dmouthpiece — Nigerian OAP, MC, comedian, actor, football analyst, and content creator based in Port Harcourt, Nigeria.';
  const url = `https://edafedmouthpiece.com${path || '/'}`;
  const ogImage = '/images/headshots/headshot-formal-blue-suit-01.jpg';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
