import { useState } from "react";

type DuckSurvey = {
  review: string;
  email: string;
  username: string;
  consistency: number;
  colour: number;
  logo: number;
  bestFeatures: string[];
  worstFeatures: string[];
  timeSpent: string[];
};

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  const [survey, setSurvey] = useState<DuckSurvey>({
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: [],
  });

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <div className="answer">
          <h3>{survey.username} said:</h3>
          <p>
            What would you say that are the best features of your rubber duck?
          </p>
          <ul>
            {survey.bestFeatures.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          {/* <ul>
            <li>It's yellow!</li>
          </ul> */}

          <p>What would you say are the worst nags of your rubber duck?</p>
          <ul>
            {survey.worstFeatures.map((item) => (
              <li>{item}</li>
            ))}
            {/* <li>It has a logo!</li> */}
          </ul>

          <p>How do you rate your rubber duck consistency?</p>
          <span>{survey?.consistency}</span>

          <p>How do you rate your rubber duck colour?</p>
          <span>{survey?.colour}</span>

          <p>How do you rate your rubber duck logo?</p>
          <span>{survey?.logo}</span>

          <p>How do you like to spend time with you rubber duck?</p>
          <ul>
            {survey.timeSpent.map((item) => (
              <li>{item}</li>
            ))}
            {/* <li>Bathing</li>
            <li>Chatting</li>
            <li>Swimming</li> */}
          </ul>

          <p>What else have you got to say about your rubber duck?</p>
          <span>{survey?.review}</span>
        </div>
      </section>
      <section className="main__form">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();

            let newSurvey = {
              review: event.target.comment.value,
              email: event.target.email.value,
              username: event.target.name.value,
              consistency: Number(event.target.consistency.value),
              colour: Number(event.target.colour_rate.value),
              logo: Number(event.target.logo_rate.value),
              bestFeatures: [
                ...document.querySelectorAll(
                  'input[name="best_features"]:checked'
                ),
              ].map((input) => input.value),
              worstFeatures: [
                ...document.querySelectorAll(
                  'input[name="worst_features"]:checked'
                ),
              ].map((input) => input.value),
              timeSpent: [
                ...document.querySelectorAll('input[name="activity"]:checked'),
              ].map((input) => input.value),
            };

            setSurvey(newSurvey);
          }}
        >
          <h2>Tell us what you think about your rubber duck!</h2>
          <h3>
            What would you say that are the best features of your rubber duck?
          </h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" name="best_features" value="colour" />
                It's yellow!
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="best_features" value="sound" />
                It squeaks!
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="best_features" value="logo" />
                It has a logo!
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="best_features" value="size" />
                Its big!
              </label>
            </li>
          </ul>
          <h3>
            What would you say that are the worst bits of your rubber duck?
          </h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" name="worst_features" value="colour" />
                It's yellow!
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="worst_features" value="sound" />
                It squeaks!
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="worst_features" value="logo" />
                It has a logo!
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="worst_features" value="size" />
                Its big!
              </label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck consistency?</h3>
          <ul className="form__group radio">
            <li>
              <input
                id="consistency-1"
                type="radio"
                name="consistency"
                value="1"
                // required
              />
              <label htmlFor="consistency-1">1</label>
            </li>

            <li>
              <input
                id="consistency-2"
                type="radio"
                name="consistency"
                value="2"
              />
              <label htmlFor="consistency-2">2</label>
            </li>

            <li>
              <input
                id="consistency-3"
                type="radio"
                name="consistency"
                value="3"
              />
              <label htmlFor="consistency-3">3</label>
            </li>

            <li>
              <input
                id="consistency-4"
                type="radio"
                name="consistency"
                value="4"
              />
              <label htmlFor="consistency-4">4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck colour?</h3>
          <ul className="form__group radio">
            <li>
              <input
                id="colour_rate-1"
                type="radio"
                name="colour_rate"
                value="1"
                // required
              />
              <label htmlFor="colour_rate-1">1</label>
            </li>

            <li>
              <input
                id="colour_rate-2"
                type="radio"
                name="colour_rate"
                value="2"
              />
              <label htmlFor="colour_rate-2">2</label>
            </li>

            <li>
              <input
                id="colour_rate-3"
                type="radio"
                name="colour_rate"
                value="3"
              />
              <label htmlFor="colour_rate-3">3</label>
            </li>

            <li>
              <input
                id="colour_rate-4"
                type="radio"
                name="colour_rate"
                value="4"
              />
              <label htmlFor="colour_rate-4">4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck logo?</h3>
          <ul className="form__group radio">
            <li>
              <input
                id="logo_rate-1"
                type="radio"
                name="logo_rate"
                value="1"
                // required
              />
              <label htmlFor="logo_rate-1">1</label>
            </li>

            <li>
              <input id="logo_rate-2" type="radio" name="logo_rate" value="2" />
              <label htmlFor="logo_rate-2">2</label>
            </li>

            <li>
              <input id="logo_rate-3" type="radio" name="logo_rate" value="3" />
              <label htmlFor="logo_rate-3">3</label>
            </li>

            <li>
              <input id="logo_rate-4" type="radio" name="logo_rate" value="4" />
              <label htmlFor="logo_rate-4">4</label>
            </li>
          </ul>

          <h3>How do you like to spend time with your rubber duck</h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" name="activity" value="swimming" />
                Swimming
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="activity" value="bathing" />
                Bathing
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="activity" value="chatting" />
                Chatting
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="activity" value="no-activity" /> I
                don't like to spend time with it
              </label>
            </li>
          </ul>

          <label>
            What else have you got to say about your rubber duck?
            <textarea name="comment" required minLength={7} />
          </label>

          <label>
            Put your name here (if you feel like it):
            <input type="text" name="name" />
          </label>

          <label>
            Leave us your email pretty please??
            <input type="email" name="email" />
          </label>

          <button className="form__submit">Submit Survey!</button>
        </form>
      </section>
    </main>
  );
}

export default Main;
