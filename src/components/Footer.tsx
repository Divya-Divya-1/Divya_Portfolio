const Footer = () => {
  return (
    <footer className="border-t border-border/80 mt-8">
      <div className="section-padding py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-sans text-foreground">© 2026 Fnu Divya</p>
            <p className="text-xs font-sans text-muted-foreground mt-1">
              Built with focus on security, systems, and clean engineering.
            </p>
          </div>

          <p className="text-[10px] font-mono text-text-dim tracking-[0.18em] uppercase">
            USA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;