const Progress: React.FC = () => {
  return (
    <div className="vp-progress">
      <div className="vp-progress__range">
        <div className="vp-progress__range--background" />
        <div className="vp-progress__range--buffer" />
        <div className="vp-progress__range--current">
          <div className="vp-progress__range--current__thumb" />
        </div>
        <input className="vp-progress__range--seek" type="range" step="any" />
      </div>

      <span className="vp-progress__tooltip">00:00</span>
    </div>
  );
};

export default Progress;
