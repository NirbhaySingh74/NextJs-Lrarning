const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="text-center p-3">20% off for 3 days</div>
      {children}
    </div>
  );
};

export default layout;
