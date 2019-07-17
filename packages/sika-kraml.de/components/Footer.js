import Former2 from "@app/common/components/Former2"
import site from "@app/sika-kraml.de/config"

const Footer = (props) => (
  <div>
    <div className='footer mt-4'>
      <div className='container pt-4 pb-4'>
        <div className='row'>
          <div className='col-md-4 col-sm-7 col-8'>
            <h3 className='text-white'>{props.col1_name}</h3>
            <p><a href='mailto:ondrej@ondrejsika.com' className='a-underline'>{props.col1_mail}</a><br></br>
            <a href='tel:+420773452376' className='a-underline'>{props.col1_phone}</a></p>
            <h3 className='text-white'>{props.col2_name}</h3>
            <p><a href='mailto:xx@xx.de' className='a-underline'>{props.col2_mail}</a><br></br>
            <a href='tel:+420773452376' className='a-underline'>{props.col2_phone}</a></p>
          </div>
          <div className='col-md-3 col-sm-5 col-4'>
            {
              props.lecture_links.map((link, l) => {
                if (typeof link[0] == 'string') {
                  return (
                    <li className='mb-3' key={l}>
                      <a href={link[1]} className='a-underline' >{link[0]}</a>
                    </li>
                  )
                }
              })
            }
          </div>
          <div className='col-md-5 col-sm-12 pt-4 pt-md-0'>
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
        <div className='center'>
          {
            props.job_links.map((link, j) => {
              return (
                <li className='mb-3 li-row' key={j}>
                  <a href={link[1]} className='a-underline'>{link[0]}</a>
                  &nbsp;|&nbsp;
                </li>
              )
            })
          }
        </div>
        <p className="text-center text-white fs-9 pt-4">Website by <a href="https://zuzjes.com" target="_blank" className='fs-11 text a-underline'>Zuzana Jeschke</a></p>
      </div>
    </div>
  </div>
)

export default Footer

