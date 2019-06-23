const TextWithImg = (props) => (
  <div>
    <h3 className='pt-4 pb-2' id='about-me'>{props.TextWithImgHeader}</h3>
    <div className='row'>
      <div className='col-lg-7 col-md-12'>
        <p>{props.children}</p>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-9 col-9'>
        <img src={props.img} className='img-fluid img-size-90'/>
      </div>
      <div className='col-1'>
        <a href='https://www.linkedin.com/in/ondrejsika/'><img src={props.linkedin}/></a>
        <a href='https://twitter.com/ondrejsika'><img src={props.twitter}/></a>
        <a href='https://www.instagram.com/ondrejsika/'><img src={props.instagram}/></a>
        <a href='https://www.facebook.com/sikaondrej'><img src={props.facebook}/></a>
        <a href='https://github.com/ondrejsika'><img src={props.github}/></a>
        <a href='mailto:ondrej@ondrejsika.com'><img src={props.mail}/></a>
      </div>
    </div>
  </div>
)

export default TextWithImg
