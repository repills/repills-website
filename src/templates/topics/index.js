import React from 'react';
import Helmet from 'react-helmet';
import {
  SimplePageHeader,
  TopicsList,
  VerticalSpacing
} from 'repills-react-components';
import { navigateTo } from 'gatsby-link';
import { sections } from 'repills-config';

import {
  HeaderContent,
  HeaderContentMain,
  Header,
  Page,
  SimplePageContent
} from '../../style/layout-columns';

class Topics extends React.Component {

  render() {

    const {
      pathContext
    } = this.props;

    const {
      section,
      topics
    } = pathContext;

    return (
      <div>
        <Header>
          <HeaderContent>
            <HeaderContentMain>
              <SimplePageHeader
                title={`Topics in ${section.name}`}
              />
            </HeaderContentMain>
          </HeaderContent>
        </Header>
        <Page>
          <SimplePageContent>
            <VerticalSpacing size="medium">
              <TopicsList
                navigateTo={path => navigateTo(path)}
                topics={Object.keys(topics).map(topicId => (topics[topicId]))}
                type="extended"
              />
            </VerticalSpacing>
          </SimplePageContent>
        </Page>
      </div>
    );
  }
}
export default Topics;