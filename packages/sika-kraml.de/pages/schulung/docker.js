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
  lang: 'de'
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header
      websiteHeader='Docker Schulung'
      inquiryBtn='Ask for training'
      logo='/static/docker.svg'>
    </Header>
    <div className='container course-page'>
      <ReactMarkdown source={`
### Die Technologie
Docker ist eine Technologie, die die Entwicklungs- und Testprozesse stark vereinfacht. Betreiben Sie was Sie wollen und wo Sie es wollen. Warten Sie nicht mehr, bis Ihr Server konfiguriert oder ein Update durchgeführt ist. Verwalten Sie Ihre Luafzeitumgebung als Teil Ihres Projekts.

### Course Description
During the two-day workshop, you’ll be shown everything you need to know to be able to use Docker - from creating a custom container image to the Swarm utilisation. This course is very hands-on, and you will be able to practice everything you learn.

### Schulungsleiter
#### Ondrej Sika (englisch)

My name is Ondřej Šika, I develop software at Slush Pool and hold workshops. I mostly teach Docker and Gitlab CI, which is closely related to Docker.
I have over four years of commercial experience with Docker. I use it daily, both for development and production. I can't image working without it.

#### Jiri Kraml (deutsch)

Ich heiße Jiří Kraml und bin der Entwicklungsleiter bei Zigpos. Ob fürs Testing  oder Deployment - Docker ist stets eins der ersten Tools, die ich installiere. Die Reproduzierbarkeit von Prozessen hat uns schon so manchen Wochenendeinsatz erspart, denn mit Docker gehören Ausreden à la  "runs on my machine" der Vergangenheit an.

### Inhalt
- Theoretische Einführung in Dockeru
- Installation von Dockeru (für die, die es nicht schon zu Hause installiert haben)
- Umgang mit containern
- Umgang mit Images
- Docker Compose - Mehrcontaineranwendungen in Docker
- Deployment in Swarm
- Demo eines Kubernetesdeployments

### Für wen die Schulung geeignet ist
Die Schulung ist vorranging für Teilnehmer gedacht, die mit Docker keine oder nur geringe Erfahrungen gemacht haben. Vorkenntnisse von Docker sind nicht nötig. Die Schulung ist für Entwickler, DevOps und Administratoren geeignet, die Docker in der Praxis nutzen wollen oder mehr über die Möglichkeiten und Einsatzgebiete von Docker erfahren möchten.`}/>
      <TwoCol
        col1={
          <ReactMarkdown source={`
#### Vorkenntnisse
- Linuxgrundlagen
- Grundlagen des Umgangs mit der Kommandozeile
          `} escapeHtml={false}/>
        }
        col2={
          <ReactMarkdown source={`
#### Technische Voraussetzungen
- Installiertes [Docker](/docker/instalation)
- Internetzugang - idealerweise ohne Proxy
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
- Öffentlicher Termin (Privatkunde): _____ € zzgl. MwSt.
- Öffentlicher Termin (Unternehmenskunde): _____ € zzgl. MwSt.
- On-Premise Schulung: _____ € zzgl. MwSt.

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
