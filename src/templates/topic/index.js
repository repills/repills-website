import React from 'react';
import Helmet from 'react-helmet';
import {
  ResourcesListWithDetail,
  ResponsivePagination,
  SectionPageHeader,
  Counter,
  Modal,
  TopicsList,
  Button,
  ShareBar,
  getResourcesStats,
  VerticalSpacing,
  KeywordsCloud
} from 'repills-react-components';
import { navigateTo } from 'gatsby-link';
import { sections } from 'repills-config';
import paths from '../../../utils/paths';
import config from '../../../config';

import {
  Header,
  HeaderContent,
  HeaderContentMain,
  HeaderContentSecondary,
  Page,
  SimplePageContent
} from '../../style/layout-columns';

class Topic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openTopicsModal: false
    };
  }

  openTopicsModal = () => this.setState({ openTopicsModal: true });

  backToSection = () => navigateTo('/'+this.props.pathContext.sectionId);

  onClose = () => this.setState({ openTopicsModal: false });

  render() {


    const {
      pathContext
    } = this.props;

    const {
      sectionId,
      pagination,
      topic,
      topics
    } = pathContext;

    const {
      openTopicsModal
    } = this.state;

    console.log(topic)

    const section = sections.find(s => s.id === sectionId);
    const metaTitle = `${section.name}: ${topic.title} | Learn pill by pill and acquire more skills!`;
    const metaDescription = topic.description ? topic.description : `Free resources about '${topic.title}' and other hot topics in '${section.name}'. Discover everyday what's new in the web development and UI design.`;
    const shareUrl = `${config.baseUrl}/${paths.getTopicPagePath({index: pagination.currentPage, basePath: topic.path})}`;

    return (
      <div>
        <Helmet>
          <title>{topic.title}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:url" content={shareUrl} />
        </Helmet>
        <Header>
          <HeaderContent style={{alignItems: 'center'}}>
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
              <div style={{borderBottom: '1px solid #e5ded7', paddingBottom: '20px'}}>
                <Counter
                  count={pagination.totalCount}
                  label="total pills"
                  stats={getResourcesStats(topic.resources, true)}
                />
              </div>
              <ShareBar
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
          <SimplePageContent style={{paddingTop: '36px'}}>
            <div style={{textAlign: 'left'}}>
              <div>
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
              </div>
              <VerticalSpacing size="medium">
                <ResourcesListWithDetail
                  resources={topic.resources.map(resource => resource.frontmatter)}
                  dateType={'createdAt'}
                  generateDetailUrl={({ slug, publishedAt }) => paths.getResourcePagePath({ slug, publishedAt })}
                  navigateToDetail={({ slug, publishedAt }) => navigateTo(paths.getResourcePagePath({ slug, publishedAt }))}
                  navigateToSection={sectionSlug => navigateTo(`/${sectionSlug}`)}
                  generateSectionUrl={sectionSlug => `/${sectionSlug}`}
                  navigateToTopic={topicPath => navigateTo(paths.getTopicPagePath({basePath: topicPath}))}
                  generateTopicUrl={topicPath => paths.getTopicPagePath({basePath: topicPath})}
                />
              </VerticalSpacing>
              <VerticalSpacing size="medium">
                <ResponsivePagination
                  currentPage={pagination.currentPage}
                  handleNavigateToPage={index => navigateTo(paths.getTopicPagePath({index, basePath: topic.path}))}
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
              <div style={{padding: '24px'}}>
                <TopicsList
                  navigateTo={path => navigateTo(path)}
                  topics={Object.keys(topics).map(topicId => (topics[topicId]))}
                />
              </div>
            </Modal>
          </SimplePageContent>
        </Page>
      </div>
    );
  }
}
export default Topic;