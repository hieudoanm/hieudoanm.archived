import Sprite from '../../atoms/Sprite';

type BannerProps = {
  image: string;
  paddingBottom: string;
};

const Banner: React.FC<BannerProps> = ({ image, paddingBottom }) => {
  return (
    <div className="px-4">
      <div className="rounded-lg overflow-hidden">
        <Sprite
          image={image}
          style={{ paddingBottom: paddingBottom }}
          className="bg-cover bg-center"
        />
      </div>
    </div>
  );
};

export default Banner;
