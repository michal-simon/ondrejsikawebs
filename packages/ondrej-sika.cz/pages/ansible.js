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
      websiteHeader='Školení Ansible'
      inquiryBtn='Nezávazně poptat školení'
      logo='/static/ansible.png'>
    </Header>
    <div className='container'>
      <TextArea
      TextHeader='K čemu se používá?'
      TextParagraph='Ansible je nástroj na hromadnou správu konfiguraci a nasazování. Vy deklarujete vysledný stav serveru a služeb a Ansible se postará o provedení. Nemusíte řešit v jakém stavu je server nebo aplikace ted, Ansible vám zařídí požadovaný výsedek (výhoda deklarativní syntaxe, napřiklad shell script je imperativní - proveď to a to ...). Veškerou konfiguraci máte verzovanou Gitem a nestane se vám ze ztratíte přehled kde máte co nasazené nebo ze vynecháte nějaký důležitý krok. Ansible vám pomůže nasazovat aplikace a spravovat servery rychleji a bezpečněji.'/>
      <TextArea
      TextHeader='Jak školení probíhá'
      TextParagraph='Ansible si společně nainstalujeme a popíšeme si jak pracuje a základní koncepty. Zkusíme si nastavit server (testovací na DigitalOceanu) a nasadit aplikaci od začátku až do konce. Vše si prakticky ošaháme a ozkoušíme.'/>
      <TextArea
      TextHeader='Co Vás naučím'
      >
      <ReactMarkdown source={`
- Základní koncept Ansible
- Instalace Ansible (pro ty kteří nenainstalovali doma)
- Základní ovládání Ansible
- Playbooks
- Moduly
- Šablony
- Secrets`}/>
      </TextArea>

    <TextArea
      TextHeader='Pro koho je školení určeno'
      TextParagraph='Školení je převážně určeno adminum a DevOps, kteří chtějí začít Ansible používat. Zároveň je vhodné i pro vývojáře, kteří občas nasazují (i do testovacích prostředí) svoje aplikace a chtějí zjednodušit tento proces.'>
      <TwoCol
        col1={
          <>
            <h4>Předchozí znalosti</h4>
            <ReactMarkdown source={`
- Základy práce s Linuxemm
- Základy práce v terminálu
            `} escapeHtml={false}/>
          </>
        }
        col2={
          <>
            <h4>Technické požadavky</h4>
            <ReactMarkdown source={`
- Nainstalovaný Ansible
- Přístup na internet (ideálně bez korporatni proxy, případně nastavenou proxy v Dockeru)
            `} escapeHtml={false}/>
          </>
        }
      />
    </TextArea>

    </div>
    <References
      NameRef1='Adrian Kantor'
      PositionRef1='Head of IT Prague Fio banka'
      DateRef1='17.listopadu 2018'
      TextRef1='Ondřej školil git, ale bez problémů na místě objasnil i mnoho našich specifických otázek kolem celého vývojového cyklu,neztratil se ani v ad hoc dotazech, které už s gitem souvisely jen málo.
      Bylo velmi přínosné strávit čas s člověkem, který tématu rozumí do hloubky i do šířky a zároveň se je schopen podívat na problém z vaší perspektivy.'

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
        TextHeader='Poptávka firemního školení Ansible'
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
