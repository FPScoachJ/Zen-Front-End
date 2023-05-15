// Get a reference to the button element
const saveAsPdfBtn = document.querySelector("#saveAsPDFButton");

// Add an event listener to the button element
saveAsPdfBtn.addEventListener("click", function (event) {
  // Stop the propagation of the event up the DOM tree
  event.stopPropagation();

  // Set the print mode to PDF
  const printOptions = {
    printMode: "pdf",
  };

  // Use the window.print() method to save the page as a PDF
  window.print(printOptions);
});
