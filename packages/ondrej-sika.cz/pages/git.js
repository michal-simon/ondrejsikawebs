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
  lang: 'cs'
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header
      websiteHeader='Školení Git'
      inquiryBtn='Nezávazně poptat školení'
      logo='/static/git.svg'>
    </Header>
    <div className='container'>
      <TextArea
      TextHeader='Co je to Git'
      TextParagraph='Git je moderní verzovaci nástroj, který se stal defaco standatem mezi vývojáři. Git vám nabízí jednoduchou kolaboraci na projektu s více lidmi a práci na více částech současně, aniž by jste si zasahovali do rozdělaných projektů nebo je jinak narušovali. Spolupráci na vývoji projektu dále zlepšuje Gitlab, což je kolaborativni platforma na návrh, vývoj a provozování software.'></TextArea>
      <TextArea
      TextHeader='Jak školení probíhá'
      TextParagraph='Na školení formou workshopu si vysvětlíme proč je dobré Git používat, jak funguje (proč dnes nemá konkurenty) a best practise.'></TextArea>
      <TextArea
      TextHeader='Co Vás naučím'
      >
      <ReactMarkdown source={`
- Instalace a konfigurace GITu
- Vytvořit nový repozitář
- Základní ovládání GITu
- Práce v jedné větvi
- Práce ve větvích - merge, rebase (silná stránka Gitu)
- Práce se vzdálenými repozitáři
- Záchrana smazaných dat z repozitáře`}/>
      </TextArea>

    <TextArea
      TextHeader='Pro koho je školení určeno'
      TextParagraph='Školení je určeno primárně pro vývojáře, kteří neverzují vůbec nebo nepoužívají Git. Zároveň je vhodné i pro ty, kteří Git nevyužívají na 100% (git commit, git pull, git push). Ať jde o malé weby nebo velké projekty, Git si najde uplatnění. Dále je kurz vhodný i pro ty, kteří nepíšou kód tak často, ale občas potřebují něco zaverzovat, například nějaké migrační skripty DB a nebo konfiguraci serveru. Git pomůže i DBA nebo DevOps.'>
      <TwoCol
        col1={
          <>
            <h4>Předchozí znalosti</h4>
            <ReactMarkdown source={`
- Základy práce s Linuxemm
- Základy práce v terminálu
- Základní znalost Gitu výhodou
            `} escapeHtml={false}/>
          </>
        }
        col2={
          <>
            <h4>Technické požadavky</h4>
            <ReactMarkdown source={`
- Nainstalovaný Git
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
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
      Otevřený termín (self funded): 4 999 CZK bez DPH<br/>
      Otevřený termín (company funded): 6 999 CZK bez DPH<br/>
      Firemní školení (ve firmě): 18 000 CZK bez DPH
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Poptávka firemního školeni Gitu'
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
