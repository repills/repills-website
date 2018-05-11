import React from 'react';
import {
  TopNavigation,
  Spinner
} from 'repills-react-components';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import config from '../../config';

import {
  base,
  navigation,
  page,
  pageWrapper,
  footer,
  navigationWrapper
} from './style';

const BaseStyle = styled.div`${base}`;
const NavigationStyle = styled.div`${navigation}`;
const PageStyle = styled.div`${page}`;
const NavigationWrapperStyle = styled.div`${navigationWrapper}`;
const PageWrapperStyle = styled.div`${pageWrapper}`;
const FooterStyle = styled.footer`${footer}`;

// @TODO build nav programmatically
const navItems = [
  {
    label: 'React.js',
    onClick: () => navigateTo('/reactjs/')
  },
  {
    label: 'Vue.js',
    onClick: () => navigateTo('/vuejs/')
  }
];

export default class Template extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const windowGlobal = typeof window !== 'undefined' && window;

    if (windowGlobal) {
      windowGlobal.cookieconsent.initialise({
        "palette": {
          "popup": {
            "background": "#2f2220"
          },
          "button": {
            "background": "#ffda00",
            "text": "#998300"
          }
        },
        "theme": "edgeless"
      })
    }
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

    const currentDate = new Date();

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
          <meta property="og:image" content={`${config.baseUrl}/images/share-facebook.jpg`} />
          <meta name="twitter:image" content={`${config.baseUrl}/images/share-twitter.jpg`} />
          <meta property="og:locale" content="en_EN" />
        </Helmet>
        { loading && <Spinner position="fixed" />}
        <BaseStyle>
          <NavigationStyle>
            <NavigationWrapperStyle>
              <TopNavigation
                items={navItems}
                onClickLogo={() => navigateTo('/')}
              />
            </NavigationWrapperStyle>
          </NavigationStyle>
          <PageStyle id="page">
            <PageWrapperStyle>
              {children()}
              <FooterStyle>
                <div>Repills ©{currentDate.getFullYear()} - Free pills to get more skills!</div>
                <div style={{marginTop: '0.25rem'}}>
                  Repills is a discovery place for web developers where they stay up to date with the latest trends through well-organized high-quality resources.
                </div>
              </FooterStyle>
            </PageWrapperStyle>
          </PageStyle>
        </BaseStyle>
      </BaseStyle>
    );
  }
}
