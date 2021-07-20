import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import ReactPlayer from 'react-player/youtube';

interface Props {}

interface State {
  videoStream: MediaStream | null;
}
class Application extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      videoStream: null,
    };
  }

  componentDidMount() {
    this.getMedia();
  }

  getMedia = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    this.setState({ videoStream: stream });
  };

  render() {
    if (!this.state.videoStream) {
      return <span>&#128512;</span>;
    }

    return (
      <ReactPlayer
        url={this.state.videoStream}
        playing={true}
        width="100%"
        height="100%"
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
