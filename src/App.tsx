import "./App.css";

export const App = () => {
  return (
    <div className="main-container">
      <header className="App-header">
        <div className="header-bar">
          <div>
            <h1>Georgi Krastev</h1>
            <h3>Software developer</h3>
            <h4>
              <a
                href="https://www.linkedin.com/in/georgi-krastev-79259a124/"
                target="_blank"
              >
                LinkedIn
              </a>
            </h4>
            <h4>
              <a href="https://github.com/georgi-kr" target="_blank">
                Github
              </a>
            </h4>
          </div>
          <div className="avatar-container">
            <img
              className="avatar"
              src="avatar.jpeg"
              width={300}
              height={200}
            />
            <p>Sofia 2025</p>
          </div>
        </div>
        <p className="quote">Programming isn't about what you know.</p>
        <p className="quote">It's about what you can figure out. </p>
        <p className="quote">- Chris Pine</p>
      </header>
    </div>
  );
};
