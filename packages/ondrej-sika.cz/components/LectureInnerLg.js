import React from 'react'


class LectureInnerLg extends React.Component {
  render() {
    var box = {
      flex: '0 0 20%',
      maxWidth: '20%',
      backgroundColor: this.props.background,
    }
    var img = {
      width: '80%',
      margin: 'auto',
      padding: '15px',
      display: 'inherit',
    }
    return (
      <div style={box}>
        <a className="lectureBar" href={this.props.link}>
          <h4 className='text-center pt-3'>{this.props.title}</h4>
        </a>
        <a href={this.props.link} >
          <div>
            <img src={this.props.image} style={img} className='img img-fluid center' />
          </div>
        </a>
      </div>
    )
  }
}

export default LectureInnerLg
