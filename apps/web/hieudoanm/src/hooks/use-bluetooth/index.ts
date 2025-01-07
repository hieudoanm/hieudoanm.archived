import { useEffect, useState } from 'react';

export const useBluetooth = (): Bluetooth | false => {
  const [bluetooth, setBluetooth] = useState<Bluetooth | false>(false);

  useEffect(() => {
    if (
      !navigator ||
      !('bluetooth' in navigator) ||
      typeof navigator.bluetooth.getAvailability === 'undefined' ||
      typeof navigator.bluetooth.getDevices === 'undefined'
    ) {
      return setBluetooth(false);
    }
    setBluetooth(navigator.bluetooth);
  }, []);

  return bluetooth;
};
