import React from 'react'
import Helmet from 'react-helmet'
import {
  ResponsivePagination,
  SectionPageHeader,
  Counter,
  Modal,
  TopicsList,
  Button,
  ShareBar,
  VerticalSpacing,
  KeywordsCloud,
  theme
} from 'repills-react-components'
import {
  push,
} from 'gatsby';
import ResourcesList from '../../components/wrappers/ResourcesList'
import Layout from '../../components/Layout'
import { rgba } from 'polished'
import { sections } from 'repills-config'
import paths from '../../../utils/paths'
import config from '../../../config'
import ReactGA from 'react-ga'
import {
  Header,
  HeaderContent,
  HeaderContentMain,
  HeaderContentSecondary,
  Page,
  SimplePageContent
} from '../../style/layout-columns'

ReactGA.initialize(config.ga.trackingId);
const { neutral } = theme.palettes;

class Topic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openTopicsModal: false
    };
  }

  openTopicsModal = () => this.setState({ openTopicsModal: true });

  backToSection = () => push(`/${this.props.pageContext.sectionId}`);

  onClose = () => this.setState({ openTopicsModal: false });

  handleDetailView = ({ resource }) => {
    ReactGA.event({
      category: 'Resource browsing',
      action: 'See resource detail (Topic)',
      label: 'Resource modal detail'
    });
  };

  render() {

    const {
      pageContext
    } = this.props;

    const {
      sectionId,
      pagination,
      topic,
      topics
    } = pageContext;

    const {
      openTopicsModal
    } = this.state;

    const section = sections.find(s => s.id === sectionId);
    const metaTitle = `${section.name}: ${topic.title} | Learn pill by pill and acquire more skills!`;
    const metaDescription = topic.description ? topic.description : `Free resources about '${topic.title}' and other hot topics in '${section.name}'. Discover everyday what's new in the web development and UI design.`;
    const shareUrl = `${config.baseUrl}/${paths.getTopicPagePath({index: pagination.currentPage, basePath: topic.path})}`;

    return (
      <Layout>
        <Helmet>
          <title>{topic.title}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:url" content={shareUrl} />
        </Helmet>
        <Header>
          <HeaderContent>
            <HeaderContentMain>
              <SectionPageHeader
                color={section.color}
                icon={section.icon}
                label="Topic"
                title={topic.title}
                description={topic.description}
              />
            </HeaderContentMain>
            <HeaderContentSecondary>
              <div style={{borderBottom: `1px solid ${rgba(neutral.highest,.3)}`, paddingBottom: '1.25rem'}}>
                <Counter
                  count={pagination.totalCount}
                  label="total pills"
                  showsStats={false}
                />
              </div>
              <ShareBar
                color={neutral.lowest}
                link={shareUrl}
                text={metaDescription}
                title={metaTitle}
                types={[
                  'facebook',
                  'twitter',
                  'email'
                ]}
                style={{
                  marginTop: '24px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </HeaderContentSecondary>
          </HeaderContent>
        </Header>
        <Page>
          <SimplePageContent>
            <div style={{textAlign: 'left'}}>
              <VerticalSpacing size="small">
                <Button
                  label="Back to section"
                  skin="ghost"
                  onClick={this.backToSection}
                  size="S"
                />
                <Button
                  label="Switch topic"
                  skin="ghost"
                  onClick={this.openTopicsModal}
                  size="S"
                />
              </VerticalSpacing>
              <VerticalSpacing size="medium">
                <ResourcesList
                  resources={topic.resources.map(resource => resource.frontmatter)}
                  handleDetailView={this.handleDetailView}
                />
              </VerticalSpacing>
              <VerticalSpacing size="medium">
                <ResponsivePagination
                  currentPage={pagination.currentPage}
                  handleNavigateToPage={index => push(paths.getTopicPagePath({index, basePath: topic.path}))}
                  itemsPerPage={pagination.perPage}
                  itemsTotalCount={pagination.totalCount}
                  buildPagePath={index => paths.getTopicPagePath({index, basePath: topic.path})}
                />
              </VerticalSpacing>
              {
                topic.similar &&
                <VerticalSpacing size="medium">
                  <KeywordsCloud keywords={topic.similar} />
                </VerticalSpacing>
              }
            </div>
            <Modal
              handleClose={this.onClose}
              open={openTopicsModal}
            >
              <VerticalSpacing size="medium">
                <TopicsList
                  navigateTo={path => push(path)}
                  topics={Object.keys(topics).map(topicId => (topics[topicId]))}
                />
              </VerticalSpacing>
            </Modal>
          </SimplePageContent>
        </Page>
      </Layout>
    );
  }
}
export default Topic;