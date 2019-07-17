import '@app/ondrej-sika.cz/css';
import LectureOuterLg from '@app/ondrej-sika.cz/components/LectureOuterLg';
import LectureInnerLg from '@app/ondrej-sika.cz/components/LectureInnerLg';
import LectureImgSm from '@app/ondrej-sika.cz/components/LectureImgSm';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import Head from 'next/head';

import docker from '@app/data/pictures/courses/docker-w.svg';
import git from '@app/data/pictures/courses/git-w.svg';
import kubernetes from '@app/data/pictures/courses/kubernetes.svg';
import gitlab from '@app/data/pictures/courses/gitlab-ci.svg';
import ansible from '@app/data/pictures/courses/ansible-w.svg';

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
      <title>Školení - Ondřej Šika</title>
    </Head>
    <MainBar
      MainBarHeader='Nabídka Školení'
    />
    <div className="container">
      <LectureOuterLg LectureImgHeader='Kurzy co školím'>
        <LectureInnerLg link='/schulung/docker' title='DOCKER' background={dockerBackground} image={docker} />
        <LectureInnerLg link='/schulung/git' title='GIT' background={gitBackground} image={git} />
        <LectureInnerLg link='/schulung/kubernetes' title='KUBERNETES' background={kubernetesBackground} image={kubernetes} />
        <LectureInnerLg link='/schulung/ansible' title='ANSIBLE' background={ansibleBackground} image={ansible} />
        <LectureInnerLg link='/schulung/gitlab-ci' title='GITLAB-CI' background={gitlabBackground} image={gitlab} />
      </LectureOuterLg>
      <LectureImgSm
        LectureImgHeader='Kurzy co školím' />
    </div>

  </div>
)

export default Index
