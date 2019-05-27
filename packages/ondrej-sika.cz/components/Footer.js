import Former2 from "@app/common/components/Former2"
import site from "@app/ondrej-sika.cz/config"


const Footer = (props) => (
  <div>
    <div className='footer mt-4'>
      <div className='container pt-4 pb-4'>
        <div className='row'>
          <div className='col-md-4 col-sm-7 col-8'>
            <h3 className='text-white'>{props.col1_name}</h3>
            <p><a href='mailto:ondrej@ondrejsika.com' className='a-underline'>{props.col1_mail}</a><br></br>
            <a href='tel:+420773452376' className='a-underline'>{props.col1_phone}</a></p>
          </div>
          <div className='col-md-2 col-sm-5 col-4'>
            <p><a href='/docker' className='a-underline'>Docker</a></p>
            <p><a href='/git' className='a-underline'>Git</a></p>
            <p><a href='/kubernetes' className='a-underline'>Kubernetes</a></p>
            <p><a href='/gitlab-ci' className='a-underline'>Gitlab CI</a></p>
            <p><a href='/ansible' className='a-underline'>Ansible</a></p>
          </div>

          <div className='col-md-2 col-sm-12'>
            <a href='https://www.facebook.com/sikaondrej'><img src='/static/fb-hex.svg' className='pl-2 pr-2 pt-1'/></a>
            <a href='https://www.instagram.com/ondrejsika/'><img src='/static/insta-hex.svg' className='pl-2 pr-2 pt-1'/></a>
            <a href='https://www.linkedin.com/in/ondrejsika/'><img src='/static/linkedin-hex.svg' className='pl-2 pr-2 pt-1'/></a>
            <a href='https://twitter.com/ondrejsika'><img src='/static/twitter-hex.svg' className='pl-2 pr-2 pt-1'/></a>
            <a href='https://github.com/ondrejsika'><img src='/static/github-hex.svg' className='pl-2 pr-2 pt-1'/></a>
            <a href='mailto:ondrej@ondrejsika.com'><img src='/static/mail-hex.svg' className='pl-2 pr-2 pt-1'/></a>
          </div>
          <div className='col-md-4 col-sm-12 pt-4 pt-md-0'>
            <h3 className='text-white'>{props.col4_NewsHeader}</h3>
            <p className='text-white'>{props.col4_NewsText}</p>
            <div className="input-group pt-3">
              <Former2 site={site} name='Newsletter Subscription' redirect_path="/odeslano">
                <div className="input-group-append">
                <input type="email" name="email" className="form-control" id="validationDefault03" placeholder="e-mail"/>
                  <input type="submit" className="btn btn-outline-header" value={props.NewsletterBtn} />
                </div>
              </Former2>
            </div>
          </div>
        </div>
        <p className="text-center text-white fs-9 pt-4">Website by <a href="https://zuzjes.com" target="_blank" className='fs-11 text a-underline'>Zuzana Jeschke</a></p>
      </div>
    </div>
  </div>
)

export default Footer
