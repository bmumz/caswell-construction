import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            phone
            email
            siteUrl
            copyright
            keywords
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
