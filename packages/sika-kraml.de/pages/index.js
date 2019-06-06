import '@app/ondrej-sika.cz/css'
import ReactMarkdown from 'react-markdown'
import LectureImgMdLg from '@app/sika-kraml.de/components/LectureImgMdLg';
import LectureSectionMdLg from '@app/sika-kraml.de/components/LectureSectionMdLg';
import MainBar from '@app/sika-kraml.de/components/MainBar';
import TextWithImg from '@app/sika-kraml.de/components/TextWithImg';
import IntroBar from '@app/sika-kraml.de/components/IntroBar';
import CompaniesBar from '@app/ondrej-sika.cz/components/CompaniesBar';
import CompaniesBar1 from '@app/ondrej-sika.cz/static/webglobe-yegon-sq.png';
import site from '@app/ondrej-sika.cz/config';

import Head from 'next/head'

import docker_img from '@app/ondrej-sika.cz/static/docker.svg'

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <MainBar
      MainBarHeader='IT Schulungen, Workshops und Consultation'
    />
      <IntroBar>
        <ReactMarkdown source={`
We provide training & consulting in DevOps field. We're professionals focused on improvements in your software development & operations. Helping you boost your productivity & efficiency and also cut your dev & ops budgets.
- We do super efficient workshops which boost your & your team skills in fields of DevOps.
- Every course is a hands-on workshop, you will try everything you need to know for everyday use of the technology.technogy
        `} escapeHtml={false}/>
      </IntroBar>
      <div className="container">
        <LectureSectionMdLg>
            <LectureImgMdLg link="/schulung/docker" title="DOCKER" image={docker_img} />
            <LectureImgMdLg link="/schulung/docker" title="DOCKER" image={docker_img} />
            <LectureImgMdLg link="/schulung/docker" title="DOCKER" image={docker_img} />
            <LectureImgMdLg link="/schulung/docker" title="DOCKER" image={docker_img} />
            <LectureImgMdLg link="/schulung/docker" title="DOCKER" image={docker_img} />
            <LectureImgMdLg link="/schulung/docker" title="DOCKER" image={docker_img} />
        </LectureSectionMdLg>
        <div className='pt-4'>
          <ReactMarkdown source={`
- Training
- Consulting
- Part-time contrakt
          `} escapeHtml={false}/>
        </div>
        <TextWithImg
          TextWithImgHeader='About us'>
          My name is Ondrej, I am a software engineer and DevOps consultant, architect & lecturer. I lead mostly Docker courses and CI; they are both closely interrelated. I have worked for small companies, startups to big corporations. I have four years of experience with schulung.
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
