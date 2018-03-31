import React from 'react';
import { TopNavigation } from 'repills-react-components';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';

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

export default class Template extends React.Component {

  componentWillUpdate() {
    const page = document.getElementById('page');
    if(page) {
      page.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <BaseStyle>
        <NavigationStyle>
          <NavigationWrapperStyle>
            <TopNavigation onClickLogo={() => navigateTo('/')} />
          </NavigationWrapperStyle>
        </NavigationStyle>
        <PageStyle id="page">
          <PageWrapperStyle>
            {children()}
            <FooterStyle>
              Repills.com - Made with passion and a bit of automation (powered by <a href="http://fullstackbulletin.com/" target="_blank">Fullstack Bulletin</a>)
            </FooterStyle>
          </PageWrapperStyle>
        </PageStyle>
      </BaseStyle>
    );
  }
}
