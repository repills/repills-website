import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {
  StaticQuery,
  graphql,
  push,
} from 'gatsby'
import {
  ProvideContainerQuery,
  TopNavigation,
} from 'repills-react-components'
import styled from 'styled-components'

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
    onClick: () => push('/reactjs/')
  },
  {
    label: 'Vue.js',
    onClick: () => push('/vuejs/')
  }
];

class Layout extends React.Component {

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

  UNSAFE_componentWillUpdate() {
    const page = document.getElementById('page');
    if (page) {
      page.scrollTo(0, 0);
    }
  }

  render() {

    const {
      children,
      // data,
    } = this.props;

    return (
      <StaticQuery
        query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              description,
              siteUrl,
            }
          }
        }
      `}
      render={data => {
        const metaData = data.site.siteMetadata;
        const currentDate = new Date();

        return (
          <>
            <Helmet
              defaultTitle={metaData.title}
              titleTemplate={`%s | Repills.com`}
            >
              <meta name="description" content={metaData.description} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:title" content={metaData.title} />
              <meta property="og:description" content={metaData.description} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={metaData.siteUrl} />
              <meta property="og:site_name" content="Repills.com" />
              <meta property="og:image" content={`${metaData.siteUrl}/images/share-facebook.jpg`} />
              <meta name="twitter:image" content={`${metaData.siteUrl}/images/share-twitter.jpg`} />
              <meta property="og:locale" content="en_EN" />
            </Helmet>
            <BaseStyle>
              <NavigationStyle>
                <NavigationWrapperStyle>
                  <TopNavigation
                    items={navItems}
                    onClickLogo={() => push('/')}
                  />
                </NavigationWrapperStyle>
              </NavigationStyle>
              <PageStyle id="page">
                <PageWrapperStyle>
                  { children }
                  <FooterStyle>
                    <div>Repills ©{currentDate.getFullYear()} - Free pills to get more skills!</div>
                    <div style={{ marginTop: '0.25rem' }}>
                      Repills is a discovery place for web developers where they stay up to date with the latest trends through well-organized high-quality resources.
                    </div>
                  </FooterStyle>
                </PageWrapperStyle>
              </PageStyle>
            </BaseStyle>
          </>
        )
      }}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProvideContainerQuery(Layout)
