import { FC, useEffect } from 'react';
import styles from './Wheel.module.css';

export const Wheel: FC = () => {
  useEffect(() => {
    const sectors = [
      { color: '#f82', label: 'Stack' },
      { color: '#0bf', label: '10' },
      { color: '#fb0', label: '200' },
      { color: '#0fb', label: '50' },
      { color: '#b0f', label: '100' },
      { color: '#f0b', label: '5' },
      { color: '#bf0', label: '500' },
    ];

    // Generate random float in range min-max:
    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    // Fix negative modulo stackoverflow.com/a/71167019/383904
    const mod = (n: number, m: number) => ((n % m) + m) % m;

    const tot = sectors.length;
    const elSpin: any = document.querySelector('#spin');
    const elWheel: any = document.querySelector('#wheel');
    const ctx = elWheel.getContext('2d');
    const dia = 300;

    ctx.canvas.width = dia;
    ctx.canvas.height = dia;

    const rad = dia / 2;
    const PI = Math.PI;
    const TAU = 2 * PI;
    const arc = TAU / tot;
    const angOffset = TAU * 0.75; // needle is north

    let sectorIndex = 0; // Current sector index
    let oldAng = 0;
    let ang = 0; // Angle rotation in radians

    let spinAnimation: any = null;
    let animationFrameId: any;

    //* Get index of current sector */
    const getIndex = (ang: number) =>
      Math.floor(tot - (mod(ang, TAU) / TAU) * tot) % tot;

    //* Draw sectors and prizes texts to canvas */
    const drawSector = (sector: any, i: number) => {
      const ang = arc * i;
      ctx.save();
      // COLOR
      ctx.beginPath();
      ctx.fillStyle = sector.color;
      ctx.moveTo(rad, rad);
      ctx.arc(rad, rad, rad, ang, ang + arc);
      ctx.lineTo(rad, rad);
      ctx.fill();
      // TEXT
      ctx.translate(rad, rad);
      ctx.rotate(ang + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${26 * arc}px sans-serif`;
      ctx.fillText(sector.label, rad - 10, 10);
      //
      ctx.restore();
    };

    const update = () => {
      const currentProgress =
        spinAnimation?.effect.getComputedTiming().progress ?? 0;

      const angDiff = ang - oldAng;
      const angCurr = angDiff * currentProgress;
      const angAbs = mod(oldAng + angCurr, TAU);

      const sectorIndexNew = getIndex(angAbs);
      if (sectorIndex !== sectorIndexNew) {
        // Sector changed! Make a tick sound
      }
      sectorIndex = sectorIndexNew;
      elSpin.textContent = sectors[sectorIndex].label;
      elSpin.style.background = sectors[sectorIndex].color;
    };

    const spin = (index: number, duration: number = 10000) => {
      // Remove this line if your slices (sectors)
      // are painted anti-clockwise
      index = tot - index;

      // Absolute current angle (without turns)
      oldAng = ang;
      const angAbs = mod(ang, TAU);

      // Absolute new angle
      let angNew = arc * index;
      // (backtrack a bit to not end on the exact edge)
      angNew -= rand(0, arc);
      // Fix negative angles
      angNew = mod(angNew, TAU);

      // Get the angle difference
      const angDiff = mod(angNew - angAbs, TAU);

      // Add N full revolutions
      const rev = TAU * Math.floor(rand(2, 4));

      ang += angDiff + rev;

      spinAnimation = elWheel.animate([{ rotate: `${ang + angOffset}rad` }], {
        duration: duration ?? rand(4000, 5000) * rev * 0.1,
        easing: 'cubic-bezier(0.2, 0, 0.1, 1)',
        fill: 'forwards',
      });

      spinAnimation.addEventListener(
        'finish',
        () => {
          spinAnimation = null;
          cancelAnimationFrame(animationFrameId);
          elSpin.textContent = 'Spin';
        },
        { once: true }
      );
    };

    const engine = () => {
      update();
      animationFrameId = requestAnimationFrame(engine);
    };

    elSpin.addEventListener('click', () => {
      if (spinAnimation) return; // Already animating
      engine(); // Start engine!
      spin(0);
    });

    // INIT!
    sectors.forEach(drawSector);
    update();
    spin(0, 0);
  });

  return (
    <div id='wheelOfFortune' className={styles.wheelOfFortune}>
      <canvas id='wheel' className={styles.wheel}></canvas>
      <div id='spin' className={styles.spin}>
        SPIN
      </div>
    </div>
  );
};
