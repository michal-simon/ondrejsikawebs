const LectureImg = (props) => {
  <div className='d-none d-md-block d-lg-none'>
    <h3 className='pt-4 pb-2'>{props.title}</h3>
    <div className="container-flex banner-courses">
      <div className="d-flex row">
        <div className="box col-12">
          <div className='row'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default LectureImg
