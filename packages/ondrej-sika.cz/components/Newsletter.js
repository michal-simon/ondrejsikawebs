const Newsletter = (props) => (
  <div>
    <div className='container-fluid bar-grey-middle mt-3'>
      <div className='container'>
        <div className='row pt-4 pb-4'>
          <div className='col-md-8 col-sm-12 col-12'>
            <p className='text-white m-0 pb-0 pt-1'>{props.NewsletterText}</p>
          </div>
          <div className='col-md-4 col-sm-9 col-12'>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="e-mail" aria-label="Recipient's username" aria-describedby="basic-addon2" />
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

export default Newsletter
