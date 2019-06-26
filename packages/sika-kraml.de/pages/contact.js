import '@app/sika-kraml.de/css';
import HeaderLink from '@app/course-landing/components/HeaderLink';
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import References from '@app/course-landing/components/References';
import ThreeCol from '@app/course-landing/components/ThreeCol';
import someone from '@app/course-landing/components/References/someone.jpg';
import jurajboldis from '@app/course-landing/components/References/jurajboldis.jpg';
import martinkylian from '@app/course-landing/components/References/martinkylian.jpg';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import ButtonOutline from '@app/course-landing/components/ButtonOutline';
import Recommendation from '@app/course-landing/components/Recommendation';
import Contact from '@app/course-landing/components/Contact';
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import Former2 from '@app/common/components/Former2';
import site from '@app/ondrej-sika.cz/config';


const Index = () => (
  <div>
    <div className='bar-header'>
      <div className='container'>
        <div className='pt-4 pb-4'>
          <h1 className='text-white pt-3 pb-2'>Contact</h1>
        </div>
      </div>
    </div>
    <div className='container'>
      <h3 className='pt-4 pb-2'>Ondrej Sika</h3>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          {/* <h4 className='pt-4 pt-md-0'>Kontakt</h4> */}
          <p className=''>
        <a href='tel:+420773452376'>+420 773 452 376</a> (<a href='https://t.me/ondrejsika'>Telegram</a>)
        <br /><a href='mailto:ondrej@ondrejsika.com?subject=Poptavka skoleni'>ondrej@ondrejsika.com</a> (<a href='/pgp'>PGP</a>)
      </p>
      <p className='pb-4'>
        <a href='https://linkedin.com/in/ondrejsika'>linkedin.com/in/ondrejsika</a>
      </p>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
        <h4>Billing information</h4>
          <p>Klatovska trida 1532/71<br/>
          301 00 Pilsen<br/>
          Czech Republic</p>
          <table class='contact-table table-borderless'>
            <tbody>
              <tr>
                <td>Trader Identification Number:</td>
                <td>88114163</td>
              </tr>
              <tr>
                <td>VAT number:</td>
                <td>CZ9302252102</td>
              </tr>
              <tr>
                <td>Account number:&nbsp;&nbsp;&nbsp;</td>
                <td>2301432033/2010 (Fio Bank)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-lg-4 col-md-9 col-sm-12 col-12'>
        <h4 className='pt-4 pt-md-0'>Payment information</h4>
          <table class='contact-table table-borderless'>
            <tbody>
              <tr>
                <td>UK (GBR):</td>
                <td>xxxxxxxxx / xxxx</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td>CZ0620100000002301432033</td>
              </tr>
              <tr>
                <td>BIC code:&nbsp;&nbsp;&nbsp;<br />SWIFT</td>
                <td valign='top'>FIOBCZPPXXX</td>
              </tr>
            </tbody>
          </table>
          <p className='mt-3'><b>Bank adress</b><br/>
          Fio bank,<br/>
          V Celnici 1028/10,<br/>
          Prague 1,<br/>
          Czech Republic</p>
        </div>
      </div>
    </div>
  </div>
)

export default Index
