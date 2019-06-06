const IntroBar = (props) => (
  <div className='d-none d-lg-block d-xl-block' style={{background: '#63ccc9'}} >
    <div className='container pt-4 pb-3 text-white'>
      {props.children}
    </div>
  </div>
)

export default IntroBar
