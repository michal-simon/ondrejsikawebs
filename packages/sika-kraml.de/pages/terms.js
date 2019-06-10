import '@app/sika-kraml.de/css'

import LectureImgMdLg from '@app/ondrej-sika.cz/components/LectureImgMdLg';
import LectureImgSm from '@app/ondrej-sika.cz/components/LectureImgSm';
import Header from '@app/ondrej-sika.cz/components/Header';
import TextWithImg from '@app/ondrej-sika.cz/components/TextWithImg';
import StatisticBar from '@app/ondrej-sika.cz/components/StatisticBar';
import CompaniesBar from '@app/ondrej-sika.cz/components/CompaniesBar';
import CompaniesBar1 from '@app/ondrej-sika.cz/static/webglobe-yegon-sq.png';

import UpcomingSessions from '@app/ondrej-sika.cz/components/UpcomingSessions'


import Head from 'next/head'

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
    <div className="container">
      <UpcomingSessions lang={site.lang} />
    </div>
  </div>
)

export default Index
