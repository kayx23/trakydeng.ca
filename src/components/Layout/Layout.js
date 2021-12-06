// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string
};

const Layout = ({
  children,
  title,
  description,
  socialImage = ''
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage || author.photo;
  const metaImageUrl = url + metaImage;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />

        // Tableau
        {/* <script defer type='text/javascript'>
          var divElement1 = document.getElementById('viz1638766620433');
          var vizElement1 = divElement1.getElementsByTagName('object')[0];
          vizElement1.style.width='1169px';
          vizElement1.style.height='880px';

          var divElement2 = document.getElementById('viz1638768106686');
          var vizElement2 = divElement2.getElementsByTagName('object')[0];
          vizElement2.style.width='1400px';
          vizElement2.style.height='1060px';

          var scriptElement1 = document.createElement('script');
          scriptElement1.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
          vizElement1.parentNode.insertBefore(scriptElement1, vizElement1);

          var scriptElement2 = document.createElement('script');
          scriptElement2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
          vizElement2.parentNode.insertBefore(scriptElement2, vizElement2);
        </script> */}

      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
