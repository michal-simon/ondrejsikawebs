import '@app/ondrej-sika.cz/css'
import LectureInnerLg from '@app/ondrej-sika.cz/components/LectureInnerLg';
import LectureOuterLg from '@app/ondrej-sika.cz/components/LectureOuterLg';
import LectureImgSm from '@app/ondrej-sika.cz/components/LectureImgSm';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import TextWithImg from '@app/ondrej-sika.cz/components/TextWithImg';
import StatisticBar from '@app/ondrej-sika.cz/components/StatisticBar';
import CompaniesBar from '@app/ondrej-sika.cz/components/CompaniesBar';
import docker from '@app/data/pictures/courses/docker-w.svg';
import git from '@app/data/pictures/courses/git-w.svg';
import kubernetes from '@app/data/pictures/courses/kubernetes.svg';
import gitlab from '@app/data/pictures/courses/gitlab-ci.svg';
import ansible from '@app/data/pictures/courses/ansible-w.svg';
import Head from 'next/head'
import webglobeYegon from '@app/data/pictures/companies/webglobe-yegon-sq.png';
import eltodo from '@app/data/pictures/companies/eltodo-sq.png';
import eon from '@app/data/pictures/companies/eon-sq.jpg';
import kb from '@app/data/pictures/companies/kb-sq.jpg';
import dimensionData from '@app/data/pictures/companies/dimension-data-sq.png';
import aaaAuto from '@app/data/pictures/companies/aaa-auto-sq.png';
import linkedin from '@app/data/pictures/social-networks/linkedin-hex.svg';
import twitter from '@app/data/pictures/social-networks/twitter-hex.svg';
import github from '@app/data/pictures/social-networks/github-hex.svg';
import instagram from '@app/data/pictures/social-networks/instagram-hex.svg';
import facebook from '@app/data/pictures/social-networks/fb-hex.svg';
import mail from '@app/data/pictures/social-networks/mail-hex.svg';
import ond from '@app/data/pictures/ond.jpg';

let site = {
  lang: 'cs'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}
var dockerBackground = 'blue'
var gitBackground = '#EA4F33'
var kubernetesBackground = '#52ABE3'
var gitlabBackground = '#6F3BBC'
var ansibleBackground = '#2c2c2a'
const Index = () => (
  <div>
    <Head>
      <title>Ondrej Sika - IT Školení, konzultace a workshopy</title>
    </Head>
    <MainBar
      MainBarHeader='IT & DevOps školení, konzultace a workshopy'
      MainBarText='Zlepšuji práci vývojářských týmu zaváděním efektivních procesu ve vývoji a použitím prověřených nástrojů a technologií, které vedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software.'>
    </MainBar>
    <StatisticBar
    NumberOfPeople='500+'
    NumberOfPeopleHeader='Počet odškolených lidí'
    NumberOfCompanies='70+'
    NumberOfCompaniesHeader='Počet firem ve spolupráci'
    NumberOfLectures='100+'
    NumberOfLecturesHeader='Počet uskutečněných školení'
    />

    <div className='container'>
      <LectureOuterLg LectureImgHeader='Kurzy co školím'>
        <LectureInnerLg link='/schulung/docker' title='DOCKER' background={dockerBackground} image={docker}/>
        <LectureInnerLg link='/schulung/git' title='GIT' background={gitBackground} image={git} />
        <LectureInnerLg link='/schulung/kubernetes' title='KUBERNETES' background={kubernetesBackground} image={kubernetes} />
        <LectureInnerLg link='/schulung/ansible' title='ANSIBLE' background={ansibleBackground} image={ansible} />
        <LectureInnerLg link='/schulung/gitlab-ci' title='GITLAB-CI' background={gitlabBackground} image={gitlab} />
      </LectureOuterLg>
      <LectureImgSm
      LectureImgHeader='Kurzy co školím'/>
      <TextWithImg
        TextWithImgHeader='O mně'
        img={ond}
        linkedin={linkedin}
        mail={mail}
        github={github}
        instagram={instagram}
        twitter={twitter}
        facebook={facebook}
        >
        Jmenuji se Ondřej, vývojem softwaru se zabývám od roku 2009 a od roku 2013 předávám své zkušenosti na školích. Pracoval jsem pro malé firmy, startupy i velké korporace s cílem zefektivnit jim proces vývoje, testování a nasazování software.
        <br/><br/>
        <h4>Školení</h4>
        Předně se věnuji školení, všechny kurzy jsou formou workshopů (hands-on) a stavím je na svých dlouholetých znalostech a zkušenostech z vývoje, testování a provozování softwarových projektů.
        <br/><br/>
        Nástroje jako <a href='/skoleni/git'>Git</a>, <a href='/skoleni/docker'>Docker</a>, <a href='/skoleni/kubernetes'>Kubernetes</a>, <a href='/skoleni/ansible'>Ansible</a> nebo <a href='/skoleni/gitlab-ci'>CI</a> používám na denní bázi, vše co školím jsem použil v reálných projektech a mám s technologií osobní zkušenost.
        <br/><br/>
        Všechny kurzy a školení dělám v českém nebo anglickém jazyce.
      </TextWithImg>
      <CompaniesBar
        CompaniesBarHeader='Firmy se kterými spolupracuji'
        CompaniesBar1={webglobeYegon}
        CompaniesBar2={eltodo}
        CompaniesBar3={eon}
        CompaniesBar4={kb}
        CompaniesBar5={dimensionData}
        CompaniesBar6={aaaAuto}
      ></CompaniesBar>
    </div>

  </div>
)

export default Index
