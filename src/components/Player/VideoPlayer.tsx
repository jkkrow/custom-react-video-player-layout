import { useState, useCallback } from 'react';

import Playback from './UI/Controls/Playback';
import Skip from './UI/Controls/Skip';
import Rewind from './UI/Controls/Rewind';
import Volume from './UI/Controls/Volume';
import Progress from './UI/Controls/Progress';
import Time from './UI/Controls/Time';
import Pip from './UI/Controls/Pip';
import Fullscreen from './UI/Controls/Fullscreen';
import Settings from './UI/Controls/Settings';
import Dropdown from './UI/Controls/Dropdown';
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
