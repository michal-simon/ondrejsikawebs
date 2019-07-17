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
      websiteHeader='Git Training'
      inquiryBtn='Ask for a company training'
      logo='/static/git.svg'>
    </Header>
    <div className='container course-page'>
      <ReactMarkdown source={`
### What is Git?
Git is a modern versioning tool that has become an industry standard among developers. Individuals, startups and corporations use it on a daily basis. Git offers a simple simultaneous collaboration with more people on different parts of a project. You won't face the issue of disrupting each other's work or not being able to access the latest versions. The collaboration on a project can also be improved using Gitlab, a platform for the design, development and running of software projects.

### Course Description
During this one day hands-on workshop, you will find out why it is beneficial to use Git, how it works (why there are no substitutes) and best practices. You will be shown everything from the installation and basic Git setup, simple individual work in a one branch to work in a team with multiple branches using merge strategies (merge, rebase) and Gitlab. The pros and cons of both will be explained, and you can choose which one is better suited for your needs. Also, you will be shown how to get out of unexpected situations like 'I deleted everything by accident' etc.

### Course Outline
- Installation and Configuration
- New Repository
- Basic Git controls
- Work in one branch
- Work in branches - merge, rebase (strength of Git)
- Work with remote repositories
- Workflow with Gitlab
- Recovery of erased data from the repository
- Tips

### Who Should Attend
This training course is primarily aimed at developers who don't do versioning or aren't using Git. Also,for those who make use of Git for 100% (git commit, git pull, git push). You can find a use for Git when it comes to a plentitude of projects, like small websites or bigger projects. Also, the course is useful for people that don't code frequently like DevOps.`}/>
      <TwoCol
        col1={
          <ReactMarkdown source={`
#### Skill Requirements
- Basic Terminal knowledge
- Basic Git knowledge beneficial
          `} escapeHtml={false}/>
        }
        col2={
          <ReactMarkdown source={`
#### Technical Requirements
- Have Git installed
- Access to the internet (https) - ideally without corporate proxy
          `} escapeHtml={false}/>
        }
      />
    </div>
    <References ids={['vistag', 'oxyCTO']} lang={site.lang} />
    <Price
      PriceHeader='Pricing'
      PriceBtn='Ask for a training'>
      Price for one day hands-on Git training<br/><br/>
      <ReactMarkdown source={`
- Open to public (self-funded): 400 GBP excl. VAT
- Open to public (company-funded): 500 GBP excl. VAT
- On-site training (on-site): 1 500 GBP excl. VAT
`} escapeHtml={false}/>
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Ask for company training on Git'
        TextParagraph='Fields marked with * are required.'>
        <Form
          course='Git'
          FormName='Name *'
          FromNamePlaceholder='xx xx'
          FormCompany='Company'
          FormCompanyPlaceholder='xx'
          FormEmail='E-mail *'
          FormEmailPlaceholder='xx@xx.uk'
          FormPhone='Phone *'
          FormPhonePlaceholder='+420111222333'
          FormSent='Sent'
        />
      </TextArea>


    </div>
  </div>
)

export default Index
