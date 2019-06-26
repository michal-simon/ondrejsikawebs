import '@app/sika-kraml.de/css';
import Header from '@app/ondrej-sika.cz/components/Header';
import UpcomingSessions from '@app/ondrej-sika.cz/components/UpcomingSessions';
import Head from 'next/head';

let site = {
  lang: 'de'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header websiteHeader='Public training - terms'/>
    <div className='container'>
      <UpcomingSessions lang={site.lang} />
    </div>
  </div>
)

export default Index
