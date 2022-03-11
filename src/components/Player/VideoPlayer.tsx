import { useState, useCallback } from 'react';

import Playback from './Controls/Playback';
import Skip from './Controls/Skip';
import Rewind from './Controls/Rewind';
import Volume from './Controls/Volume';
import Progress from './Controls/Progress';
import Time from './Controls/Time';
import Pip from './Controls/Pip';
import Fullscreen from './Controls/Fullscreen';
import Settings from './Controls/Settings';
import Dropdown from './Controls/Dropdown';
import './VideoPlayer.css';

const VideoPlayer: React.FC = () => {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const toggleDropdownHandler = useCallback(() => {
    setDisplayDropdown((prev) => !prev);
  }, []);

  return (
    <div className="vp-container">
      <video controls={false} />
      <div className="vp-controls">
        <Dropdown on={displayDropdown} onClose={setDisplayDropdown} />
        <div className="vp-controls__header">
          <Time />
          <Progress />
          <Time />
        </div>
        <div className="vp-controls__body">
          <div>
            <Volume />
          </div>
          <div>
            <Rewind />
            <Playback />
            <Skip />
          </div>
          <div>
            <Settings onToggle={toggleDropdownHandler} />
            <Pip />
            <Fullscreen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
