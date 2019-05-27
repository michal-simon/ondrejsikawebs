import '../css'

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
      MainBarHeader='IT Školení, konzultace a workshopy'
      MainBarText='Zlepšuji práci vývojářských týmu zaváděním efektivních procesu ve vývoji a použitím prověřených nástrojů a technologií, které vedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software.'>
    </MainBar>
    <StatisticBar
    NumberOfPeople='666'
    NumberOfPeopleHeader='Počet odškolených'
    NumberOfCompanies='44'
    NumberOfCompaniesHeader='Počet firem ve spolupráci'
    NumberOfLectures='55'
    NumberOfLecturesHeader='Počet uskutečněných školení'
    />

    <div className="container">
      <LectureImgMdLg
        LectureImgHeader='Kurzy co školím'/>
      <LectureImgSm
      LectureImgHeader='Kurzy co školím'/>
      <TextWithImg
        TextWithImgHeader='O mně'>
        Jmenuji se Ondřej, vývojem softwaru se zabývam od roku 2009 a od roku 2013 predavam sve zkusenosti na školích. Pracoval jsem pro male firmy, startupy i velke korporace s cilem zefektivnit jim proces vyvoje, testovani a nasazovani software.
        <br/><br/>
        <h4>Skoleni</h4>
        Predne se venuji skoleni, všechny kurzy jsou formou workshopu (hands-on) a stavím je na svých dlouholetých znalostech a zkušenostech z vývoje, testovaní a provozování softwarových projektů.
        <br/><br/>
        Nástroje jako <a href='/git'>Git</a>, <a href='/docker'>Docker</a>, <a href='/kubernetes'>Kubernetes</a>, <a href='/ansible'>Ansible</a> nebo <a href='/gitlab-ci'>CI</a> používám na denní bázi, vše co školím jsem použil v reálných projektech a mám s technologií osobní zkušenost.
        <br/><br/>
        Všechny kurzy a školení dělám v českém nebo anglickém jazyce.
      </TextWithImg>
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
