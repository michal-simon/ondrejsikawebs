import '../css'

import ReactMarkdown from 'react-markdown'
import Header from '@app/ondrej-sika.cz/components/Header'
import TextArea from '@app/ondrej-sika.cz/components/TextArea';
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol';
import References from '@app/ondrej-sika.cz/components/References';
import Price from '@app/ondrej-sika.cz/components/Price';
import Form from '@app/ondrej-sika.cz/components/Form';

import Head from 'next/head'


let site = {
  lang: 'cs'
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header
      websiteHeader='Školení Kubernetes'
      inquiryBtn='Nezávazně poptat školení'
      logo='/static/kubernetes.png'>
    </Header>
    <div className='container'>
      <TextArea
      TextHeader='Co je to Kubernetes'
      TextParagraph='Kubernetes jsou dnes nejrozšířenější platformou na hostování Docker kontejnerů a jsou podporovány velkými hráči na trhu (Google, Amazon, Microsoft) skrz Cloud Native Computing Foundation. Kuberneres pro provoz používají všechny velikosti firem, od startupu po korporace.'></TextArea>
      <TextArea
      TextHeader='Jak školení probíhá'
      TextParagraph='Školeni probíhá formou workshopů, vše si prakticky vyzkoušíme a osaháme. Ukážeme jak spustit Kuberneres lokálně (pro vývoj) a na cloudové platformě Digital Ocean. '/>
      <TextArea
      TextHeader='Co Vás naučím'
      >
      <ReactMarkdown source={`
- Teoretický úvod do Kubernetes
- Instalace Minikube a kubectl (pro ty kteří nenainstalovali doma)
- Popis Kubernetes komponent
- Deployment do Kubernetes
- Práce s právy v Kubernetes clusteru
- Teoretický úvod do Helm balíčku
- Instalace / Deployment pomocí Helmu
- Psaní vlastního Helm balíčku`}/>
      </TextArea>

    <TextArea
      TextHeader='Pro koho je školení určeno'
      TextParagraph='Školení je určeno pro lidi (vývojáři a devops), kteří mají zájem provozovat své Docker aplikace v Kuberneres.'>
      <TwoCol
        col1={
          <>
            <h4>Předchozí znalosti</h4>
            <ReactMarkdown source={`
- Základy práce s Linuxemm
- Základy práce v terminálu
- Základy práce s Dockerem
            `} escapeHtml={false}/>
          </>
        }
        col2={
          <>
            <h4>Technické požadavky</h4>
            <ReactMarkdown source={`
- Nainstalovaný Kubernetes
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
            `} escapeHtml={false}/>
          </>
        }
      />
    </TextArea>

    </div>
    <References
      NameRef1='Ivo Kašpárek'
      PositionRef1='Administrator in oXy shop'
      DateRef1='7.5.2019'
      TextRef1='Pár školení už jsem zažil, ale takhle perfektně do detailu vyladěné Kubernetes školení mě vážně dostalo;) Pokud chcete jít z dobou a vůbec nevíte co k8s je, tak neváhejte a napište Ondrovi!!! Ještě jednou díky Ondro;) Bylo to super👍'

      NameRef2='František Janošek'
      PositionRef2='System Admin'
      DateRef2='10.dubna 2019'
      TextRef2='Školení na [Docker](/docker) od Ondřeje v ROOT.CZ bylo velice zajímavé a přínosné. Ondra toho zná opravdu dost a není problém se na cokoliv zeptat i z jiného tématu. Ke školení provozuje na Githubu spoustu příkladů, volně přístupné registry, blog a Slack. Není problém se na Ondru obrátit s dotazy i po školení. Zatím jedno z nejvíce profesionálních školení co jsem absolvoval.'
    >
    </References>
    <Price
      PriceHeader='Cena za školení'
      PriceBtn='Nezávazně poptat školení'>
      Otevřený termín (self funded): 9 999 CZK bez DPH<br/>
      Otevřený termín (company funded): 14 999 CZK bez DPH<br/>
      Firemní školení (ve firmě): 36 000 CZK bez DPH
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Poptávka firemního školeni Kubernetes'
        TextParagraph='Pole označené * jsou povinné.'>
        <Form
          FormName='Jméno *'
          FromNamePlaceholder='Anton Hrabiš'
          FormCompany='Společnost'
          FormCompanyPlaceholder='Drůbežárny'
          FormEmail='Email *'
          FormEmailPlaceholder='anton@hrabis.cz'
          FormPhone='Telefon *'
          FormPhonePlaceholder='+420111222333'
          FormSent='Odeslat'
        />
      </TextArea>


    </div>
  </div>
)

export default Index
