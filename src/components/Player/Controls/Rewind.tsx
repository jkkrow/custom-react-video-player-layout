import Btn from './Btn';
import { ReactComponent as TrackRewindIcon } from 'icons/track-rewind.svg';

const Rewind: React.FC = () => {
  return (
    <Btn label="- 10 seconds" onClick={() => {}}>
      <TrackRewindIcon />
    </Btn>
  );
};

export default Rewind;
