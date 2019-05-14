const Form = (props) => (
  <div>
    <form id='form'>
      <div className="form-group">
        <div className="col-md-4 mb-3 pl-0">
          <label for="validationDefault01">{props.FormName}</label>
          <input type="text" className="form-control-border" id="validationDefault01" placeholder={props.FromNamePlaceholder} required />
        </div>
        <div className="col-md-4 mb-3 pl-0">
          <label for="validationDefault02">{props.FormCompany}Společnost</label>
          <input type="text" className="form-control-border" id="validationDefault02" placeholder={props.FormCompanyPlaceholder} />
        </div>
        <div className="col-md-4 mb-3 pl-0">
          <label for="validationDefault03">{props.FormEmail}</label>
          <input type="email" className="form-control-border" id="validationDefault03" placeholder={props.FormEmailPlaceholder} required />
        </div>
        <div className="col-md-4 mb-3 pl-0">
          <label for="validationDefault04">{props.FormPhone}</label>
          <input type="tel" className="form-control-border" id="validationDefault04" placeholder={props.FormPhonePlaceholder} required />
        </div>
      </div>
      <button className='btn btn-succes mb-4' type="submit">{props.FormSent}</button>
    </form>
  </div>
)

export default Form
