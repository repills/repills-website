import React from 'react'
import {types} from 'repills-config'
import { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';

import {
  ResourceDetail
} from 'repills-react-components';
import {
  Page,
  SimplePageContent
} from '../../style/layout-columns';


class ResourceTemplate extends React.Component {

  handleNavigateTo = link => () => window.open(link, '_blank');

  // @TODO: fix helmet meta

  render() {
    const resource = this.props.data.markdownRemark.frontmatter;
    const type = types[resource.type.join('_')];
    return (
      <div>
        <Helmet>
          <title>{resource.title}</title>
          <meta property="og:title" content={resource.title} />
        </Helmet>
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

