const Header: React.FC<{ children: string; }> = ({ children }) => {
  return (
    <div className="text-center bg-[#08913F] text-white text-2xl py-4">
      {children}
    </div>
  );
};

export default Header;
