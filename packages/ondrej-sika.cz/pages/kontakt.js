import '@app/ondrej-sika.cz/css'

import Header from '@app/course-landing/components/Header'
import HeaderLink from '@app/course-landing/components/HeaderLink'
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import References from '@app/course-landing/components/References';
import ThreeCol from '@app/course-landing/components/ThreeCol';
import someone from '@app/course-landing/components/References/someone.jpg'
import jurajboldis from '@app/course-landing/components/References/jurajboldis.jpg'
import martinkylian from '@app/course-landing/components/References/martinkylian.jpg'
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import ButtonOutline from '@app/course-landing/components/ButtonOutline';
import Recommendation from '@app/course-landing/components/Recommendation'
import Contact from '@app/course-landing/components/Contact'
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import Head from 'next/head'


let site = {
  lang: 'cs'
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <div className="bar-header">
      <div className='container'>
        <div className='pt-4 pb-4'>
          <h1 className='text-white pt-3 pb-2'>Kontakt</h1>
        </div>
      </div>
    </div>
    <div className='container'>
      <h3 className='pt-4 pb-2'>Ondřej Šika</h3>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <h4>Fakturační údaje</h4>
          <p>Klatovská třída 1532/71<br/>
          301 00 Plzeň<br/>
          Česká Republika</p>
          <table class="contact-table table-borderless">
            <tbody>
              <tr>
                <td>IČ:</td>
                <td>88114163</td>
              </tr>
              <tr>
                <td>DIČ:</td>
                <td>CZ9302252102</td>
              </tr>
              <tr>
                <td>Účet:</td>
                <td>2500171198/2010 (Fio)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <h4 className='pt-4 pt-md-0'>Platební údaje</h4>
          <table class="contact-table table-borderless">
            <tbody>
              <tr>
                <td>ČR (CZK):</td>
                <td>2500171198 / 2010</td>
              </tr>
              <tr>
                <td>SK (EUR):</td>
                <td>2500171198 / 8330</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td>CZ0620100000002500171198</td>
              </tr>
              <tr>
                <td>BIC code /
                  SWIFT:</td>
                <td>FIOBCZPPXXX</td>
              </tr>
            </tbody>
          </table>
          <p><b>Adresa Banky</b><br/>
          Fio banka, a.s.,<br/>
          V Celnici 1028/10,<br/>
          Praha 1,<br/>
          Česká Republika</p>
        </div>
        <div className='col-lg-4 col-md-9 col-sm-12 col-12'>
        <h4 className='pt-4 pt-md-0'>Poptejte firemní školení</h4>
          {/* <img src='/static/ond.jpg' className='img-fluid img-size-70'/> */}
          <form>
            <div className="form-group">
              <div className="col-md-12 mb-3 pl-0">
                <label for="validationDefault01">Jméno *</label>
                <input type="text" className="form-control" id="validationDefault01" placeholder="Anton Hrabiš" required/>
              </div>
              <div className="col-md-12 mb-3 pl-0">
                <label for="validationDefault02">Společnost</label>
                <input type="text" className="form-control" id="validationDefault02" placeholder="Drůbežárny"/>
              </div>
              <div className="col-md-12 mb-3 pl-0">
                <label for="validationDefault03">Email *</label>
                <input type="email" className="form-control" id="validationDefault03" placeholder="anton@hrabis.cz" required/>
              </div>
              <div className="col-md-12 mb-3 pl-0">
                <label for="validationDefault04">Telefon *</label>
                <input type="tel" className="form-control" id="validationDefault04" placeholder="+420111222333" required/>
              </div>
            </div>
            <button className='btn btn-succes mb-4' type="submit">Odeslat</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default Index
