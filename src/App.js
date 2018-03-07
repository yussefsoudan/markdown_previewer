import React from 'react';
import './App.css';
import marked from 'marked';


class App extends React.Component 
{ 
  constructor(props)
  {
    super(props);
    this.state = 
    {
      markdown: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount()
  {
    this.setState({markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThis is a link to [Google](https://www.google.com)'});  
  }

  handleChange(e)
  {
    this.setState({markdown: e.target.value});
  }

  render() 
  {
    return (
      <div className = "row">
        <div className = "col-md-6">
          <textarea onChange = {this.handleChange}value = {this.state.markdown} rows = "20" />
        </div>
        <div className = "col-md-6">
            <div dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}}>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
