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
  lang: 'en'
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
        LectureImgHeader='My lectures'
        LectureImgLinkDocker='/training/docker'
        LectureImgLinkDockerImg='/static/docker-w.svg'
        LectureImgLinkKubernetes='/training/kubernetes'
        LectureImgLinkKubernetes='/static/kubernetes.png'
        LectureImgLinkGit='/training/git'
        LectureImgLinkGitImg='/static/git-w.svg'
        LectureImgLinkGitlabCI='/training/gitlab-ci'
        LectureImgLinkGitlabCIImg='/static/gitlab-ci.svg'
        LectureImgLinkAnsible='/training/ansible'
        LectureImgLinkAnsibleImg='/static/ansible.png'
        />
      <LectureImgSm
      LectureImgHeader='My lectures'
      LectureImgDockerText='Docker can make your life easier through simplifying the process of R&D, testing, and software usage in your business. Run everything, everywhere. Have the environment as a part of your application.'
      LectureImgKubernetesText='Kubernetes is one of the most used platforms for running your Docker containers and it is supported by key market leaders via Cloud Native Computing Foundation.'
      LectureImgGitText='Moderni verzovaci nastroj. Dnes defakto standart a nezbytna soucat kazdeho vyvojarskeho tymu.'
      LectureImgGitlabCIText='Nástroj na automaticke testovani a automaticke nasazovani integrovane primo v Gitlabu. Testujte kazdy jednotlivi commit a nasazujte stisknutim tlacitka.'
      LectureImgAnsibleText='Ansible je nástroj na hromadnou správu konfiguraci a nasazování. Vy deklarujete vysledný stav serveru a služeb a Ansible se postará o provedení.' 
      />

      <TextWithImg
        TextWithImgHeader='About me'>
        My name is Ondrej, I am a software engineer and DevOps consultant, architect & lecturer. I lead mostly Docker courses and CI; they are both closely interrelated. I have worked for small companies, startups to big corporations. I have four years of experience with training.
        <br/><br/>
        <h4>Training</h4>
        All courses are perform as workshops (hands-on). They are build on my long-term knowledge and experience in developing, testing and running software projects.
        <br/><br/>
        Nástroje jako <a href='/training/git'>Git</a>, <a href='/training/docker'>Docker</a>, <a href='/training/kubernetes'>Kubernetes</a>, <a href='/training/ansible'>Ansible</a> nebo <a href='/training/gitlab-ci'>CI</a> používám na denní bázi, vše co školím jsem použil v reálných projektech a mám s technologií osobní zkušenost.
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
      />
    </div>
  </div>
)

export default Index
