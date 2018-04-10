import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../config';

class Seo extends React.Component {
  render() {

    const {
      children,
      info,
      structuredData
    } = this.props;

    const _info = info ? info : {};

    // Prop to add new JSOLD Definition

    let schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: _info.path ? config.baseUrl + _info.path : config.baseUrl,
        name: _info.name ? _info.name : config.name,
        alternateName: _info.alternateName ? _info.alternateName : config.name,
      }
    ];

    if (structuredData) {
      schemaOrgJSONLD = [...schemaOrgJSONLD,...structuredData];
    }

    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        {children}
      </Helmet>
    )
  }
}

export default Seo;