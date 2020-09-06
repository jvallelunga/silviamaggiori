import React, { useState } from 'react';

function Product() {
  const [name, setName] = useState([]);
  let retry = 3;
  const fetchLS = function(timeout) {
    setTimeout(function(){
      if (window.LS) {
        setName(window.LS.product.name);
      } else if (retry) {
        retry--;
        fetchLS(timeout * 2);
      }
    }, timeout);
  }
  fetchLS(200);

  const output = [];

  if (name) {
    const text = `Quiero informacion acerca del producto: ${name}`;
    const href = encodeURIComponent(`https://api.whatsapp.com/send?text=${text}&phone=+5492494336422`);

    output.push(<a class="btn btn-primary" href={href}>Consultar precio</a>);
  }

  return output;
}

export default Product;