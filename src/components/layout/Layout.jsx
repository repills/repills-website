import React from 'react'
import {Layout} from 'antd'
import {ThemeProvider} from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import SEO from '../HelmetSEO'

import theme from '../../theme'
import Navigation from '../navigation/Navigation'
import Divider from '../divider/Divider'

import * as styles from './Layout.style'
import GlobalStyle from './global.style'
import Logo from '../logo/Logo'


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
              <SEO
                title="Feed"
                path="/"
              />
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
                  <div css={styles.logoFooter}>
                    <Logo />
                  </div>
                  <div>
                    ©2018-{new Date().getFullYear()} • Free React.js resources. Created by {site.siteMetadata.author}
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
