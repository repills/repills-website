import React from 'react';
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([
    <link
      key={`webfontsloader-preload`}
      rel="preload"
      href="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
      as="script"
    />
  ]);
};

exports.onRenderBody = ({ setPostBodyComponents }) => {
  return setPostBodyComponents([
    <script
      key={`webfontsloader-setup`}
      dangerouslySetInnerHTML={{
        __html: `
        WebFontConfig = {
          google: {
      families: ["Poppins:400,600"]
    }
   };
   (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
   })(document);`
      }}
    />
  ]);
};