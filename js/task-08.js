const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const dataToSend = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    if (value.length == 0) {
      alert("Please fill in all form fields!");
      return;
    } else {
      dataToSend[name] = value;
    }
  });
  if (dataToSend["email"] && dataToSend["password"]) {
    console.log(dataToSend);
    formRef.reset();
  }
}
