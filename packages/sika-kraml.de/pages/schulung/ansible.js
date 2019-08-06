import '@app/sika-kraml.de/css';
import ReactMarkdown from 'react-markdown';
import Header from '@app/ondrej-sika.cz/components/Header';
import TextArea from '@app/ondrej-sika.cz/components/TextArea';
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol';
import References from '@app/ondrej-sika.cz/components/References';
import Price from '@app/ondrej-sika.cz/components/Price';
import Form from '@app/ondrej-sika.cz/components/Form';
import Head from 'next/head';
import ansible from '@app/data/pictures/courses/ansible-w.svg';

let site = {
  lang: 'de'
};

{/* TODO translate */}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header
      websiteHeader='Ansible Training'
      inquiryBtn='Ask for training'
      logo={ansible}>
    </Header>
    <div className='container course-page'>
    <ReactMarkdown source={`

### What is Ansible?
Ansible is a tool for mass configuration and deployment management. You declare the desired state of the server and services and Ansible will do the execution. You don't have to worry about the state the current server or applications are in now; Ansible turns it into desired state. The entire configuration is versioned using Git, and you will never lose view of where everything is being deployed or miss any critical steps during the process. Ansible will help you with application deployment and quicker and safer server administration.

### Course Description
The training is ran as a two-day hands-on workshop, where you can try what you learn in practice. We will install Ansible together and describe how it works and introduce the basic concepts. We will see how to configure a server (tester on DigitalOcean) and deploy an application from the beginning to the end. Starting with the installation of system packages, application download from Git, creation of templates for configuration scripts, and secrets setup (e.g., passwords). After this course, you will be able to use Ansible on a daily basis and simplify deployment and configuration routines.

### Course Outline
- Basic insights into automation
- Basic insights into Ansible
- Ansible installation (for those who did not install at home)
- Basic Ansible controls
- Playbooks
- Templates
- Secrets
- Writing own modules
- Ansible & CI/CD (Gitlab CI)

### Who Should Attend
This training is primarily aimed at admins and DevOps who want to start using Ansible. At the same time,developers who deploy their applications (even into test environments) and want to simplify this process, will also find it useful.
`}/>

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
- Have Ansible installed, instructions: [here](/ansible/instructions)
- Access to the internet (https, ssh) - better without corporate proxy
      `} escapeHtml={false}/>
    }
  />

  </div>
    <References ids={['oxy','oxyshop']} lang={site.lang} />
    <Price
      PriceHeader='Pricing'
      PriceBtn='Ask for training'>
      Price for the two-day hands-on Ansible training<br/><br/>
      <ReactMarkdown source={`
- Open to public (self-funded): 800 GBP excl. VAT
- Open to public (company-funded): 1000 GBP excl. VAT
- On-site training (on-site): 3000 GBP excl. VAT
`} escapeHtml={false}/>
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Ask for company training on Ansible'
        TextParagraph='Fields marked with * are required.'>
        <Form
          course='Ansible'
          FormName='Name *'
          FromNamePlaceholder='Max Mustermann'
          FormCompany='Firma'
          FormCompanyPlaceholder='Muster GmbH'
          FormEmail='E-Mail *'
          FormEmailPlaceholder='mm@muster.de'
          FormPhone='Telefon *'
          FormPhonePlaceholder='0176 0000000'
          FormSent='Absenden'
        />
      </TextArea>


    </div>
  </div>
);

export default Index
