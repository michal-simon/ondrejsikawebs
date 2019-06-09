var color = {
  background: '#00212C',
}

const IntroBar = (props) => (
  <div className='d-none d-lg-block d-xl-block' style={ color } >
    <div className='container pt-4 pb-3 text-white'>
      {props.children}
    </div>
  </div>
)

export default IntroBar
