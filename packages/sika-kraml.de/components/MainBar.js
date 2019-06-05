const MainBar = (props) => (
  <div>
    <div className='main-bar' style={{background: '#05386B' }}>
      <div className='container pt-4 pb-4'>
        <h1 className='pt-3 pb-3 text-white'>{props.MainBarHeader}</h1>
        <h3 className='text-white'>{props.MainBarText}</h3>
        {props.children}
      </div>
    </div>
  </div>
)

export default MainBar
