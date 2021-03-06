import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import Markdown from "@app/common/components/Markdown";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Recommendation from "@app/course-landing/components/Recommendation";
import Head from "next/head";
import site from "@app/git-training.nl/config";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>Git Training, Ondrej Sika - git-training.nl</title>
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Git Training Netherlands 🇳🇱"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.com/?x_source=git-training.nl"
      logoUrl="/static/git.svg"
    >
      <HeaderLink url="mailto:ondrej@sika.io?subject=[git-training.nl] Git Training Inquiry">
        Request a training
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.com/contact/?x_source=git-training.nl">
        Contact me
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### What is Git?
Git is a modern versioning tool that has become an industry standard among developers. Individuals, startups and corporations use it on a daily basis. Git offers a simple simultaneous collaboration with more people on different parts of a project. You won't face the issue of disrupting each other's work or not being able to access the latest versions. The collaboration on a project can also be improved using Gitlab, a platform for the design, development and running of software projects.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Course Description
During this one day hands-on workshop, you will find out why it is beneficial to use Git, how it works (why there are no substitutes) and best practices. You will be shown everything from the installation and basic Git setup, simple individual work in a one branch to work in a team with multiple branches using merge strategies (merge, rebase) and Gitlab. The pros and cons of both will be explained, and you can choose which one is better suited for your needs. Also, you will be shown how to get out of unexpected situations like 'I deleted everything by accident' etc.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
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

`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Who Should Attend
This training course is primarily aimed at developers who don't do versioning or aren't using Git. Also, for those who make use of Git for 100% (git commit, git pull, git push). You can find a use for Git when it comes to a plentitude of projects, like small websites or bigger projects. Also, the course is useful for people that don't code frequently like DevOps.

`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Skill Requirements
- Basic Terminal knowledge
- Basic Git knowledge beneficial

            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technical Requirements
- Have Git installed
- Access to the internet (https) - ideally without corporate proxy

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
A little bit of background about myself, I am a software engineer at Slush Pool and DevOps consultant, architect & lecturer. I have more than 7 years of experience with Git on daily basis of software development. I can't imagine the day-to-day work without Git. Next to source codes, I also version configuration and infrastucture (yes, using Terraform). I train the topics surrounding versioning and software development for over five years. This course is the one that I started with and is still popular.
<br/><br/>
Get in touch if you have any questions - happy hearing from you!
`}
        />
      </TextFrameWithImage>

      <MyClients HeaderClients="References" />
      <ThreeCol
        header="Reference"
        col1={<Recommendation id="NMS" lang={site.lang} />}
        col2={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col3={<Recommendation id="fio" lang={site.lang} />}
      />

      <TextFrame>
        <Markdown
          source={`
### Pricing
Price for one day hands-on Git training

- Open to public (self-funded): 400 Eur excl. VAT
- Open to public (company-funded): 500 Eur excl. VAT
- On-site training (on-site): 1 500 Eur excl. VAT
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### I Want the Git Training

If you are interested in Git workshop or have any questions, please let me know.

`}
        />
        <p className="text-center">
          {/* <Link href="https://ondrej-sika.com/training/git/inquiry/?x_source=git-training.nl">
            <a className="btn btn-large btn-success">Inquire Git Training</a>
          </Link> */}
          <a
            href="mailto:ondrej@sika.io?subject=[git-training.nl] Git Training Inquiry"
            className="btn btn-large btn-success"
          >
            Inquire Git Training
          </a>
        </p>
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Related Courses

[Gitlab CI](https://ondrej-sika.com/training/gitlab-ci)
`}
        />
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
