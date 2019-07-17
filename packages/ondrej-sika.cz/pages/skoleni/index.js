import '@app/ondrej-sika.cz/css';
import LectureOuterLg from '@app/ondrej-sika.cz/components/LectureOuterLg';
import LectureImgMdLg from '@app/ondrej-sika.cz/components/LectureImgMdLg';
import LectureImgSm from '@app/ondrej-sika.cz/components/LectureImgSm';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import Head from 'next/head';

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
      {/* <LectureImgSm
        LectureImgHeader='Kurzy co školím' /> */}
    </div>

  </div>
)

export default Index
