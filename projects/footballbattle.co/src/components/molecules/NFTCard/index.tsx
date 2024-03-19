import Card from '../../atoms/Card';
import Sprite from '../../atoms/Sprite';
import YellowButton from '../../atoms/YellowButton';

export type NFTCardProps = {
  title: string;
  description: string;
  action: string;
  href: string;
  image: string;
};

export const NFTCard: React.FC<NFTCardProps> = ({
  title,
  description,
  action,
  href,
  image,
}) => {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="order-2 md:order-1 col-span-1 md:col-span-3">
          <div className="flex flex-col h-full gap-y-4">
            <div className="flex-none">
              <h3 className="text-sm md:text-lg text-yellow text-center md:text-left">
                {title}
              </h3>
            </div>
            <div className="grow">
              <div className="flex items-center justify-center h-full">
                <p className="text-white font-karma text-xs md:text-base text-center md:text-left">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex-none">
              <div className="flex justify-center md:justify-start">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex">
                  <YellowButton>
                    <div className="text-darkRed">{action}</div>
                  </YellowButton>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-2">
          <Sprite
            title={action}
            image={image}
            className="w-full bg-center bg-contain bg-no-repeat"
            style={{ paddingBottom: '120%' }}
          />
        </div>
      </div>
    </Card>
  );
};

export default NFTCard;
