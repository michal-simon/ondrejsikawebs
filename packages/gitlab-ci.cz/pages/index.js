import '../css'
import ReactMarkdown from 'react-markdown'
import Header from '@app/course-landing/components/Header'
import HeaderLink from '@app/course-landing/components/HeaderLink'
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import References from '@app/course-landing/components/References'
import Contact from '@app/course-landing/components/Contact'
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import Head from 'next/head'
import site from '@app/gitlab-ci.cz/config'
import aaaAuto from '@app/data/pictures/companies/aaa-auto-sq.png';
import termoFisher from '@app/data/pictures/companies/thermo_fish.jpg';
import kb from '@app/data/pictures/companies/kb.png';
import fio from '@app/data/pictures/companies/fio.png';
import o2 from '@app/data/pictures/companies/o2.png';
import ceskaPojistovna from '@app/data/pictures/companies/ceska_pojistovna.jpg';
import ondrejsika from '@app/data/pictures/ondrejsika.jpg';
import gitlab from '@app/data/pictures/courses/gitlab-ci.svg';

const Index = () => (
  <div>
    <Head>
        <title>Školení Gitlab CI, Ondrej Sika - gitlab-ci.cz</title>
    </Head>
    <Navigation location={site.location}/>
    <Header
      websiteHeader='Školení Gitlab CI'
      byName='Ondrej Sika'
      byUrl='https://ondrej-sika.cz/?x_source=skoleni-gitlab-ci.cz'
      logoUrl={gitlab}
    >
      <HeaderLink url='https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/?x_source=skoleni-gitlab-ci.cz'>Nezávazně poptat školení</HeaderLink>
      <HeaderLink url='https://ondrej-sika.cz/kontakt/?x_source=skoleni-gitlab-ci.cz'>Kontaktovat</HeaderLink>
    </Header>
    <div className='container container-width'>
      <TextFrame>
      <ReactMarkdown source={`
### Popis technologie
Continuous Integration (zkráceně CI nebo CI/CD) je nástroj, který za Vás automatizuje rutijni úkoly jako je pouštění testů, kvality kódu a nebo nasazování. Umožní vám rychleji začleňovat změny do masteru a rychleji nasazovat. Výhodou Gitlab CI je velmi dobrá podpora Dockeru, můžete velmi jednoduše skládat Docker images a nebo pouštět testy v kontejnerech.
        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Jak školení probíhá
Na školení formou workshopu si vysvětlíme proč je dobré CI používat, ukážeme si možnosti Gitlab CI a vyzkoušíme si napsat CI skript pro ukázkový projekt. Výsledkem bude CI skript pro jednoduchý projekt obsahující joby od buildu aplikace, přez testy až po deployment.
`}/>
      </TextFrame>
      <TextFrame>
      <ReactMarkdown source={`
#### Co Vás naučím
- Obecný úvod do CI
- Úvod do Gitlab CI
- Instalace Gitlab CI Runneru
- Práce s CI joby
- Tvorba CI pipelines
- Automatické nasazování
- Docker a CI
        `} escapeHtml={false}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Pro koho je školení určeno
Školení je primárně určeno vývojářům kteří používají Gitlab a chtějí začít používat Gitlab CI. Zároveň právě Gitlab CI může být důvod přechodu na Gitlab. Školení je také vhodné pro DevOps, kteří si chtějí ulehčit práci s automatizací nasazování.
        `}/>
        <TwoCol
          col1={
            <ReactMarkdown source={`
#### Předchozí znalosti
- Základy práce s Linuxem
- Základy práce v terminálu
- Základní znalost Gitu výhodou - [Školení Git](https://ondrej-sika.cz/skoleni/git/)
            `} escapeHtml={false}/>
          }
          col2={
            <ReactMarkdown source={`
#### Technické požadavky
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
            `} escapeHtml={false}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header='Lektor: Ondřej Šika'
        imgUrl={ondrejsika}
        >
        <ReactMarkdown source={`
Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Školím převážně Docker a CI, který s Dockerem velmi úzce souvisí. Další školení naleznete na mém webu <a href='https://ondrej-sika.cz'>ondrej-sika.cz</a>.<br /><br />
Všechny kurzy vedu osobně. S Gitlab CI mám zkušenosti z mnoha různých projektů a firem. Téměř všechny projekty na kterých pracuji využívají Gitlab CI. Gitlab CI mi velmi ulehčuje a zrychluje práci - nemusím se starat o rutijni akce jako nasazování nebo build aplikace a mohu se věnovat vývoji a činnostem které mi přinášejí zisk.
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
      <References ids={['bohemiaenergy', 'vse', 'sit']} lang={site.lang}/>
      <TextFrame>
        <ReactMarkdown source={`
### Mám zájem o školení
Pokud máte zájem o školení, neváhejte mě kontaktovat.
`}/>
        <span className='text-center'>
          <a href='https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/' className='btn btn-large btn-success'>Nezávazně poptat školení</a>
        </span>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Cena
Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/) nebo mi napište email na <ondrej@ondrejsika.com>
- Otevřený termín (self funded): 4 999 CZK bez DPH
- Otevřený termín (company funded): 6 999 CZK bez DPH
- Firemní školení (ve firmě): 18 000 CZK bez DPH
`}/>
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
