import Document, { Html, Head, Main, NextScript } from 'next/document';
import Gauges from '@app/common/components/Gauges';
import GoogleAnalytics from '@app/common/components/GoogleAnalytics';
import Navbar from '@app/ondrej-sika.cz/components/Navbar';
import Footer from '@app/ondrej-sika.cz/components/Footer';
import BootstrapJS from '@app/common/components/BootstrapJS';
import linkedin from '@app/data/pictures/social-networks/linkedin-hex.svg';
import twitter from '@app/data/pictures/social-networks/twitter-hex.svg';
import github from '@app/data/pictures/social-networks/github-hex.svg';
import instagram from '@app/data/pictures/social-networks/instagram-hex.svg';
import facebook from '@app/data/pictures/social-networks/fb-hex.svg';
import mail from '@app/data/pictures/social-networks/mail-hex.svg';
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
  constructor(...args){
    super(...args)
    this.site = site
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
            NavName='Ondřej Šika'
            NavUnderheader='Software {Engineer, Konzultant, Lektor}'
            links={[
              ['DOMŮ', '/'],
              ['KURZY', [
                ['GIT', '/skoleni/git'],
                ['GITLAB CI', '/skoleni/gitlab-ci'],
                ['DOCKER', '/skoleni/docker'],
                ['KUBERNETES', '/skoleni/kubernetes'],
                ['ANSIBLE', '/skoleni/ansible'],
              ]],
              ['TERMÍNY', '/verejne-terminy'],
              ['BLOG', '/blog'],
              ['NÁVODY', '/navody'],
              ['KONTAKT', '/kontakt'],
            ]}
          />
          <div className='content'>
          <Main />
          </div>
          <Footer
            col1_name='Ondřej Šika'
            col1_mail='ondrej@ondrejsika.com'
            col1_phone='+420 773 452 376'

            col4_NewsHeader='Zajímají Vás novinky?'
            col4_NewsText='Odebírejte můj newsletter a budete v obraze!'
            NewsletterBtn='Odebírat'

            lecture_links = {[
              ['GIT', '/skoleni/git'],
              ['GITLAB CI', '/skoleni/gitlab-ci'],
              ['DOCKER', '/skoleni/docker'],
              ['KUBERNETES', '/skoleni/kubernetes'],
              ['ANSIBLE', '/skoleni/ansible'],
            ]}
            mailImg={mail}
            facebookImg={facebook}
            instagramImg={instagram}
            twitterImg={twitter}
            githubImg={github}
            linkedinImg={linkedin}
          ></Footer>
          <NextScript />
          <BootstrapJS />
          <Gauges gauges_site_id={this.site.gauges_site_id} />
          <GoogleAnalytics google_analytics_site_id={this.site.google_analytics_site_id} />
        </body>
      </Html>
    );
  }
}

export default OndrejSikaDocument
