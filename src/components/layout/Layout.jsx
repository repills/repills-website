import React from 'react'
import {Layout} from 'antd'
import {ThemeProvider} from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import Helmet from 'react-helmet'

import theme from '../../theme'
import Navigation from '../navigation/Navigation'
import Divider from '../divider/Divider'

import * as styles from './Layout.style'
import GlobalStyle from './global.style'


class BaseLayout extends React.Component {
  render () {
    const {
      children,
      wrapperMaxWidth,
    } = this.props

    // @TODO: create layout wrapper component
    const WrapperElement = props => (
      <div
        css={styles.wrapper}
        width={props.wrapperMaxWidth || wrapperMaxWidth}
      >
        {props.children}
      </div>
    )

    return (
      <ThemeProvider theme={theme}>
        <StaticQuery
          query={graphql`
            query SiteInfoQuery {
              site {
                siteMetadata {
                  name
                  title
                  description
                  siteUrl
                  author
                }
              }
            }
          `}
          render={({ site }) => (
            <div css={styles.base}>
              <Helmet
                defaultTitle={site.siteMetadata.title}
                titleTemplate={`%s | reactfeed.com`}
              >
                <meta name="description" content={site.siteMetadata.description} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:title" content={site.siteMetadata.title} />
                <meta property="og:description" content={site.siteMetadata.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={site.siteMetadata.siteUrl} />
                <meta property="og:site_name" content="reactfeed.com" />
                <meta property="og:image" content={`${site.siteMetadata.siteUrl}/images/share-facebook.jpg`} />
                <meta name="twitter:image" content={`${site.siteMetadata.siteUrl}/images/share-twitter.jpg`} />
                <meta property="og:locale" content="en_EN" />
              </Helmet>
              <header css={styles.header}>
                <WrapperElement>
                  <Navigation />
                </WrapperElement>
              </header>
              <Layout.Content>
                {children({ WrapperElement })}
              </Layout.Content>
              <Divider />
              <footer css={styles.footer}>
                <WrapperElement>
                  <div>
                    {site.siteMetadata.name} © {new Date().getFullYear()} - Free React.js resources. Created by {site.siteMetadata.author}.
                  </div>
                </WrapperElement>
              </footer>
              <GlobalStyle />
            </div>
          )}
        />
      </ThemeProvider>
    )
  }
}

export default BaseLayout;
