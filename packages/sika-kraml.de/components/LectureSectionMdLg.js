const LectureSectionMdLg = (props) => (
  <div className='d-none d-md-block d-lg-block'>
    <h3 className='pt-4 pb-2'>{props.LectureImgHeader}</h3>
    <div className="container-flex banner-courses">
      <div className="d-flex flex-row">
        {props.children}
      </div>
    </div>
  </div >
)

export default LectureSectionMdLg
