import { useBluetooth } from '@web/hooks/use-bluetooth';
import { AppLayout } from '@web/layout/AppLayout';
import { NextPage } from 'next';
import { useState } from 'react';

export const BluetoothPage: NextPage = () => {
  const bluetooth = useBluetooth();

  const [devices, setDevices] = useState<any[]>([]);

  if (!bluetooth) {
    return (
      <AppLayout full nav>
        <div className='flex h-full items-center justify-center'>
          <div className='text-center text-xl uppercase'>
            Web Bluetooth is Unavailable
          </div>
        </div>
      </AppLayout>
    );
  }

  const getDevices = async () => {
    const devices = await bluetooth.getDevices();
    setDevices(devices);
  };

  return (
    <AppLayout nav>
      <div className='container mx-auto'>
        <div className='p-4 md:p-8'>
          <div className='rounded-lg border border-base-content'>
            <div className='p-4'>
              <div className='flex items-center justify-between'>
                <p>Devices</p>
                <button
                  type='button'
                  className='btn btn-outline btn-sm'
                  onClick={() => getDevices()}>
                  Get
                </button>
              </div>
            </div>
            {devices.map((device) => {
              return (
                <div key={device.id} className='p-4'>
                  <div></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BluetoothPage;
