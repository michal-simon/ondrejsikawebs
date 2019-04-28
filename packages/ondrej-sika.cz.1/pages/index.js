import '../css'

import LectureImg from '@app/ondrej-sika.cz/components/LectureImg';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import TextWithImg from '@app/ondrej-sika.cz/components/TextWithImg';
// import TextWithImg from '@app/ondrej-sika.cz/components/TextArea';


import Head from 'next/head'

let site = {
  lang: 'cs'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <MainBar
      MainBarHeader='IT Školení, konzultace a workshopy'
      MainBarText='Zlepšuji práci vývojářských týmu zaváděním efektivních procesu ve vývoji a použitím prověřených nástrojů a technologií, které vedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software.'
    >
    </MainBar>

    <div className="container">
      <LectureImg
        LectureImgHeader='Kurzy co školím'
      />
      <TextWithImg
        TextWithImgHeader='O mně'
      >
        Jmenuji se Ondrej, pracuji jako software engineer na Slush Poolu (težba Bitcoinu) a vývojem softwaru se zabývam od roku 2009. Od roku 2013 školím.
        <br/><br/>
        Všechny kurzy stavím na svých dlouholetých znalostech a zkušenostech z vývoje, testovaní a provozování softwarových projektů od malých webu po velké globalní projekty.
        <br/><br/>
        Nástroje jako <a href='/git'>Git</a>, <a href='/docker'>Docker</a>, <a href='/kubernetes'>Kubernetes</a>, <a href='/ansible'>Ansible</a> nebo <a href='/gitlab-ci'>CI</a> používám na denní bázi, vše co školím jsem použil v reálných projektech a mám s technologií osobní zkušenost. Všechny kurzy jsem schopen upravit na míru vašim požadavkům a všechny probíhají formou workshopu – věřím, že si něco vyzkoušet na vlastní kůži je ta nejefektivnější cesta se něco naučit.
        <br/><br/>
        Všechny kurzy a školení dělám v českém nebo anglickém jazyce.
        <br/><br/>
        Rád fotím a píši blog o technologiích, cestováni a knihách.
      </TextWithImg>

      <h3 className='pt-4 pb-2'>Firmy se kterými spolupracuji</h3>
      <div className="d-flex row text-center">
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src='/static/webglobe-yegon-sq.png' className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src='/static/eltodo-sq.png' className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src='/static/eon-sq.jpg' className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src='/static/kb-sq.jpg' className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src='/static/dimension-data-sq.png' className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src='/static/aaa-auto-sq.png' className="img-fluid bw" alt="default" />
        </div>
      </div>
    </div>
    <div className='bar-grey-light mt-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h2 className='text-center text-white text-huge'>576</h2>
            <p className='text-white text-center'>Počet odškolenych lidi:</p>

          </div>
          <div className='col-4'>
            <h2 className='text-white text-center text-huge'>88</h2>
            <p className='text-white text-center'>Počet firem ve spolupráci:</p>
          </div>
          <div className='col-4'>
            <h2 className='text-center text-white text-huge'>99</h2>
            <p className='text-white text-center'>Počet uskutečněných školení:</p>
          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid bar-grey-middle'>
      <div className='container pt-4 pb-4'>
        <div className='row'>
          <div className='col-md-8 col-sm-12 col-12'>
          <p className='text-white'>Odebírejte můj newsletter a budte v obraze!</p>
          </div>
          <div className='col-md-4 col-sm-9 col-12'>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="e-mail" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-outline-header" type="button">Odeslat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Index
