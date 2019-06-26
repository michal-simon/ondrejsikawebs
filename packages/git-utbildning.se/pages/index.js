import '../css'
import Header from '@app/course-landing/components/Header';
import HeaderLink from '@app/course-landing/components/HeaderLink';
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import ReactMarkdown from 'react-markdown';
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import References from '@app/course-landing/components/References';
import Head from 'next/head';
import site from '@app/git-utbildning.se/config';
import aaaAuto from '@app/data/pictures/companies/aaa-auto-sq.png';
import termoFisher from '@app/data/pictures/companies/thermo_fish.jpg';
import kb from '@app/data/pictures/companies/kb.png';
import fio from '@app/data/pictures/companies/fio.png';
import o2 from '@app/data/pictures/companies/o2.png';
import ceskaPojistovna from '@app/data/pictures/companies/ceska_pojistovna.jpg';
import ondrejsika from '@app/data/pictures/ondrejsika.jpg';
import git from '@app/data/pictures/courses/git-w.svg';

const Index = () => (
  <div>
    <Head>
        <title>Git Utbildning, Ondrej Sika - git-utbildning.se</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Git Utbildning"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.se/?x_source=git-utbildning.se"
      logoUrl={git}
    >
      <HeaderLink url="https://ondrej-sika.se/utbildning/git/forfragan/?x_source=git-utbildning.se">Ask for a training</HeaderLink>
      <HeaderLink url="https://ondrej-sika.se/kontakta/?x_source=git-utbildning.se">Contact me</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <ReactMarkdown source={`
### What is Git?
Git is a modern versioning tool that has become an industry standard among developers. Individuals, startups and corporations use it on a daily basis. Git offers a simple simultaneous collaboration with more people on different parts of a project. You won't face the issue of disrupting each other's work or not being able to access the latest versions. The collaboration on a project can also be improved using Gitlab, a platform for the design, development and running of software projects.
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Description
During this one day hands-on workshop, you will find out why it is beneficial to use Git, how it works (why there are no substitutes) and best practice. You will be shown everything from the installation and basic Git setup, simple individual work in one branch to work in a team with multiple branches using merge strategies (merge, rebase) and Gitlab. The pros and cons of both will be explained, and you can choose which one is better suited for your needs. Also, you will be shown how to get out of unexpected situations like 'I deleted everything by accident' etc.
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
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

`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Who Should Attend
This training course is primarily aimed at developers who don't do versioning or aren't using Git. Also, for those who make use of Git for 100% (git commit, git pull, git push). You can find a use for Git when it comes to a plentitude of projects, like small websites or bigger projects. Also, the course is useful for people that don't code frequently like DevOps.

`}/>
        <TwoCol
          col1={
            <ReactMarkdown source={`
#### Skill Requirements
- Basic Terminal knowledge
- Basic Git knowledge beneficial

            `}/>
          }
          col2={
            <ReactMarkdown source={`
#### Technical Requirements
- Have Git installed
- Access to the internet (https) - ideally without corporate proxy

            `}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Föreläsare: Ondrej Sika"
        imgUrl={ondrejsika}
      >
        <ReactMarkdown source={`
A little bit of background about myself, I am a software engineer at Slush Pool and DevOps consultant, architect & lecturer. I have more than 7 years of experience with Git on daily basis of software development. I can't imagine the day-to-day work without Git. Next to source codes, I also version configuration and infrastucture (yes, using Terraform). I train the topics surrounding versioning and software development for over five years. This course is the one that I started with and is still popular.
<br/><br/>
Get in touch if you have any questions - happy hearing from you!
`} escapeHtml={false}/>
        </TextFrameWithImage>

        <MyClients
      lang={site.lang}
      image1={aaaAuto}
      image2={termoFisher}
      image3={kb}
      image4={fio}
      image5={o2}
      image6={ceskaPojistovna}
      ></MyClients>
      <References ids={['bohemiaenergy', 'NMS', 'fio']} lang={site.lang}/>
      <TextFrame>
        <ReactMarkdown source={`
### Pricing
Price for one day hands-on Git training

- Open to public (self-funded): 400 GBP excl. VAT
- Open to public (company-funded): 500 GBP excl. VAT
- On-site training (on-site): 1 500 GBP excl. VAT
        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### I Want the Git Training

If you are interested in Git workshop or any questions, let me know.

`}/>
        <p className="text-center">
          <a href="https://ondrej-sika.se/utbildning/git/forfragan/?x_source=git-utbildning.se" className="btn btn-large btn-success">Inquire Git Training</a>
        </p>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Related Courses

[Gitlab CI](https://ondrej-sika.se/utbildning/gitlab-ci)
`}/>
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
