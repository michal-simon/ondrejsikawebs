import Document, { Html, Head, Main, NextScript } from 'next/document';
import ReactMarkdown from 'react-markdown'
import Header from '@app/ondrej-sika.cz/components/Header'
import TextArea from '@app/ondrej-sika.cz/components/TextArea';
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol';
import References from '@app/ondrej-sika.cz/components/References';

import Navbar from '@app/ondrej-sika.cz/components/Navbar';
import Footer from '@app/ondrej-sika.cz/components/Footer';
import BootstrapJS from '@app/common/components/BootstrapJS';

class OndrejSikaDocument extends Document {
  // static async getInitialProps(ctx) {
  //    nst initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans|Merriweather" rel="stylesheet"/>
        </Head>
        <body>
          <Navbar
            NavName='Ondřej Šika'
            NavUnderheader='Software {Engineer, Konzultant, Lektor}'
            Home='DOMŮ'
            Lecturing='NABÍDKA ŠKOLENÍ'
            PublicTerms='VEŘEJNÉ TERMÍNY'
            Contacts='KONTAKT'
            >
          </Navbar>
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
          ></Footer>
          <NextScript />
          <BootstrapJS />
        </body>
      </Html>
    );
  }
}

export default OndrejSikaDocument
