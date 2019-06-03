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
      MainBarHeader='IT Training, consultation and workshops'
      MainBarText='Zlepšuji práci vývojářských týmu zaváděním efektivních procesu ve vývoji a použitím prověřených nástrojů a technologií, které vedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software.'>
    </MainBar>
    <StatisticBar
    NumberOfPeople='500+'
    NumberOfPeopleHeader='Number of trainees'
    NumberOfCompanies='70+'
    NumberOfCompaniesHeader='Number of companies in cooperation'
    NumberOfLectures='100+'
    NumberOfLecturesHeader='Number of training sessions'
    />

    <div className="container">
      <LectureImgMdLg
        LectureImgHeader='My lectures'/>
      <LectureImgSm
      LectureImgHeader='My lectures'/>
      <TextWithImg
        TextWithImgHeader='About me'>
        My name is Ondrej, I am a software engineer and DevOps consultant, architect & lecturer. I lead mostly Docker courses and CI; they are both closely interrelated. I have worked for small companies, startups to big corporations. I have four years of experience with training.
        <br/><br/>
        <h4>Training</h4>
        All courses are perform as workshops (hands-on). They are build on my long-term knowledge and experience in developing, testing and running software projects.
        <br/><br/>
        Nástroje jako <a href='/git'>Git</a>, <a href='/docker'>Docker</a>, <a href='/kubernetes'>Kubernetes</a>, <a href='/ansible'>Ansible</a> nebo <a href='/gitlab-ci'>CI</a> používám na denní bázi, vše co školím jsem použil v reálných projektech a mám s technologií osobní zkušenost.
        <br/>
      </TextWithImg>
      <CompaniesBar
        CompaniesBarHeader='Companies I cooperate with'
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
