import '@app/sika-kraml.de/css';
import LectureSectionLg from '@app/sika-kraml.de/components/LectureSectionLg';
import LectureInnerLg from '@app/sika-kraml.de/components/LectureInnerLg';
import LectureSectionMdSm from '@app/sika-kraml.de/components/LectureSectionMdSm';
import LectureInnerMdSm from '@app/sika-kraml.de/components/LectureInnerMdSm';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import Head from 'next/head'

let site = {
  lang: 'de'
};

{/* TODO how do we get to this page? can we delete it? */}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
};

const Index = () => (
  <div>
    <Head>
    </Head>
    <MainBar
      MainBarHeader='Nabídka Školení'
    />
    <div className='container'>
      <LectureSectionLg LectureImgHeader='Unsere Schulungen'>
        <LectureInnerLg link='/schulung/docker' title='DOCKER' image={docker_img} first={true} />
        <LectureInnerLg link='/schulung/git' title='GIT' image={git_img} />
        <LectureInnerLg link='/schulung/kubernetes' title='KUBERNETES' image={kubernetes_img} />
        <LectureInnerLg link='/schulung/ansible' title='ANSIBLE' image={ansible_img} />
        <LectureInnerLg link='/schulung/gitlab-ci' title='GITLAB-CI' image={gitlab_img} />
      </LectureSectionLg>
      <LectureSectionMdSm LectureImgHeader='Unsere Schulungen'>
        <LectureInnerMdSm link='/schulung/docker' title='DOCKER' image={docker_img} text='' />
        <LectureInnerMdSm link='/schulung/git' title='GIT' image={git_img} text='' />
        <LectureInnerMdSm link='/schulung/kubernetes' title='KUBERNETES' image={kubernetes_img} text='' />
        <LectureInnerMdSm link='/schulung/ansible' title='ANSIBLE' image={ansible_img} text='' />
        <LectureInnerMdSm link='/schulung/gitlab-ci' title='GITLAB-CI' image={gitlab_img} text='' last={true} />
      </LectureSectionMdSm>
    </div>

  </div>
);

export default Index