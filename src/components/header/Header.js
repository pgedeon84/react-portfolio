import TypedReactDemo from "../utilities/TypedReactDemo";

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="main-info">
          <h1>Web and App Development for you</h1>
          <TypedReactDemo
            strings={[
              "^1200 Need a Web or App Design?",
              "^900 Need E-Commerce Services?",
              "^900 Need an E-Portfolio for your Company?",
              "^900 We've got you covered",
            ]}
          />
          <a href="#" className="btn-main-offer">
            contact us
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
