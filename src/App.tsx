// import ListGroup from './components/ListGroup';
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function App() {
  const alertPlaceholder = document.getElementById('myAlertPlaceholder');

  const alert = (message: string, type: string) => {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      ` <div>${message}</div>`,
      ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('');

    alertPlaceholder?.append(wrapper);
  }

  return (
    <div className="container-fluid mt-3">
      <div id="myAlertPlaceholder"></div>
      <Button color="danger" onClick={() => { 
        alert("What the hell have you done?", "danger");
        console.log('click');
      }}>Crazy</Button>
      <Button onClick={() => alert("I mean, was this really necessary?", "secondary")}>Crazy</Button>
      <Button color="success" onClick={() => alert("Would you ever have expected this to work?", "success")}>Crazy</Button>
    </div>
  );
}

