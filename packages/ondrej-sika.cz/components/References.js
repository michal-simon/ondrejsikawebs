const References = (props) => (
  <div>
    <div className='container border mb-4 mt-4'>
      <div className='row pt-3'>
        <div className='col-1 pt-2 d-none d-lg-block d-xl-block'>
          <img src='/static/putin.jpg' className='img-fluid rounded-circle'/>
        </div>
        <div className='col-3'>
          <h4 className='pt-2'><b>{props.NameRef1}</b></h4>
          <p className='mb-1'><b>{props.PositionRef1}</b></p>
          <p className='text-secondary'>{props.DateRef1}</p>
        </div>
        <div className='col-lg-8 col-md-9 col-sm-9 col-9'>
          <p>{props.TextRef}</p>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-1 pt-2 d-none d-lg-block d-xl-block'>
          <img src='/static/karel-marx.jpg' className='img-fluid rounded-circle'/>
        </div>
        <div className='col-3'>
          <h4 className='pt-2'><b>{props.NameRef2}</b></h4>
          <p className='mb-1'><b>{props.PositionRef2}</b></p>
          <p className='text-secondary'>{props.DateRef2}</p>
        </div>
        <div className='col-lg-8 col-md-9 col-sm-9 col-9'>
          <p>{props.TextRef}Školení na <a href='/docker'>Docker</a> od Ondřeje v ROOT.CZ bylo velice zajímavé a přínosné. Ondra toho zná opravdu dost a není problém se na cokoliv zeptat i z jiného tématu. Ke školení provozuje na Githubu spoustu příkladů, volně přístupné registry, blog a Slack. Není problém se na Ondru obrátit s dotazy i po školení. Zatím jedno z nejvíce profesionálních školení co jsem absolvoval.</p>
        </div>
      </div>
    </div>
  </div>
)

export default References
