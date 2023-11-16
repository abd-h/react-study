import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

import './index.css'
function App() {
  return (
    <div className="App">
      <Player />
      <div id="challenges">
        <TimerChallenge title='easy' targetTime={1} />
        <TimerChallenge title='Not easy' targetTime={5} />
        <TimerChallenge title='getting tough' targetTime={10} />
        <TimerChallenge title='Pros only' targetTime={15} />
      </div>
    </div>
  );
}

export default App;
