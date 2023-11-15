document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("date-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const startDate = new Date(document.getElementById("start").valuie);
      const endDate = new Date(document.getElementById("end").valuie);
      let resultElement = document.getElementById("result");
      let errorElement = document.getElementById("error");
      let msg = "";
      let errorMsg = "";

      if (!startDate || !endDate) {
        errorMsg = "Please enter the date correctly.";
        resultElement.text = "";
        errorElement.text = errorMsg;
        return;
      }

      if (startDate > endDate) {
        errorMsg = "Please enter the date correctly.";
        resultElement.text = "";
        errorElement.text = errorMsg;
        return;
      }

      const diff = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      msg = "Day difference is " + diffDays + " days";
      resultElement.text = msg;
      errorElement.text = "";
    });
});
