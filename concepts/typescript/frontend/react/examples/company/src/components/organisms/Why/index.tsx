import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Container from '@mui/material/Container';
import Image from 'next/image';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';
import React from 'react';
import tabImage1 from '../../../assets/images/why/tab.png';
import Tabs from '../../atoms/Tabs';

export type Reason = {
  id: string;
  tab: string;
  title: string;
  description: string;
  items: string[];
};

export const Why: React.FC<{ reasons: Reason[]; }> = ({ reasons = [] }) => {
  return (
    <section id="why" className="py-8 md:py-16 why-container">
      <Container>
        <Tabs defaultActiveKey="tab-0" animated={{ tabPane: true }}>
          {reasons.map((reason: Reason) => {
            return (
              <TabPane key={`tab-${reason.tab}`} tab={reason.tab}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-1 pt-8">
                    <h2 className="text-2xl md:text-3xl mb-4 md:mb-8 font-bold">
                      {reason.title}
                    </h2>
                    <p className="text-base md:text-lg mb-4 md:mb-8">
                      {reason.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      {reason.items.map((item: string) => {
                        return (
                          <div key={item} className="flex items-center gap-2">
                            <CheckCircleRoundedIcon className="text-emerald-500" />
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-span-1 pt-8 px-8">
                    <Image src={tabImage1} alt="illustration" />
                  </div>
                </div>
              </TabPane>
            );
          })}
        </Tabs>
      </Container>
    </section>
  );
};

export default Why;
