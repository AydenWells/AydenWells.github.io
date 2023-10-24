const submitProduct = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");
  
    const form = document.getElementById("form-product");
    const productName = form.elements["product-name"].value;
    const colors = form.elements["colors"].value;
    const sizes = form.elements["sizes"].value;
    const termsChecked = form.elements["terms"].checked;
  
    console.log(raccName);
    console.log(colors);
    console.log(sizes);
    console.log(termsChecked);
  };
  
  
  
  document.getElementById("form-product").onsubmit = submitProduct;