import { Wave } from '.';

export function BlueWaves() {
  return (
    <div className="hidden -z-10 xl:block">
      <Wave
        id="wave1"
        style={{
          transform: 'rotate(0deg)',
          transition: '0.3s',
          bottom: '-40px',
          position: 'absolute',
          width: '100%',
          height: 'auto',
          zIndex: -1,
        }}
        viewBox="10 10 860 490"
        opacity={1}
        color="--blue"
      />
      <Wave
        id="wave1"
        style={{
          transform: 'rotate(0deg)',
          transition: '0.3s',
          bottom: '-40px',
          position: 'absolute',
          width: '100%',
          height: 'auto',
          zIndex: -1,
        }}
        viewBox="10 10 1150 490"
        opacity={1}
        color="--blue-wave-1"
      />
      <Wave
        id="wave1"
        style={{
          transform: 'rotate(0deg)',
          transition: '0.3s',
          bottom: '-40px',
          position: 'absolute',
          width: '100%',
          height: 'auto',
          zIndex: -1,
        }}
        viewBox="10 10 1050 490"
        opacity={1}
        color="--blue-wave-2"
      />
      <Wave
        id="wave3"
        style={{
          transform: 'rotate(180deg)',
          transition: '0.3s',
          bottom: '-210px',
          position: 'absolute',
          width: '100%',
          height: 'auto',
          zIndex: -3,
        }}
        viewBox="0 80 1300 190"
        opacity={1}
        color="--blue"
      />
      <Wave
        id="wave3"
        style={{
          transform: 'rotate(180deg)',
          transition: '0.3s',
          bottom: '-150px',
          position: 'absolute',
          width: '100%',
          height: 'auto',
          zIndex: -3,
        }}
        viewBox="0 80 1300 190"
        opacity={1}
        color="--blue-wave-1"
      />
      <Wave
        id="wave3"
        style={{
          transform: 'rotate(180deg)',
          transition: '0.3s',
          bottom: '-110px',
          position: 'absolute',
          width: '100%',
          height: 'auto',
          zIndex: -3,
        }}
        viewBox="0 80 1300 190"
        opacity={1}
        color="--blue-wave-2"
      />
    </div>
  );
}
