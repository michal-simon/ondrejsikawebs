import '@app/ondrej-sika.cz/css'

import ReactMarkdown from 'react-markdown'
import Header from '@app/ondrej-sika.cz/components/Header'
import TextArea from '@app/ondrej-sika.cz/components/TextArea';
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol';
import References from '@app/ondrej-sika.cz/components/References';
import Price from '@app/ondrej-sika.cz/components/Price';
import Form from '@app/ondrej-sika.cz/components/Form';

import Head from 'next/head'


let site = {
  lang: 'en'
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header
      websiteHeader='Docker Training'
      inquiryBtn='Ask for training'
      logo='/static/docker.svg'>
    </Header>
    <div className='container course-page'>
      <ReactMarkdown source={`
### What is Docker?
Docker can make your life easier through simplifying the process of R&D, testing, and software usage in your business. Run everything, everywhere. Don’t lose your time waiting for server setups or random library updates. Have the environment as a part of your application.

### Course Description
During the two-day workshop, you’ll be shown everything you need to know to be able to use Docker - from creating a custom container image to the Swarm utilisation. This course is very hands-on, and you will be able to practice everything you learn.

### Course outline
- Theory introduction to containers & Docker
- How to install Docker at home or work (for those who did not - do so)
- Basics of Containerisation
- Basics of Images
- Docker Compose - multi-container applications
- Deployment to Swarm
- Preview of deployment to Kubernetes

### Who Should Attend
This training course is primarily aimed at complete beginners who have either none or very little experience with Docker. Most of all, Developers and/or DevOps (Server Administrators), or those who want to use Docker in practice or want to find out more about its purpose and if it is something they can implement.`}/>
      <TwoCol
        col1={
          <ReactMarkdown source={`
#### Skill Requirements
- Basic Linux knowledge
- Basic Terminal knowledge
          `} escapeHtml={false}/>
        }
        col2={
          <ReactMarkdown source={`
#### Technical Requirements
- Have Docker installed, instructions: [here](/instructions/docker)
- Access to the internet - ideally without corporate proxy, or proxy set up in Docker
          `} escapeHtml={false}/>
        }
      />
    </div>
    <References ids={[ 'sit', 'vse']} lang={site.lang} />
    <Price
      PriceHeader='Pricing'
      PriceBtn='Asf for a training'>
      Price for two days Docker training<br/><br/>
      <ReactMarkdown source={`
Open to public (self-funded): 800 GBP excl. VAT
Open to public (company-funded): 1 000 GBP excl. VAT
On-site training (on-site): 3 000 GBP excl. VAT
`} escapeHtml={false}/>
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Ask for company training on Docker'
        TextParagraph='Fields marked with * are required.'>
        <Form
          course='Docker'
          FormName='Name *'
          FromNamePlaceholder='xx xx'
          FormCompany='Company'
          FormCompanyPlaceholder='xx'
          FormEmail='E-mail *'
          FormEmailPlaceholder='xx@xx.com'
          FormPhone='Phone *'
          FormPhonePlaceholder='+420111222333'
          FormSent='Sent'
        />
      </TextArea>
    </div>
  </div>
)

export default Index
