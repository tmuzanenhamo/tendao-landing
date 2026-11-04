import { company } from '@/legal/details';
import { site } from '@/site.config';

// Who Tendao is and what the site is called, for search engines. It repeats
// only what the footer already publishes.
const data = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      legalName: company.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      email: site.email,
      address: company.address,
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      name: site.name,
      url: site.url,
      publisher: { '@id': `${site.url}/#organization` },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Escaped so that nothing in the data can close this script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
