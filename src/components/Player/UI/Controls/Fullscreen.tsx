import Btn from './Btn';
import { ReactComponent as FullscreenIcon } from 'icons/fullscreen.svg';

const Fullscreen: React.FC = () => (
  <Btn label="Fullscreen" onClick={() => {}}>
    <FullscreenIcon />
  </Btn>
);

export default Fullscreen;
