const Layout = ({
  children,
  Players,
  Standings,
}: {
  children: React.ReactNode;
  Players: React.ReactNode;
  Standings: React.ReactNode;
}) => {
  return (
    <>
      <h4>Team Layout</h4>
      {children}
      {Players}
      {Standings}
    </>
  );
};

export default Layout;
