import Translate from '@app/common/components/Translate'

const MyClients = (props) => (
  <div>
    <div className="card p-3 mb-4">
      <h3>
        <Translate
          lang={props.lang}
          en="My Clients"
          de="My Clients"
          cs="Moji nejvýznamější klienti"
        />
      </h3>
      <div className="d-flex row text-center pt-3 pb-3">
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={props.image1} className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={props.image2} className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={props.image3} className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={props.image4} className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={props.image5} className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={props.image6}  className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
)
export default MyClients
