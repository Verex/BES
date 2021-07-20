import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import ReactPlayer from 'react-player';

interface Props {}

interface State {
  videoStream: MediaStream | null;
  videoPlaying: boolean;
}
class Application extends React.Component<Props, State> {

  videoPlayer: ReactPlayer | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      videoStream: null,
      videoPlaying: true
    };
  }

  componentDidMount() {
    //this.getMedia();
  }

  getMedia = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    this.setState({ videoStream: stream, videoPlaying: true });
  };

  render() {
    return (
      <ReactPlayer
        url={this.state.videoStream ? this.state.videoStream : "https://www.youtube.com/watch?v=m_ZW1mxGh0s"}
        playing={this.state.videoPlaying}
        width="100%"
        height="100%"
        ref={ref => this.videoPlayer = ref}
      />
    );
  }
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Application} />
      </Switch>
    </Router>
  );
}
