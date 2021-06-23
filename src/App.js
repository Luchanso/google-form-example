import "./styles.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz7M7Ef5mvW_-rJ2h_U7XQKBdh1r_bfQ9-3tzQlctTB7lNnd06dnX_LNDB_75K8dl4w/exec";

export default function App() {
  const handleClick = () => {
    const form = new FormData();
    form.append("email", "hello@world.com");
    fetch(SCRIPT_URL, { method: "POST", body: form })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <button onClick={handleClick}>test</button>
    </div>
  );
}
