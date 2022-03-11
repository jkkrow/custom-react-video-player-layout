import Btn from './Btn';
import { ReactComponent as VolumeIcon } from 'icons/volume-high.svg';

const Volume: React.FC = () => {
  return (
    <div className="vp-volume">
      <Btn onClick={() => {}}>
        <VolumeIcon />
      </Btn>
      <div className="vp-volume__range">
        <div className="vp-volume__range--background" />
        <div className="vp-volume__range--current">
          <div className="vp-volume__range--current__thumb" />
        </div>
        <input
          className="vp-volume__range--seek"
          type="range"
          max="1"
          step="0.05"
        />
      </div>
    </div>
  );
};

export default Volume;
