//Import components
import App from "./components/App/App.js";

//Aufruf Funktionen
// Header();
// handleFormSubmit(parameter);
// Form();
// Bookmark(props);
// Card(props);
// CardList();
// App();

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
