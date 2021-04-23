import TypedReactDemo from "../../utilities/TypedReactDemo";

function HeaderSection() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="main-info">
          <h1>Web and App Development for you</h1>
          <TypedReactDemo
            strings={[
              "^1000 Need an App or a Website?",
              "Need E-Commerce services?",
              "Need an online Portfolio for your Company?",
              "We've got you covered!",
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

export default HeaderSection;
