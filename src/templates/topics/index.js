import React from 'react'
// import Helmet from 'react-helmet'
import {
  SimplePageHeader,
  TopicsList,
  VerticalSpacing
} from 'repills-react-components'
import { push } from 'gatsby'
import Layout from '../../components/Layout'
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
      pageContext
    } = this.props;

    const {
      section,
      topics
    } = pageContext;

    // @TODO: meta tags
    // @TODO: wrapper for TopicsList

    return (
      <Layout>
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
                navigateTo={path => push(path)}
                topics={Object.keys(topics).map(topicId => (topics[topicId]))}
                type="extended"
              />
            </VerticalSpacing>
          </SimplePageContent>
        </Page>
      </Layout>
    );
  }
}
export default Topics;