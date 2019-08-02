import '@app/sika-kraml.de/css';
import ReactMarkdown from 'react-markdown';
import Header from '@app/ondrej-sika.cz/components/Header';
import TextArea from '@app/ondrej-sika.cz/components/TextArea';
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol';
import References from '@app/ondrej-sika.cz/components/References';
import Price from '@app/ondrej-sika.cz/components/Price';
import Form from '@app/ondrej-sika.cz/components/Form';
import Head from 'next/head';
import gitlab from '@app/data/pictures/courses/gitlab-ci.svg';

let site = {
  lang: 'de'
};

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header
      websiteHeader='Gitlab CI Schulung'
      inquiryBtn='Ask for a Training'
      logo={gitlab}>
    </Header>
    <div className='container course-page'>
    <ReactMarkdown source={`
### Die Technologie
Continuous Integration (kurz CI oder CI/CD) ist ein Werkzeug, welches es Ihnen ermöglicht, Routineaufgaben wie das Ausführen von Tests, Messungen der Codequalität oder das Durchführen von Deployments zu automatisieren. Es ermöglicht Ihnen eine schnellere Integration neuer Features und schnellere Deployments. Der Vorteil von Gitlab CI ist eine sehr gute Dockerunterstützung, Sie können sehr leicht Dockerimages bauen oder Tests in Containern ausführen.

### Kursbeschreibung
Wir beginnen den Workshop mit einem Überblick der Vorteile von Continuous Integration und erkunden danach die Features und Möglichkeiten von Gitlab CI. Anschließend schreiben wir für ein Beispielprojekt ein vollständiges CI-Skript mitsamt Build-, Test- und Deploymentjobs.

### Lecturer
#### Ondrej Sika (englisch)

My name is Ondřej Šika, I develop software at Slush Pool and hold workshops. The Gitlab CI workshop is second in popularity only to Docker, to which it is closely related.
I have worked with Gitlab CI in many different projects and companies. I use it on almost all the projects I work on. Gitlab CI makes my work easier and more productive, I don't have to care about routine tasks like deployments and building - instead, I can focus on creating value.

#### Jiri Kraml (deutsch)

Ich heiße Jiří Kraml und bin der Entwicklungsleiter bei Zigpos. Ich bin seit Jahren intensiver Gitlab CI Nutzer und kann es nur weiterempfehlen - die Zeitersparnis, die Zuverlässigkeit unserer Deployments und die Dokumentation unserer Prozesse sind für mich unersetzbar.

### Inhalt
- Allgemeine Einführung in CI
- Einführung in Gitlab CI
- Installation des Gitlab CI Runners
- Umgang mit CI Jobs
- Erstellung von CI Pipelines
- Automatische Deployments
- Docker und CI

### Für wen die Schulung geeignet ist
Die Schulung ist vorranging für Entwickler gedacht, die bereits Gitlab nutzen und mit Gitlab CI anfangen wollen. Gleichzeitig kann Gitlab CI auch der Grund für den Umstieg auf Gitlab sein. Die Schulung ist auch für Ops/DevOps interessant, um Deployments zu vereinfachen.`}/>
      <TwoCol
        col1={
          <ReactMarkdown source={`
#### Vorkenntnisse
- Linuxgrundlagen
- Grundlagen des Umgangs mit der Kommandozeile
- Gitkenntnisse sind von Vorteil - [Git](/schulung/git)
- Besuch der Gitlabschulung ist ebenfalls von Vorteil
          `} escapeHtml={false}/>
        }
        col2={
          <ReactMarkdown source={`
#### Technische Voraussetzungen
- Internetzugang - idealerweise ohne Proxy
          `} escapeHtml={false}/>
        }
      />
    </div>
    <References ids={['NMS', 'vse']} lang={site.lang} />
    <Price
      PriceHeader='Preis'
      PriceBtn='Ask for a training'>
      Price for one day hands-on Git training
      <ReactMarkdown source={`
- Öffentlicher Termin (Privatkunde): _____ € zzgl. MwSt.
- Öffentlicher Termin (Unternehmenskunde): _____ € zzgl. MwSt.
- On-Premise Schulung: _____ € zzgl. MwSt.
`} escapeHtml={false}/>
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Ask for company training on Gitlabu CI'
        TextParagraph='Fields marked with * are required.'>
        <Form
          course='Gitlab CI'
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
