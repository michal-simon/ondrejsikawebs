import '@app/sika-kraml.de/css'

import ReactMarkdown from 'react-markdown'
import Header from '@app/ondrej-sika.cz/components/Header'
import TextArea from '@app/ondrej-sika.cz/components/TextArea'
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol'
import References from '@app/ondrej-sika.cz/components/References'
import Price from '@app/ondrej-sika.cz/components/Price'
import Form from '@app/ondrej-sika.cz/components/Form'

import Head from 'next/head'


let site = {
  lang: 'de'
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header
      websiteHeader='Kubernetes Schulung'
      inquiryBtn='Ask for training'
      logo='/static/kubernetes.png'>
    </Header>
    <div className='container course-page'>
    <ReactMarkdown source={`
### Die Technologie
Kubernetes ist heutzutage die an weitesten verbreitete Plattform zum Hosten von Docker Containern. Es wird von allen großen Spielern auf dem Markt (Google, Amazon, Microsoft) über die Cloud Native Computing Foundation unterstützt. Kuberneres wird von Unternehmen jeder Größenordnung produktiv eingesetzt - vom Startup bis zum Weltkonzern.

### Kursbeschreibung
Der Kurs hat die Form eines praktischen Hands-On-Workshops. Wir werden Kuberneres sowohl lokal (zum Entwickeln), als auch in der Cloud bei Digital Ocean aufsetzen. Nachdem wir uns eine Übersicht über die Grundstruktur verschafft haben, gehen wir die einzelnen Komponenten der Plattform durch. Wir lernen, wie man ein Kubernetes Manifest schreibt und wie man eine Dockeranwendung deployt. Des Weiteren sehen wir uns an, wie man in Kubernetes Rechte verwaltet und wie man Helm-Pakete schreibt und nutzt.

### Ondrej Sika (englisch)

My name is Ondřej Šika, I develop software at Slush Pool and hold workshops. I've held Kubernetes workshops at companies like CGI or Webglobe - Yergeon. I mostly teach Docker which is very closely related to Kubernetes.

Kubernetes is the platform of choice for most of my projects, as it's one of the easiest ways of running Docker applications.

### Jiri Kraml (deutch)

xxx
xxx
xxx
xxx

### Inhalt
- Teoretische Einführung in Kubernetes
- Installation von Minikube und kubectl (für die, die es nicht schon zu Hause installiert haben)
- Beschreibung der Kubernetes Komponenten
- Deployment in Kubernetes
- Rechteverwaltung im Kubernetes Cluster
- Teoretische Einführung in Helm Pakete
- Installation und Deployment mit Helm
- Schreiben eingener Helm Pakete

#### Für wen die Schulung geeignet ist
Die Schulung richtet sich an Entwickler und DevOps-Ingenieure, die ihre Dockeranwendungen in Kubernetes laufen lassen wollen.`}/>
      <TwoCol
        col1={
          <ReactMarkdown source={`
#### Vorkenntnisse
- Dockergrundlagen - LINK(docker)
- Linuxgrundkenntnisse
- Grundlagen des Umgangs mit der Kommandozeile
          `} escapeHtml={false}/>
        }
        col2={
          <ReactMarkdown source={`
#### Technische Voraussetzungen
- Vorinstalliertes Docker
- Internetzugang - idealerweise ohne Proxy (bzw. mit korrekter Einstellung in Docker)
          `} escapeHtml={false}/>
        }
      />
    </div>
    <References ids={[ 'oxy', 'oxyCTO']} lang={site.lang} />
    <Price
      PriceHeader='Preis'
      PriceBtn='Ask for training'>
      Price for the two-day Kubernetes training
      <ReactMarkdown source={`
- Öffentlicher Termin (Privatkunde): _____ € zzgl. MwSt.
- Öffentlicher Termin (Unternehmenskunde): _____ € zzgl. MwSt.
- On-Premise Schulung: _____ € zzgl. MwSt.
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
