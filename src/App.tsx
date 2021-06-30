import { useState } from "react";
import useKeyboardNavigation from "./useKeyboardNavigation";
import "./App.css";

enum FocusedElement {
  SEE_MORE = "see-more",
  WATCH = "watch",
}

function App() {
  const [focusedElement, setFocusedElement] = useState<FocusedElement>(
    FocusedElement.WATCH
  );

  useKeyboardNavigation({
    onLeft: () => {
      if (focusedElement === FocusedElement.SEE_MORE) {
        setFocusedElement(FocusedElement.WATCH);
      }
    },
    onRight: () => {
      if (focusedElement === FocusedElement.WATCH) {
        setFocusedElement(FocusedElement.SEE_MORE);
      }
    },
    onEnter: () => {
      console.log("clicked on: ", focusedElement);
    },
  });

  return (
    <div className="highlight">
      <img
        className="background"
        alt="background"
        src="http://s2.glbimg.com/TAOO1iLOGi8bZp9aBK_ZwSnDyWY=/1280x720/filters:quality(40)/https://s2.glbimg.com/n-LCVIa3YDauZjU21216WTU-3n0=/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/D/u/tWVoIuSXaRt2y2vzhw5Q/2021-1-1.jpg"
      />
      <div className="left-shadow" />
      <div className="informations">
        <img
          className="program-logo"
          alt="program logo"
          src="http://s2.glbimg.com/sQeU3ZOHruxJv1ZGdjE7Hx4xY6c=/0x110/https://s2.glbimg.com/fwqDn-w6sbyzweKnnaA8aIs6Pys=/fit-in/0x364/filters:fill(transparent)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/w/K/f2IIjRS2yKB3cNHhTlkg/2021-1-1.png"
        />
        <p className="description">
          Ela é um fenômeno! A história da paraibana que ganhou o Brasil e
          venceu o BBB21
        </p>
        <div>
          <button
            className={`button ${
              focusedElement === "watch" ? "focused" : null
            }`}
          >
            Assista
          </button>
          <button
            className={`button ${
              focusedElement === "see-more" ? "focused" : null
            }`}
          >
            Veja mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
