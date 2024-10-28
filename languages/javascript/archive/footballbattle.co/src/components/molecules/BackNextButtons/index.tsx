export type NextBackButtonsProps = {
  back?: boolean;
  next?: boolean;
};

const NextBackButtons: React.FC<NextBackButtonsProps> = ({
  next = true,
  back = true,
}) => {
  return (
    <div className="py-8">
      <div className="flex justify-center items-center gap-8">
        {back && <div className="font-abel text-lg">&larr; Back</div>}
        {next && <div className="font-abel text-lg">Next &rarr;</div>}
      </div>
    </div>
  );
};

export default NextBackButtons;
