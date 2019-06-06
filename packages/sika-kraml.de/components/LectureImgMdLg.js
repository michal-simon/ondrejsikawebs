const LectureImgMdLg = (props) => (
  <div style={{
    borderRadius: 0,
    borderWidth: 2,
    borderColor: '#328496',
  }}>
    <a href={props.link}>
      <h2 className='text-center'>{props.title}</h2>
    </a>
    <a href={props.link}>
      <img src={props.image} style={{ width: '100px' }} className='img img-fluid' />
    </a>
  </div>
)

export default LectureImgMdLg
