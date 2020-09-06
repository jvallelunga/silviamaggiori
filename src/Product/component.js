import React, { useState } from 'react';

const style = {
  display: 'block',
};

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
    const text = encodeURIComponent(`Quiero informacion acerca del producto: ${name}`);
    const href = `https://api.whatsapp.com/send?text=${text}&phone=+5492494336422`;

    output.push(<a
      class="btn btn-primary"
      style={style}
      href={href}
    >Consultar precio</a>);
  }

  return output;
}

export default Product;