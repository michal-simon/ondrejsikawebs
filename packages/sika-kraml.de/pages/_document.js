import Document, { Html, Head, Main, NextScript } from 'next/document';
import ReactMarkdown from 'react-markdown';
import Gauges from '@app/common/components/Gauges';
import GoogleAnalytics from '@app/common/components/GoogleAnalytics';
import Navbar from '@app/sika-kraml.de/components/Navbar';
import Footer from '@app/sika-kraml.de/components/Footer';
import BootstrapJS from '@app/common/components/BootstrapJS';

import site from '../config';

let DevelopmentBar = ()=> {
  if (process.env.NODE_ENV == 'development') {
    return (
      <div style={{
        backgroundColor: 'red',
        height: '0.2em'
      }}>
      </div>
    )
  }
  else {
    return <></>
  }
}

class OndrejSikaDocument extends Document {
  static getInitialProps(ctx) {
    return {site: site};
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans|Merriweather" rel="stylesheet"/>
        </Head>
        <body>
          <DevelopmentBar />
          <Navbar
            NavName='SIKA KRAML'
            NavUnderheader=''
            links={[
              ['HOME', '/'],
              ['SCHULUNG', [
                ['GIT', '/schulung/git'],
                ['GITLAB CI', '/schulung/gitlab-ci'],
                ['DOCKER', '/schulung/docker'],
                ['KUBERNETES', '/schulung/kubernetes'],
                ['ANSIBLE', '/schulung/ansible'],
              ]],
              ['BEDINGUNGEN', '/terms'],
              ['KONTAKT', '/contact'],
            ]}
          />
          <div className='content'>
            <Main />
          </div>
          <Footer
            col4_NewsHeader='Subscribe for a Newsletter?'
            col4_NewsText="Ja Ja!"
            NewsletterBtn='Subscribe'
            lecture_links={[
              ['Docker','/schulung/docker'],
              ['Git','/schulung/git'],
              ['Kubernetes','/schulung/kubernetes'],
              ['Gitlab-CI','/schulung/gitlab-ci'],
              ['Ansible','/schulung/ansible'],
            ]}
            job_links={[
            ]}
          />
          <NextScript />
          <BootstrapJS />
          <Gauges gauges_site_id={this.props.site.gauges_site_id} />
          <GoogleAnalytics google_analytics_site_id={this.props.site.google_analytics_site_id} />
        </body>
      </Html>
    );
  }
}

export default OndrejSikaDocument
