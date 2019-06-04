import '@app/ondrej-sika.cz/css'
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import ReactMarkdown from 'react-markdown'

let site = {
  lang: 'cs'
}

const Index = () => (
  <div>
    <MainBar MainBarHeader='Form was succesfully send'/>
    <div className="container pt-4">
    <ReactMarkdown source={`
I wiil contact you as soon as possible.

If you have any questions write me on <ondrej@ondrejsika.com>.
`}/>
    <div style={{height: '100px'}}></div>
    </div>
  </div>
)

export default Index
