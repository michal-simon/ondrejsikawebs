import '@app/sika-kraml.de/css';
import LectureImgMdLg from '@app/ondrej-sika.cz/components/LectureImgMdLg';
import LectureImgSm from '@app/ondrej-sika.cz/components/LectureImgSm';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import Head from 'next/head'

let site = {
  lang: 'de'
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
      MainBarHeader='Nabídka Školení'
    />
    <div className='container'>
      <LectureImgMdLg
        LectureImgHeader='Kurzy co školím'/>
      <LectureImgSm
      LectureImgHeader='Kurzy co školím'/>
    </div>

  </div>
)

export default Index
