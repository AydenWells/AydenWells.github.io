const submitProduct = (e) => {
  e.preventDefault();
  const form = document.getElementById("form-product");
  const productName = form.elements["product-name"].value;
  const colors = form.elements["colors"].value;
  const sizes = form.elements["sizes"].value;
  const termsChecked = form.elements["terms"].checked;

  const message = document.createElement("p");
  message.innerHTML = `Product Name: ${productName}<br>Main Color Presented: ${colors}<br>Main Size Presented: ${sizes}<br>Terms Agreed: ${termsChecked ? "Yes" : "No"}<br>Sent to Headquarters for Review!`;

  const results = document.getElementById("results");
  results.innerHTML = "";
  results.appendChild(message);

  results.classList.remove("hidden");
};

document.getElementById("form-product").onsubmit = submitProduct;
