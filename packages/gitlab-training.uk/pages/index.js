import Markdown from "@app/common/components/Markdown";
import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import Recommendation from "@app/course-landing/components/Recommendation";
import Contact from "@app/course-landing/components/Contact";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Head from "next/head";
import site from "@app/gitlab-training.uk/config";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>Gitlab CI Training, Ondrej Sika - gitlab-training.uk</title>
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Gitlab CI Training UK 🇬🇧"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.uk/?x_source=gitlab-training.uk"
      logoUrl="/static/gitlab-ci.svg"
    >
      <HeaderLink url="mailto:ondrej@sika.io?subject=[gitlab-training.uk] Gitlab CI Training Inquiry">
        Request a training
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.uk/contact/?x_source=gitlab-training.uk">
        Contact me
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### What is CI?
Continuous Integration (abbr. CI or CI/CD) is a tool that automates routine tasks such as running tests, code quality or deployment. It allows faster adoption of changes to master and quicker deployment. The compelling advantage of Gitlab CI is its Docker support; you can easily combine Docker images or run tests in containers.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Course Description
This course is ran in the form of a one day hands-on workshop where you will learn the importance of CI, the different versions of Gitlab CI and practice writing CI script for a sample project. The outcome will be a script for a simple project containing application build jobs, from tests to deployment.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Course outline
- Generic introduction to CI
- Introduction to Gitlab CI
- Installation of Gitlab CI Runner
- Work with CI Jobs
- Creation of CI Pipelines
- Deployment Automatisation
- Docker and CI
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Who Should Attend
The course is primarily aimed at developers who are using Gitlab and are wanting to start using Gitlab CI. At the same time, Gitlab CI might be the reason why people are transferring onto Gitlab. The course is also useful for DevOps who want to simplify their routine tasks with deployment automatisation.
        `}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Skill Requirements
- Basic Linux knowledge
- Basic Terminal knowledge
- Basic Git knowledge is of benefit - [Git training](https://ondrej-sika.uk/training/git/)
- Docker knowledge is of benefit - [Docker training](https://ondrej-sika.uk/training/docker/)

            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technical Requirements
- Access to the internet - ideally without corporate proxy
            `}
            />
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondrej Sika"
        imgUrl={require("@app/data/pictures/ondrejsika.jpg")}
      >
        <Markdown
          source={`
A little bit of background about myself, I am a software engineer at Slush Pool and DevOps consultant, architect & lecturer. The Gitlab CI course is the second most popular training after [Docker](https://ondrej-sika.uk/training/docker); the two are closely related. I lead all the courses myself. I am experienced in Gitlab CI from multiple projects and businesses. Almost all projects that I am working on are using Gitlab CI. Gitlab CI is making my work simpler and quicker - I don't have to worry about routine tasks such as deployment or application building, and I can spend time on tasks that generate profit.
<br/><br/>
Get in touch if you have any questions - happy hearing from you!
        `}
        />
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji nejvýznamější klienti" />

      <ThreeCol
        header="References"
        col1={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col2={<Recommendation id="vse" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Pricing

Price for one day hands-on Git training

- Open to public (self-funded): 400 GBP excl. VAT
- Open to public (company-funded): 500 GBP excl. VAT
- On-site training (on-site): 1 500 GBP excl. VAT
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### I Want the Gitlab CI Training

If you are interested in Gitlab CI workshop or have any questions, please let me know.

`}
        />
        <p className="text-center">
          {/* <Link href="https://ondrej-sika.uk/training/gitlab-ci/inquiry/?x_source=git-training.uk">
            <a className="btn btn-large btn-success">
              Inquire Gitlab CI Training
            </a>
          </Link> */}
          <a
            href="mailto:ondrej@sika.io?subject=[gitlab-training.uk] Gitlab CI Training Inquiry"
            className="btn btn-large btn-success"
          >
            Inquire Gitlab CI Training
          </a>
        </p>
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Related Courses

[Git](https://ondrej-sika.uk/training/gitlab-ci)
<br>[Docker](https://ondrej-sika.uk/training/docker)
`}
        />
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
