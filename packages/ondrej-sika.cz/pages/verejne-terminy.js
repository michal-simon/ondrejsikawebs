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

const Index = () => (
  <div>
    <Head>
    </Head>
    <MainBar
      MainBarHeader='Veřejné termíny'
      MainBarText='Zlepšuji práci vývojářských týmu zaváděním efektivních procesu ve vývoji a použitím prověřených nástrojů a technologií, které vedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software.'>
    </MainBar>

    <div className="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" className='col-main'>NÁZEV ŠKOLENÍ</th>
          <th scope="col" className='col-min'>MÍSTO</th>
          <th scope="col" className='col-min'>DATUM</th>
          <th scope="col" className='col-min'>CENA</th>
          <th scope="col" className='col-min'>DÉLKA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th scope="row">Git</th>
          <td>Praha</td>
          <td>1.1.2019</td>
          <td>10000kc</td>
          <td>1 den</td>
        </tr>
        <tr>
        <th scope="row">Docker</th>
          <td>Reikjavik</td>
          <td>1.1.2019</td>
          <td>10000kc</td>
          <td>2 dny</td>
        </tr>
        <tr>
        <th scope="row">Gitlab CI</th>
          <td>Praha</td>
          <td>1.1.2019</td>
          <td>10000kc</td>
          <td>1 den</td>
        </tr>
      </tbody>
    </table>
      <CompaniesBar
        CompaniesBarHeader='Firmy se kterými spolupracuji'
        CompaniesBar1='../static/webglobe-yegon-sq.png'
        CompaniesBar2='../static/eltodo-sq.png'
        CompaniesBar3='../static/eon-sq.jpg'
        CompaniesBar4='../static/kb-sq.jpg'
        CompaniesBar5='../static/dimension-data-sq.png'
        CompaniesBar6='../static/aaa-auto-sq.png'
      ></CompaniesBar>
    </div>

  </div>
)

export default Index
