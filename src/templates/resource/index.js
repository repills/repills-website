import React from 'react'
import {types} from 'repills-config'
import { navigateTo } from 'gatsby-link';
import { Seo } from '../../components';
import paths from '../../../utils/paths';
import config from '../../../config';

import {
  ResourceDetail
} from 'repills-react-components';
import {
  Page,
  SimplePageContent
} from '../../style/layout-columns';


class ResourceTemplate extends React.Component {

  //@TODO add helmet and set ${config.baseUrl}/images/covers/cover-${types[resource.type[0]].id}.jpg as sharing image

  constructor(props) {
    super(props);
    const resource = this.props.data.markdownRemark.frontmatter;

    this.seoData = {
      info: {
        path: paths.getResourcePagePath({ slug: resource.slug, publishedAt: resource.publishedAt })
      },
      structuredData: [{
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": paths.getResourcePagePath({ slug: resource.slug, publishedAt: resource.publishedAt })
        },
        headline: resource.title,
        datePublished: resource.publishedAt,
        dateModified: resource.publishedAt,
        author: {
          "@type": "Person",
          "name": resource.author
        },
        image: `${config.baseUrl}/images/covers/cover-${types[resource.type[0]].id}.jpg`,
        publisher: {
          "@type": "Organization",
          name: 'Repills',
          logo: {
            "@type": "ImageObject",
            "url": `${config.baseUrl}/images/logo-repills.jpg`
          }
        },
      }]
    };
  }

  handleNavigateTo = link => () => window.open(link, '_blank');

  // @TODO: improve helmet meta social

  render() {
    const resource = this.props.data.markdownRemark.frontmatter;
    const type = types[resource.type.join('_')];

    return (
      <div>
        <Seo info={this.seoData.info} structuredData={this.seoData.structuredData}>
          <title>{resource.title}</title>
          <meta property="og:title" content={resource.title} />
        </Seo>
        <Page>
          <SimplePageContent style={{paddingTop: '36px'}}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <ResourceDetail
                {...resource}
                color={type.color}
                typeLabel={type.label.singular}
                navigateTo={this.handleNavigateTo(resource.link)}
                navigateToSection={sectionSlug => navigateTo(`/${sectionSlug}`)}
                navigateToTopic={topicSlug => navigateTo(`/${topicSlug}`)}
                generateTopicUrl={topicSlug => `/${topicSlug}`}
                generateSectionUrl={sectionSlug => `/${sectionSlug}`}
              />
            </div>
          </SimplePageContent>
        </Page>
      </div>
    )
  }
}

export default ResourceTemplate

export const ResourceQuery = graphql`
  query ResourceByReference($reference: String!) {
    markdownRemark(frontmatter: { reference: { eq: $reference } }) {
      id
      html
      frontmatter {
        sections,
        link,
        title,
        author,
        type,
        publishedAt,
        topics,
        slug,
        suggestedBy,
        createdAt,
        reference
      }
    }
  }
`;

