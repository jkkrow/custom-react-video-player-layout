import { useState, useCallback, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as ArrowLeftIcon } from 'icons/arrow-left.svg';

interface DropdownProps {
  on: boolean;
  onClose: (on: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ on, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isIndex, setIsIndex] = useState(true);
  const [activeMenu, setActiveMenu] = useState<'resolution' | 'speed'>('speed');
  const [dropdownHeight, setDropdownHeight] = useState<'initial' | number>(
    'initial'
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMounted) return;

    const outsideClickHandler = (event: MouseEvent) => {
      if (!isMounted || !dropdownRef || !dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target as Node)) {
        onClose(false);
      }
    };

    document.addEventListener('click', outsideClickHandler);

    return () => {
      document.removeEventListener('click', outsideClickHandler);
    };
  }, [isMounted, onClose]);

  useEffect(() => {
    if (!on) return;

    const dropdown = dropdownRef.current!;
    const dropdownMenu = dropdown.firstChild as HTMLElement;

    setDropdownHeight(dropdownMenu?.offsetHeight || 'initial');
  }, [on]);

  const selectMenuHandler = useCallback(
    (activeMenu: 'resolution' | 'speed') => {
      setIsIndex(false);
      setActiveMenu(activeMenu);
    },
    []
  );

  const dropdownEnteredHandler = useCallback(() => {
    setIsMounted(true);
  }, []);

  const dropdownExitedHandler = useCallback(() => {
    setIsMounted(false);
    setIsIndex(true);
    setDropdownHeight('initial');
  }, []);

  const calcHeight = useCallback((element) => {
    setDropdownHeight(element.offsetHeight);
  }, []);

  const indexMenu = (
    <div className="vp-dropdown__menu">
      <ul className="vp-dropdown__list">
        <li
          className="vp-dropdown__item"
          onClick={() => selectMenuHandler('speed')}
        >
          <span>Speed</span>
          <span>x 1</span>
        </li>
        <li
          className="vp-dropdown__item"
          onClick={() => selectMenuHandler('resolution')}
        >
          <span>Resolution</span>
          <span>1080p</span>
        </li>
      </ul>
    </div>
  );

  const menuList = (
    <div className="vp-dropdown__menu">
      <div className="vp-dropdown__label" onClick={() => setIsIndex(true)}>
        <ArrowLeftIcon />
        <span>
          {activeMenu === 'speed' && 'Speed'}
          {activeMenu === 'resolution' && 'Resolution'}
        </span>
      </div>
      <ul className="vp-dropdown__list">
        {activeMenu === 'speed' &&
          [0.5, 0.75, 1, 1.25, 1.5].map((playbackRate) => (
            <li
              key={playbackRate}
              className={`vp-dropdown__item${
                playbackRate === 1 ? ' active' : ''
              }`}
              onClick={() => setIsIndex(true)}
            >
              {playbackRate}
            </li>
          ))}
        {activeMenu === 'resolution' &&
          [540, 720, 1080].map((resolution) => (
            <li
              key={resolution}
              className={`vp-dropdown__item${
                resolution === 1080 ? ' active' : ''
              }`}
              onClick={() => setIsIndex(true)}
            >
              {resolution}
            </li>
          ))}
      </ul>
    </div>
  );

  return (
    <CSSTransition
      in={on}
      classNames="vp-dropdown"
      timeout={200}
      mountOnEnter
      unmountOnExit
      onEntered={dropdownEnteredHandler}
      onExited={dropdownExitedHandler}
    >
      <div
        className="vp-dropdown"
        ref={dropdownRef}
        style={{ height: dropdownHeight }}
      >
        <CSSTransition
          in={isIndex}
          classNames="menu-index"
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={calcHeight}
        >
          {indexMenu}
        </CSSTransition>

        <CSSTransition
          in={!isIndex}
          classNames="menu-main"
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={calcHeight}
        >
          {menuList}
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Dropdown;
