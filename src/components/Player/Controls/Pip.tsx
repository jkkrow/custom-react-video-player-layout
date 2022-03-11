import Btn from './Btn';
import { ReactComponent as PipInIcon } from 'icons/pip-in.svg';

const Pip: React.FC = () => {
  return (
    <Btn label="Picture in Picture" onClick={() => {}}>
      <PipInIcon />
    </Btn>
  );
};

export default Pip;
