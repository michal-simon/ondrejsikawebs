import React from 'react'

var Align = {
  textAlign: 'center',
  fontSize: '35px',
}
const LectureOuterLg = (props) => (
  <div className='d-none d-lg-block'>
    <h3 className='pt-4 pb-2' style={ Align }>{props.LectureImgHeader}</h3>
    <div className="container-flex banner-courses">
      <div className="d-flex row flex-row">
        {props.children}
      </div>
    </div>
  </div>
)

export default LectureOuterLg
