import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const SEO = ({ title, description, url, image }: SEOProps) => {
  return (
    <Helmet>
      {/* Standard tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
