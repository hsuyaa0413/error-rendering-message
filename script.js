//When the user clicks the purchase button
//you have to render out "Something went wrong,
//please try again" in the paragraph that has id "error".

let errorMessage = document.getElementById("error")
function errorMsg() {
  errorMessage.textContent = "Something went wrong, please try again."
}
