import '@app/sika-kraml.de/css';
import ReactMarkdown from '@app/common/components/StyledReactMarkdown';
import LectureInnerLg from '@app/sika-kraml.de/components/LectureInnerLg';
import LectureSectionLg from '@app/sika-kraml.de/components/LectureSectionLg';
import MainBar from '@app/sika-kraml.de/components/MainBar';
import TextWithImg from '@app/sika-kraml.de/components/TextWithImg';
// import IntroBar from '@app/sika-kraml.de/components/IntroBar';
// import CompaniesBar from '@app/ondrej-sika.cz/components/CompaniesBar';
// import CompaniesBar1 from '@app/ondrej-sika.cz/static/webglobe-yegon-sq.png';
import site from '@app/ondrej-sika.cz/config';
import Head from 'next/head';
import docker_img from '@app/sika-kraml.de/static/docker.svg';
import git_img from '@app/sika-kraml.de/static/git.svg';
import kubernetes_img from '@app/sika-kraml.de/static/kubernetes.svg';
import gitlab_img from '@app/sika-kraml.de/static/gitlab-ci.svg';
import ansible_img from '@app/sika-kraml.de/static/ansible.svg';
// import LectureSectionMdSm from '@app/sika-kraml.de/components/LectureSectionMdSm';
// import LectureInnerMdSm from '@app/sika-kraml.de/components/LectureInnerMdSm';

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

var white = {
  color: 'white',
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <MainBar
      MainBarHeader='IT Schulungen, Workshops und Consultation'
      MainBarText='We provide training & consulting in DevOps field. Were professionals focused on improvements in your software development & operations. Helping you boost your productivity & efficiency and also cut your dev & ops budgets.'
    >
    </MainBar>
    <div className="container">
      <LectureSectionLg
      LectureImgHeader='Unsere Schulungen'>
        <LectureInnerLg link="/schulung/docker" title="DOCKER" image={docker_img} first={true}/>
        <LectureInnerLg link="/schulung/git" title="GIT" image={git_img} />
        <LectureInnerLg link="/schulung/kubernetes" title="KUBERNETES" image={kubernetes_img} />
        <LectureInnerLg link="/schulung/ansible" title="ANSIBLE" image={ansible_img} />
        <LectureInnerLg link="/schulung/gitlab-ci" title="GITLAB-CI" image={gitlab_img} />
      </LectureSectionLg>
      {/* <LectureSectionMdSm
      LectureImgHeader='Unsere Schulungen'>
        <LectureInnerMdSm link="/schulung/docker" title="DOCKER" image={docker_img} text=''/>
        <LectureInnerMdSm link="/schulung/git" title="GIT" image={git_img} text=''/>
        <LectureInnerMdSm link="/schulung/kubernetes" title="KUBERNETES" image={kubernetes_img} text=''/>
        <LectureInnerMdSm link="/schulung/ansible" title="ANSIBLE" image={ansible_img} text=''/>
        <LectureInnerMdSm link="/schulung/gitlab-ci" title="GITLAB-CI" image={gitlab_img} text='' last={true}/>
      </LectureSectionMdSm> */}
      <TextWithImg
        TextWithImgHeader='About us'>

        POTŘEBA NAPSAT TEXT O NÁS A O SKOLENI (uveden jen priklad od Ondry)<br/><br/>

        My name is Ondrej, I am a software engineer and DevOps consultant, architect & lecturer. I lead mostly Docker courses and CI; they are both closely interrelated. I have worked for small companies,startups to big corporations. I have four years of experience with schulung.
        <br/><br/>
        <h4>Schulung</h4>
        All courses are perform as workshops (hands-on). They are build on my long-term knowledge and experience in developing, testing and running software projects.
        <br/><br/>
        <br/>
      </TextWithImg>
    </div>
  </div>

)

export default Index
