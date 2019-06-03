import '@app/ondrej-sika.cz/css'

import ReactMarkdown from 'react-markdown'
import Header from '@app/ondrej-sika.cz/components/Header'
import TextArea from '@app/ondrej-sika.cz/components/TextArea'
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol'
import References from '@app/ondrej-sika.cz/components/References'
import Price from '@app/ondrej-sika.cz/components/Price'
import Form from '@app/ondrej-sika.cz/components/Form'

import Head from 'next/head'


let site = {
  lang: 'en'
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header
      websiteHeader='Kubernetes Training'
      inquiryBtn='Ask for training'
      logo='/static/kubernetes.png'>
    </Header>
    <div className='container course-page'>
    <ReactMarkdown source={`
### What is Kubernetes?
Kubernetes is one of the most used platforms for running your Docker containers and it is supported by key market leaders (Google, Amazon, Microsoft, etc.) via Cloud Native Computing Foundation. Kubernetes is being used by businesses of all scales, from startups to corporations.

### Course Description
This course is ran in the form of a two-day hands-on workshop where you will be able to practice everything you learn. You will be shown how to run Kubernetes locally (for development) and on a cloud platform, Digital Ocean. You will also find out the basic structure of Kubernetes, including its components. You will learn how to create a Kubernetes Manifest and setup application in Docker. Also, you will be shown how to work with permissions and how to use (and create) packages in Helm.

### Course Outline
- Theory introduction to Kubernetes
- How to install locally (minikube and kubectl)
- Description of Kubernetes components
- Deployment to Kubernetes
- Working with permissions in the Kubernetes cluster
- Theory introduction to Helm packages
- Installation/Deployment using Helm
- Creating a custom Helm package

#### Who Should Attend
This course is primarily aimed at people (developers & DevOps), who want to maintain their applications in Kubernetes.`}/>
      <TwoCol
        col1={
          <ReactMarkdown source={`
#### Skill Requirements
- Basic Docker knowledge
- Basic Linux knowledge
- Basic Terminal knowledge
          `} escapeHtml={false}/>
        }
        col2={
          <ReactMarkdown source={`
#### Technical Requirements
- Have Kubernetes installed & running, instruction here
- Access to the internet - ideally without corporate proxy
          `} escapeHtml={false}/>
        }
      />
    </div>
    <References ids={[ 'oxy', 'oxyCTO']} lang={site.lang} />
    <Price
      PriceHeader='Pricing'
      PriceBtn='Ask for training'>
      Price for the two-day Kubernetes training
      <ReactMarkdown source={`
- Open to public (self-funded): 800 GBP excl. VAT
- Open to public (company-funded): 1 000 GBP excl. VAT
- On-site training (on-site): 3 000 GBP excl. VAT
`} escapeHtml={false}/>
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Ask for company training of Kubernetes'
        TextParagraph='Fields marked with * are required.'>
        <Form
          course='Kubernetes'
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
