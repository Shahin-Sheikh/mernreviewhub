import React from 'react';
import './Video.css';
import ReactPlayer from 'react-player';

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      url: 'https://www.youtube.com/watch?v=8zBAw3_AXe8',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ url: this.state.inputValue });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <form onSubmit={this.handleSubmit}>
              <h1 style={({ left: '410px' }, { color: '#F5C518' })}>
                Watch New Movie/Trailer
              </h1>
            </form>
          </div>
          <ReactPlayer url={this.state.url} controls={true} />
        </header>
      </div>
    );
  }
}

export default Video;
