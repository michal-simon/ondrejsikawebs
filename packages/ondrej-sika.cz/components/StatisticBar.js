const StatisticBar = (props) => (
    <div className='bar-grey-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h2 className='text-center text-white text-huge'>{props.NumberOfPeople}</h2>
            <p className='text-white text-center'>{props.NumberOfPeopleHeader}</p>

          </div>
          <div className='col-4'>
            <h2 className='text-white text-center text-huge'>{props.NumberOfCompanies}</h2>
            <p className='text-white text-center'>{props.NumberOfCompaniesHeader}</p>
          </div>
          <div className='col-4'>
            <h2 className='text-center text-white text-huge'>{props.NumberOfLectures}</h2>
            <p className='text-white text-center'>{props.NumberOfLecturesHeader}</p>
          </div>
        </div>
      </div>
    </div>
)

export default StatisticBar