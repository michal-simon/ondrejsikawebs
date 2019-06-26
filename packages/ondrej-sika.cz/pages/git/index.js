import '@app/ondrej-sika.cz/css';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import ReactMarkdown from 'react-markdown';

import Head from 'next/head'

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
    <title>Git - Ondřej Šika</title>
    </Head>
    <MainBar
      MainBarHeader='Git'>
    </MainBar>

    <div className='container pt-4 pb-2'>
      <ReactMarkdown source={`
- [Instalace](/git/instalace)
- [Rebase](/git/rebase)
`} escapeHtml={false}/>
    </div>
  </div>
)

export default Install
