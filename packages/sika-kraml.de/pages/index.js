import '@app/ondrej-sika.cz/css'
import ReactMarkdown from 'react-markdown'
import LectureImgMdLg from '@app/ondrej-sika.cz/components/LectureImgMdLg';
import LectureImgSm from '@app/ondrej-sika.cz/components/LectureImgSm';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import TextWithImg from '@app/ondrej-sika.cz/components/TextWithImg';
import StatisticBar from '@app/ondrej-sika.cz/components/StatisticBar';
import CompaniesBar from '@app/ondrej-sika.cz/components/CompaniesBar';
import CompaniesBar1 from '@app/ondrej-sika.cz/static/webglobe-yegon-sq.png';
import site from '@app/sika-kraml.de/config';

import Head from 'next/head'


let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Navigation/>
    <Header
      websiteHeader="Sika Kraml Schulungen GbR."
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-docker.cz"
      logoUrl="/static/docker-w.svg"
    >
    </MainBar>

    <div className="container">
      <p>We provide training & consulting in DevOps field. We're professionals focused on improvements in your software development & operations. Helping you boost your productivity & efficiency and also cut your dev & ops budgets.</p>

      <LectureImgMdLg
        LectureImgHeader='My lectures'
        LectureImgLinkDocker='/schulung/docker'
        LectureImgLinkDockerImg='/static/docker-w.svg'
        LectureImgLinkKubernetes='/schulung/kubernetes'
        LectureImgLinkKubernetes='/static/kubernetes.png'
        LectureImgLinkGit='/schulung/git'
        LectureImgLinkGitImg='/static/git-w.svg'
        LectureImgLinkGitlabCI='/schulung/gitlab-ci'
        LectureImgLinkGitlabCIImg='/static/gitlab-ci.svg'
        LectureImgLinkAnsible='/schulung/ansible'
        LectureImgLinkAnsibleImg='/static/ansible.png'
        />
      <LectureImgSm></LectureImgSm>
<ReactMarkdown source={`

`} escapeHtml={false}/>
    </div>
    <StatisticBar
      NumberOfPeople='Consulting'
      NumberOfCompanies='Training'
      NumberOfLectures='Workshops'
    />
    <div className='container'>
      <TextWithImg
        TextWithImgHeader='About us'>
        My name is Ondrej, I am a software engineer and DevOps consultant, architect & lecturer. I lead mostly Docker courses and CI; they are both closely interrelated. I have worked for small companies, startups to big corporations. I have four years of experience with schulung.
        <br/><br/>
        <h4>Schulung</h4>
        All courses are perform as workshops (hands-on). They are build on my long-term knowledge and experience in developing, testing and running software projects.
        <br/><br/>
        Nástroje jako <a href='/schulung/git'>Git</a>, <a href='/schulung/docker'>Docker</a>, <a href='/schulung/kubernetes'>Kubernetes</a>, <a href='/schulung/ansible'>Ansible</a> nebo <a href='/schulung/gitlab-ci'>CI</a> používám na denní bázi, vše co školím jsem použil v reálných projektech a mám s technologií osobní zkušenost.
        <br/>
      </TextWithImg>

    </div>
  </div>
)

export default Index
