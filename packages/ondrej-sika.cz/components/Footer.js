const Footer = (props) => (
  <div>
    <div className='footer'>
      <div className='container pt-4 pb-4'>
        <div className='row'>
          <div class='col-md-4 col-sm-6 col-6'>
            <h4 className='text-white'>Ondrej Sika</h4>
            <a href='mailto:ondrej@ondrejsika.com'>ondrej@ondrejsika.com</a><br/>
            <a href='tel:+420773452376'>+420 773 452 376</a>
          </div>
          <div className='col-md-4 col-sm-6 col-6'>
            <div className='row'>
              <div class='col-md-6 col-sm-6 col-12'>
                <p><a href='/Docker'>Docker</a></p>
                <p><a href='/Git'>Git</a></p>
                <p><a href='/Kubernetes'>Kubernetes</a></p>
              </div>
              <div class='col-md-6 col-sm-6 col-12'>
                <p><a href='/GitlabCI'>Gitlab CI</a></p>
                <p><a href='/Ansible'>Ansible</a></p>
              </div>
            </div>
          </div>
          <div class='col-md-4 col-sm-12'>
          <a href='https://www.facebook.com/sikaondrej'><img src='/static/fb-hex.svg' className='pl-2 pr-2 pt-1'/></a>
          <a href='https://www.instagram.com/ondrejsika/'><img src='/static/insta-hex.svg' className='pl-2 pr-2 pt-1'/></a>
          <a href='https://www.linkedin.com/in/ondrejsika/'><img src='/static/linkedin-hex.svg' className='pl-2 pr-2 pt-1'/></a>
          <a href='https://github.com/ondrejsika'><img src='/static/github-hex.svg' className='pl-2 pr-2 pt-1'/></a>
          <a href='mailto:ondrej@ondrejsika.com'><img src='/static/mail-hex.svg' className='pl-2 pr-2 pt-1'/></a>
          <a href='https://twitter.com/ondrejsika'><img src='/static/twitter-hex.svg' className='pl-2 pr-2 pt-1'/></a>
          </div>
        </div>
        <p className="text-center text-white fs-9 pt-4">Website by <a href="https://zuzjes.com" target="_blank" className='fs-11 text a-underline'>Zuzana Jeschke</a></p>
      </div>
    </div>
  </div>
)

export default Footer
