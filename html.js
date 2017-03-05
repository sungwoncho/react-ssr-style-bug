import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import ReactDOM from 'react-dom';
import content from './content';

export default class Html extends React.Component {
  render() {
    return (
      <html lang="en-us">
        <head>
        </head>
        <body>
          <div id="react-root" dangerouslySetInnerHTML={{ __html: renderToString(content) }} />
          <script src="dist.js" />
          <script dangerouslySetInnerHTML={{__html: `!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');`}} />
        </body>
      </html>
    );
  }
}
