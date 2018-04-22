import React from 'react';
import {
  TopNavigation,
  Spinner,
  Newsletter
} from 'repills-react-components';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';

import {
  base,
  navigation,
  page,
  pageWrapper,
  footer,
  navigationWrapper,
  newsletter,
  newsletterWrapper
} from './style';

const BaseStyle = styled.div`${base}`;
const NavigationStyle = styled.div`${navigation}`;
const PageStyle = styled.div`${page}`;
const NavigationWrapperStyle = styled.div`${navigationWrapper}`;
const PageWrapperStyle = styled.div`${pageWrapper}`;
const FooterStyle = styled.footer`${footer}`;
const NewsletterStyle = styled.div`${newsletter}`;
const NewsletterWrapperStyle = styled.div`${newsletterWrapper}`;

export default class Template extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 300);
  }

  componentWillUpdate() {
    const page = document.getElementById('page');
    if(page) {
      page.scrollTo(0, 0);
    }
  }

  // Twitter card (fallback to og facebook https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)

  render() {
    const { children } = this.props;
    const { loading } = this.state;

    const title = "REPILLS | Free pills to get more skills";
    const description = "Repills.com is the place to learn about web development and design through well-organized high-quality resources. You can discover articles, tutorials, courses, tools, books about React.js, Serverless, Redux, Vue.js";

    return (
      <BaseStyle>
        <Helmet
          defaultTitle={title}
          titleTemplate={`%s | Repills.com`}
        >
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://repills.com" />
          <meta property="og:site_name" content="Repills.com" />
          <meta property="og:image" content="https://repills.com/images/share-facebook.jpg" />
          <meta name="twitter:image" content="https://repills.com/images/share-twitter.jpg" />
          <meta property="og:locale" content="en_EN" />
        </Helmet>
        { loading && <Spinner position="fixed" />}
        <BaseStyle>
          <NavigationStyle>
            <NavigationWrapperStyle>
              <TopNavigation onClickLogo={() => navigateTo('/')} />
            </NavigationWrapperStyle>
          </NavigationStyle>
          <PageStyle id="page">
            <PageWrapperStyle>
              {children()}
              <NewsletterStyle>
                <NewsletterWrapperStyle>
                  <Newsletter
                    intro={`Repills is brought to you by the same authors of <a href="http://fullstackbulletin.com/" target="_blank">Fullstack Bulletin</a>, the weekly newsletter that aims to keep aspiring and experienced full stack developers up to date.`}
                    label="Subscribe now to the weekly email."
                    note="You will receive the <strong>best 7 links</strong> in your inbox every week, for free! No spam, ever :)"
                  />
                </NewsletterWrapperStyle>
              </NewsletterStyle>
              <FooterStyle>
                Repills.com - Made with passion and a bit of automation.
              </FooterStyle>
            </PageWrapperStyle>
          </PageStyle>
        </BaseStyle>
      </BaseStyle>
    );
  }
}
