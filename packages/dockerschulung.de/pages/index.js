import '../css'
import Header from '@app/course-landing/components/Header'
import HeaderLink from '@app/course-landing/components/HeaderLink'
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import References from '@app/course-landing/components/References';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import ButtonOutline from '@app/course-landing/components/ButtonOutline';
import Contact from '@app/course-landing/components/Contact'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import site from '@app/dockerschulung.de/config';
import aaaAuto from '@app/data/pictures/companies/aaa-auto-sq.png';
import termoFisher from '@app/data/pictures/companies/thermo_fish.jpg';
import kb from '@app/data/pictures/companies/kb.png';
import fio from '@app/data/pictures/companies/fio.png';
import o2 from '@app/data/pictures/companies/o2.png';
import ceskaPojistovna from '@app/data/pictures/companies/ceska_pojistovna.jpg';
import ondrejsika from '@app/data/pictures/ondrejsika.jpg';
import docker from '@app/data/pictures/courses/docker-w.svg';

const Index = () => (
  <div>
    <Head>
        <title>Docker Schulung</title>
    </Head>
    <Navigation location={site.location}/>
    <Header
      websiteHeader='Docker Schulung'
      byName='Ondrej Sika'
      byUrl='https://sika-kraml.de/kontakt/?x_source=dockerschulung.de'
      logoUrl={docker}>
    >
      <HeaderLink url='https://ondrej-sika.cz/skoleni/docker/poptavka/?x_source=skoleni-docker.cz'>Nezávazně poptat školení</HeaderLink>
      <HeaderLink url='https://ondrej-sika.cz/kontakt/?x_source=skoleni-docker.cz'>Kontaktovat</HeaderLink>
    </Header>
    <div className='container container-width'>
      <TextFrame>
        <ReactMarkdown source={`
## Co je to Docker
Docker je dnes technologie, která proces vývoje, testování a provozování softwaru velmi zjednodušuje. Provozujte cokoliv a kdekoliv. Už nečekejte na nastavení vašeho serveru nebo na aktualizaci nějaké knihovny. Mějte prostředí jako součást vaší aplikace.
      `}/>
</TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Jak školení probíhá
Na školení Úvod do práce s Dockerem si ukážeme vše jak s Dockerem pracovat od vytvoření vlastního kontejnerů po jeho provozování ve Swarmu. Vše si prakticky vyzkoušíme a osaháme.
        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Co Vás naučím
- Teoretický úvod do Dockeru
- Instalace Dockeru (pro ty kteří nenainstalovali doma)
- Práce s kontejnery
- Práce s obrazy
- Docker Compose - vicekontejnerove aplikace v Dockeru
- Deployment do Swarmu
- Ukázka deploymentu do Kubernetes
        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Pro koho je školení určeno
Školení je primárně určeno lidem, kteří nemají s Dockerem žádné (nebo malé) zkušenosti. Školení nepočítá s předchozími znalostmi Dockeru. Je vhodné pro vývojáře nebo devops (server administrátory), kteří chtějí Docker využívat v praxi nebo chtějí mít přehled co Docker řeší a kde by jej mohli použít.
        `}/>
        <TwoCol
          col1={
            <ReactMarkdown source={`
#### Předchozí znalosti
- Základy práce s Linuxem
- Základy práce v terminálu
            `}/>
          }
          col2={
            <ReactMarkdown source={`
#### Technické požadavky
- Nainstalovaný Docker, [návod na instalaci](https://www.ondrej-sika.cz/docker/instalace/)
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
            `}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header='Lektor: Ondřej Šika'
        imgUrl={ondrejsika}
        >
        <ReactMarkdown source={`
Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Školím převážně Docker a CI, který s Dockerem velmi úzce souvisí. Další školení naleznete na mém webu ondrej-sika.cz.
Všechny kurzy vedu osobně. S Dockerem mám více než čtyři roky zkušeností v rámci komerčního vývoje softwaru. Docker používám denně jak ve vývoji, tak i na produkci a práci bez něj nedovedu už ani představit.
        `}/>
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
Pokud máte zájem o školení, neváhejte mě kontaktovat
        `}/>
        <ButtonOutline
          btnUrl='https://ondrej-sika.cz/skoleni/docker/poptavka/'>
          Nezávazně poptat školení
        </ButtonOutline>
      </TextFrame>

      <TextFrame header='Cena'>
        Pokud máte zájem o školení u vás ve firmě, <a href='https://ondrej-sika.cz/skoleni/docker/poptavka/' className='btn btn-large mybutton-outline'>nezávazně jej poptejte</a> nebo mi napište email na <a href='/cdn-cgi/l/email-protection#8de2e3e9ffe8e7cde2e3e9ffe8e7fee4e6eca3eee2e0'>
        <span className='__cf_email__' data-cfemail='2e41404a5c4b446e41404a5c4b445d47454f004d4143'>ondrej@ondrejsika.com</span>
        </a>
        <br/>
        Otevřený termín (self funded): 9 999 CZK bez DPH<br />
        Otevřený termín (company funded): 14 999 CZK bez DPH<br />
        Firemní školení (ve firmě): 36 000 CZK bez DPH
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika/>
  </div>
)

export default Index
