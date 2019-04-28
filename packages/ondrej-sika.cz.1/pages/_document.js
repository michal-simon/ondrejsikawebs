import Document, { Html, Head, Main, NextScript } from 'next/document';
import ReactMarkdown from 'react-markdown'
import Header from '@app/ondrej-sika.cz/components/Header'
import TextArea from '@app/ondrej-sika.cz/components/TextArea';
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol';
import References from '@app/ondrej-sika.cz/components/References';

import Navbar from '@app/ondrej-sika.cz/components/Navbar';
import Footer from '@app/ondrej-sika.cz/components/Footer';

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
            NavUnderheader='Software {Engineetr, Konzultant, Lektor}'
            Home='DOMŮ'
            Lecturing='NABÍDKA ŠKOLENÍ'
            PublicTerms='VEŘEJNÉ TERMÍNY'
            Reference='REFERENCE'
            Contacts='KONTAKT'
            >
          </Navbar>
          <div className='content'>
          <Main />
          </div>
          <NextScript />
          <Footer></Footer>
          
        </body>
      </Html>
    );
  }
}

export default OndrejSikaDocument
