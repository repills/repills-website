import React from 'react';
import {theme} from 'repills-react-components';

export default class HTML extends React.Component {

  render() {
    return (
      <html lang="en" prefix="og: http://ogp.me/ns#">
        <head>
          <meta charSet="utf-8" />
          <meta
            content="IE=edge"
            httpEquiv="X-UA-Compatible"
          />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,600"
            rel="stylesheet"
          />
          <link
            crossOrigin="anonymous"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />
          {this.props.headComponents}
        </head>
        <body style={style.body}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            style={style.root}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

// It's not possible use styled-components in html.js
const style = {
  html: {
    height: '100%'
  },
  body: {
    padding: 0,
    margin: 0,
    backgroundColor: theme.palettes.neutral.lowest,
    height: '100%'
  },
  root: {
    height: '100vh'
  }
};
