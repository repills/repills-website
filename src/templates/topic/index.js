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
  VerticalSpacing
} from 'repills-react-components';
import { navigateTo } from 'gatsby-link';
import { sections } from 'repills-config';

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

  onClose = () => this.setState({ openTopicsModal: false });

  handleNavigateToSection = sectionId => {
    const section = this.props.pathContext.sections[sectionId];
    navigateTo(section.path);
  };

  // TODO: navigations for topics
  handleNavigateToTopic = topicId => alert('Navigate to topic: ' + topicId);

  backToSection = () => navigateTo('/'+this.props.pathContext.sectionId);

  render() {


    const {
      pathContext,
      transition
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

    const section = sections.find(s => s.id === sectionId);
    // const suggestedTopics = Object.entries(sections.topics);

    const metaTitle = `${section.name}: ${topic.title} | Learn pill by pill and acquire more skills!`;
    const metaDescription = `Free resources about '${topic.title}' and other hot topics in '${section.name}'. Discover everyday what's new in the web development and UI design.`;
    const shareUrl = `https://repills.com${topic.path}`;

    return (
      <div style={transition && transition.style}>
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
                  navigateToSection={this.handleNavigateToSection}
                  navigateToTopic={this.handleNavigateToTopic}
                />
              </VerticalSpacing>
              <VerticalSpacing size="medium">
                <ResponsivePagination
                  currentPage={pagination.currentPage}
                  handleNavigateToPage={page => navigateTo(`${topic.path}/${page}`)}
                  itemsPerPage={pagination.perPage}
                  itemsTotalCount={pagination.totalCount}
                />
              </VerticalSpacing>
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