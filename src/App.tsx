// import ListGroup from './components/ListGroup';
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function App() {
  const alert = (message: string, type: string) => {
    const alertPlaceholder = document.getElementById('myAlertPlaceholder');

    if (alertPlaceholder) {
      alertPlaceholder.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        ` <div>${message}</div>`,
        ` <button type="button" class="btn-close" onclick="getElementById('myAlertPlaceholder').innerHTML = ''" data-bs-dismiss="alert" aria-label="Close"></button>`,
        '</div>'
      ].join('');
    }
  }

  return (
    <div className="container-fluid mt-3">
      <div id="myAlertPlaceholder"></div>
      <Button color="danger" onClick={() => alert("What the hell have you done?", "danger")}>WTF?</Button>
      <Button onClick={() => alert("I mean, was this really necessary?", "secondary")}>Meh</Button>
      <Button color="success" onClick={() => alert("Would you ever have expected this to work?", "success")}>Gratz</Button>
    </div>
  );
}

