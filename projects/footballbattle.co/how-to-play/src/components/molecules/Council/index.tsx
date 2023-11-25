import React from 'react';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sprite from '../../atoms/Sprite';

const StyledCouncilor = styled.div`
  background-image: url(/how-to-play/en/images/join-our-community/member.png);
  background-size: 100% 100%;
`;

const Councilor: React.FC<{
  image: string;
  title: string;
  role: string;
  detail: React.ReactNode;
}> = ({ image, title, role, detail = <></> }) => {
  return (
    <div>
      <div className="px-12 md:p-0">
        <StyledCouncilor className="bg-no-repeat">
          <div
            className="bg-cover"
            style={{
              paddingBottom: '100%',
              backgroundImage: `url(${image})`
            }}
          />
          <div className="px-4 pt-6 pb-4">
            <div className="mb-1">
              <h3 className="truncate font-karma text-xs md:text-sm text-white">
                {title}
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <p className="truncate font-karma text-xs md:text-sm text-[#FFC815]">
                {role}
              </p>
              <Sprite
                image="/how-to-play/en/images/join-our-community/view.svg"
                className="w-4 h-4 bg-contain bg-center bg-no-repeat"
              />
            </div>
          </div>
        </StyledCouncilor>
      </div>
      <div className="mt-4 block md:hidden text-center text-white font-karma">
        {detail}
      </div>
    </div>
  );
};

const CouncilSwiper: React.FC<{
  navigation: boolean | Record<string, string>;
  slidesPerView: number;
}> = ({ navigation, slidesPerView }) => {
  return (
    <div className="px-0 md:px-16 overflow-hidden">
      <Swiper
        id={`swiper-${slidesPerView}`}
        slidesPerView={slidesPerView}
        spaceBetween={32}
        slidesPerGroup={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={navigation}
        modules={[Pagination, Navigation]}
        onActiveIndexChange={(swiper) => {
          const { activeIndex, slides } = swiper;
          for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            if (activeIndex <= i && i < activeIndex + slidesPerView) {
              const { classList } = slide;
              classList.add(`swiper-slide-display-${slidesPerView}`);
              slide.setAttribute('class', `${classList}`);
            } else {
              const { classList } = slide;
              classList.remove(`swiper-slide-display-${slidesPerView}`);
              slide.setAttribute('class', `${classList}`);
            }
          }
        }}
      >
        <SwiperSlide>
          <Councilor
            image="/how-to-play/en/images/join-our-community/yolo.png"
            title="Yolo Investments Ltd"
            role="Investor"
            detail={
              <>
                <p className="mb-4">
                  Yolo Investment is a UK-based venture capital, focused on
                  seed- and A-stage investment opportunities across gaming and
                  fintech. They invested in many Web3 projects and have
                  extensive network in sport network, especially football. Yolo
                  Investments fund 5 currently has 8 investments.
                </p>
                <p>
                  <a
                    href="https://yolo.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    https://yolo.io/
                  </a>
                </p>
              </>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Councilor
            image="/how-to-play/en/images/join-our-community/acer.png"
            title="ACEStater Finance"
            role="Investor"
            detail={
              <>
                <p className="mb-4">
                  AceStarter is the next-generation launchpad that curates and
                  launches world-class crypto projects on a global scale. Based
                  on a community-centric model, demonstrated by the fair launch
                  of its very own token, AceStarter.
                </p>
                <p>
                  <a
                    href="https://acestarter.finance/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    https://acestarter.finance/
                  </a>
                </p>
              </>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Councilor
            image="/how-to-play/en/images/join-our-community/pnb.png"
            title="PNB Holdings"
            role="Investor"
            detail={
              <>
                <p className="mb-4">
                  PNB Holdings is an Investment Fund in Vietnam that focuses on
                  growing Technology, Entertainment, Media and Logistic/
                  Distribution Startups. PNB Holdings&apos;s ecosystem includes
                  energy-sharing startup Pinbus, Cititel Hotel Chain, Ravolution
                  Music Festival, Playground Asia Studio, and Scavi & Ray
                  Distribution Network.
                </p>
                <p>
                  <a
                    href="https://pnb.pinbus.vn/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    https://pnb.pinbus.vn/
                  </a>
                </p>
              </>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Councilor
            image="/how-to-play/en/images/join-our-community/tim.png"
            title="Tim Heath"
            role="Advisor"
            detail={
              <>
                <p className="mb-4">
                  Founder and Board Member of the Yolo Group, which operates
                  globally recognised gaming brands such as bitcasino.io and
                  sportsbet.io. Tim specialises in transforming ideas into
                  successful businesses, and has done so with such brands as the
                  innovative content aggregator Hub88.io, and the mobile -
                  focused games studio OneTouch.io.
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/tim-heath-55096b1/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    https://www.linkedin.com/in/tim-heath-55096b1/
                  </a>
                </p>
              </>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Councilor
            image="/how-to-play/en/images/join-our-community/anthony.png"
            title="Anthony Q"
            role="Advisor"
            detail={
              <>
                <p className="mb-4">
                  Anthony Q is a co-founder at Appota group & CSO @ AceStarter
                  Launchpad, has 17 years in deep operational, business
                  development, and fund-raising experience in Game Publishing,
                  Digital Content creation & distribution, eSports, and Digital
                  Payment.
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/quangrock/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    https://www.linkedin.com/in/quangrock/
                  </a>
                </p>
              </>
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const Council: React.FC = () => {
  return (
    <>
      <div className="opacity-100 md:opacity-0 h-auto md:h-0 overflow-visible md:overflow-hidden">
        <CouncilSwiper
          navigation={{
            nextEl: '.swiper-button-next-mobile',
            prevEl: '.swiper-button-prev-mobile'
          }}
          slidesPerView={1}
        />
        <div className="relative w-32	mx-auto">
          <div className="swiper-button-next-mobile z-10" />
          <div className="swiper-button-prev-mobile z-10" />
        </div>
      </div>
      <div className="opacity-0 md:opacity-100 h-0 md:h-auto overflow-hidden md:overflow-visible">
        <CouncilSwiper navigation={true} slidesPerView={5} />
      </div>
    </>
  );
};

export default Council;
