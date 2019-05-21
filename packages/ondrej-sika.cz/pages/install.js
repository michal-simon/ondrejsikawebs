import '@app/ondrej-sika.cz/css'

import LectureImgMdLg from '@app/ondrej-sika.cz/components/LectureImgMdLg';
import LectureImgSm from '@app/ondrej-sika.cz/components/LectureImgSm';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import TextWithImg from '@app/ondrej-sika.cz/components/TextWithImg';
import StatisticBar from '@app/ondrej-sika.cz/components/StatisticBar';
import CompaniesBar from '@app/ondrej-sika.cz/components/CompaniesBar';
import CompaniesBar1 from '@app/ondrej-sika.cz/static/webglobe-yegon-sq.png';


import Head from 'next/head'

let site = {
  lang: 'cs'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

const Install = () => (
  <div>
    <Head>
    </Head>
    <MainBar
      MainBarHeader='Instalace Dockeru'>
    </MainBar>
    <div className="container pt-3 pb-2">
      <p>Budeme pouzivat Docker CE (Community Edition). Pro me skoleni i drtivou vetsinou prace staci.</p>
      <h3>Windows</h3>
      <h4>Windows 10 Pro a vyssi (s podporou Hyper-V)</h4>
      <p>Tyto Windows podporuji Docker for Windows, stahnete jej zde: https://sika.link/docker-for-windows
      Pri instalace nechte defaultni nastaveni, pri vyberu typu kontejneru nechte vybrane Linuxove kontejnery.<br/><br/>
      Po instalaci spuste Docker do do terminalu napiste: docker run ondrejsika/verify-docker a meli by jste dostat:</p>
    </div>
    <div className='container-fluid '>
      <div className='container code'>
        <div className='pt-3 pb-2'>
          <p>sika@sika-x250:~$ docker run ondrejsika/verify-docker<br/>
          Unable to find image 'ondrejsika/verify-docker:latest' locally<br/>
          latest: Pulling from ondrejsika/verify-docker<br/>
          cd784148e348: Already exists<br/>
          Digest: sha256:635008c99afddb282476e886e693a25f32180be934d4c040278c73d2a7537d00<br/>
          Status: Downloaded newer image for ondrejsika/verify-docker:latest<br/>
          Your Docker is working :)</p>
        </div>
      </div>
    </div>
    <div className='container pt-3'>
      <p>Pokud vam Docker vypise neco jineho, dejte mi vedet na email ondrej@ondrejsika.com.
      <br/><br/>
      Navod na instalaci Dockeru pro Windows na oficialnich strankach Dockeru: https://docs.docker.com/docker-for-windows/install/</p>
      <h4>Windows bez Hyper-V (Window 7, Windows 10 Home, …)</h4>
      <p>Pokud mate Windows, ktere nepodporuji Hyper-V, musite pouzit Docker Toolbox. Docker Toolbox je balicek Dockeru a Virtualboxu (pokud jiz VirtualBox mate, pouzije ten Vas), ktery vam spusti Docker ve virtualnim stroji.
      <br/><br/>
      Stahnout si jej muzete zde: https://sika.link/docker-toolbox-windows
      <br/><br/>
      Po instalaci spuste program Docker Quikstart Terminal, pockejte az se Vam spusti VM a pak spuste: docker run ondrejsika/verify-docker a meli by jste dostat stejny vystup (Your Docker is working) jako pri pouziti Docker for Windows.</p>
      <h3>Mac OS</h3>
      <p>Na Macu jsou opet 2 varianty Dockeru: Docker for Mac a Docker Toolbox. Pouzijte Docker for Mac, pokud nemate podporu xhive (zjistite takz ze do terminalu napisete sysctl kern.hv_support pouzijte Toolbox.
      <br/><br/>
      Stahnete si Docker for Mac: <a href='https://sika.link/docker-for-mac'> zde</a> pripadne Toolbox: https://sika.link/docker-toolbox-mac
      <br/><br/>
      Po instalaci spuste Docker do do terminalu napiste: docker run ondrejsika/verify-docker a meli by jste dostat:</p>
    </div>
    <div className='container-fluid code'>
      <div className='container'>
        <div className='pt-3 pb-2'>
          <p>sika@sika-x250:~$ docker run ondrejsika/verify-docker<br/>
          Unable to find image 'ondrejsika/verify-docker:latest' locally<br/>
          latest: Pulling from ondrejsika/verify-docker<br/>
          cd784148e348: Already exists<br/>
          Digest: sha256:635008c99afddb282476e886e693a25f32180be934d4c040278c73d2a7537d00<br/>
          Status: Downloaded newer image for ondrejsika/verify-docker:latest<br/>
          Your Docker is working :)</p>
        </div>
      </div>
    </div>
    <div className='container pt-3'>
      <h3>Linux</h3>
      <p>Na Linuxu nepouzivejte Docker z distribucnich balicku, je tam stary. Postupujte podle oficialniho navodu na: <a href='https://docs.docker.com/install/linux/docker-ce/debian/'> zde</a> pro Debian, pripadne si vyberte svoji distribuci v levem menu.
      <br/><br/>
      Pokud mate problem s instalaci a nebo jakykoliv dotaz, nevahejte me napsat na <a href='mailto:ondrej@ondrejsika.com'>ondrej@ondrejsika.com</a></p>
    </div>
  </div>
)

export default Install
