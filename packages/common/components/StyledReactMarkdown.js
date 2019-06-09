import ReactMarkdown from 'react-markdown'

const StyledReactMarkdown = (props) => (
  <div style={props.style} className={props.className}>
    <ReactMarkdown source={props.source} escapeHtml={false}/>
  </div>
)
export default StyledReactMarkdown
