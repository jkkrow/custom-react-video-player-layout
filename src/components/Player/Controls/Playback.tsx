import Btn from './Btn';
import { ReactComponent as PlayIcon } from 'icons/play.svg';

const Playback: React.FC = () => (
  <Btn label="Play" onClick={() => {}}>
    <PlayIcon />
  </Btn>
);

export default Playback;
