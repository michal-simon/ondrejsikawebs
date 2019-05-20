import '@app/ondrej-sika.cz/css'

import LectureImgMdLg from '@app/ondrej-sika.cz/components/LectureImgMdLg';
import LectureImgSm from '@app/ondrej-sika.cz/components/LectureImgSm';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import TextWithImg from '@app/ondrej-sika.cz/components/TextWithImg';
import StatisticBar from '@app/ondrej-sika.cz/components/StatisticBar';
import CompaniesBar from '@app/ondrej-sika.cz/components/CompaniesBar';
import CompaniesBar1 from '@app/ondrej-sika.cz/static/webglobe-yegon-sq.png';


import Head from 'next/head'

let site = {
  lang: 'cs'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

const BlogPost = () => (
  <div>
    <Head>
    </Head>
    <MainBar
      MainBarHeader='Mac OS vs Debian + i3'>
    </MainBar>

    <div className="container pt-4">
      <p>Chci si koupit Mac. Uz po treti jej testuji. Mam iPhone, iPad, Apple Watch, Apple TV. Dlouho si rikam, zda by pro me nebyl i MacOS. Predchozi dva pokusi byli neuspesne, na Mac se mi nepodarilo prejit. Ted to skousim po treti.<br></br>
      Chtel bych zjistit zda to pujde. Zacnu tim, proc bych na Mac presel. Nebudu ted resit cenu, ta je sice vyssi, ale jsem ochotny ji zaplatit.</p>


    </div>

  </div>
)

export default BlogPost
