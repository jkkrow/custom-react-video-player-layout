import Btn from './Btn';
import { ReactComponent as TrackSkipIcon } from 'icons/track-skip.svg';

const Skip: React.FC = () => {
  return (
    <Btn label="+ 10 seconds" onClick={() => {}}>
      <TrackSkipIcon />
    </Btn>
  );
};

export default Skip;
