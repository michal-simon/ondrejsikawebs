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
      websiteHeader='Gitlab CI Training'
      inquiryBtn='Ask for a Training'
      logo='/static/gitlab-ci.svg'>
    </Header>
    <div className='container course-page'>
    <ReactMarkdown source={`
### What is CI?
Continuous Integration (abbr. CI or CI/CD) is a tool that automates routine tasks such as running tests,code quality or deployment. It allows faster adoption of changes to master and quicker deployment. The compelling advantage of Gitlab CI is its Docker support; you can easily combine Docker images or run tests in containers.

### Course Description
This course is ran in the form of a one day hands-on workshop where you will learn the importance of CI,the different versions of Gitlab CI and practice writing CI script for a sample project. The outcome will be a script for a simple project containing application build jobs, from tests to deployment.

### Course Outline
- Generic introduction to CI
- Introduction to Gitlab CI
- Installation of Gitlab CI Runner
- Work with CI Jobs
- Creation of CI Pipelines
- Deployment Automatisation
- Docker and CI

### Who Should Attend
The course is primarily aimed at developers who are using Gitlab and are wanting to start using Gitlab CI. At the same time, Gitlab CI might be the reason why people are transferring onto Gitlab. The course is also useful for DevOps who want to simplify their routine tasks with deployment automatisation.`}/>
      <TwoCol
        col1={
          <ReactMarkdown source={`
#### Skill Requirement
- Basic Linux knowledge
- Basic Terminal knowledge
- Basic Git knowledge is of benefit - [Git training](/training/git)
- Docker knowledge is of benefit - [Docker training](/training/docker)
          `} escapeHtml={false}/>
        }
        col2={
          <ReactMarkdown source={`
#### Technical Requirements
- Access to the internet - ideally without corporate proxy
          `} escapeHtml={false}/>
        }
      />
    </div>
    <References ids={['CMS', 'vse']} lang={site.lang} />
    <Price
      PriceHeader='Pricing'
      PriceBtn='Ask for a training'>
      Price for one day hands-on Git training
      <ReactMarkdown source={`
- Open to public (self-funded): 400 GBP excl. VAT
- Open to public (company-funded): 500 GBP excl. VAT
- On-site training (on-site): 1 500 GBP excl. VAT
`} escapeHtml={false}/>
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Ask for company training on Gitlabu CI'
        TextParagraph='Fields marked with * are required.'>
        <Form
          course='Gitlab CI'
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
