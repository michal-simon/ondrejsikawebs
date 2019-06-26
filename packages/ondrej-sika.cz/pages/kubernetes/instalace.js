import '@app/ondrej-sika.cz/css';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

let site = {
  lang: 'cs'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

const Install = () => (
  <div>
    <Head>
      <title>Instalace Kubernetes - Ondřej Šika</title>
    </Head>
    <MainBar
      MainBarHeader='Instalace Kubernetes pro lokalni vyvoj'>
    </MainBar>

    <div className='container pt-4 pb-2'>
      <ReactMarkdown source={`
Navod mam popsany v [repozitari s kurzem](https://github.com/ondrejsika/kubernetes-training-examples#install).
`} escapeHtml={false}/>
    </div>
  </div>
)

export default Install
