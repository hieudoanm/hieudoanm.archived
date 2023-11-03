export const InternalServerErrorTemplate: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-9xl font-bold">500</h1>
      <p className="text-4xl">Internal Server Error</p>
    </div>
  );
};

InternalServerErrorTemplate.displayName = 'InternalServerErrorTemplate';

export default InternalServerErrorTemplate;
