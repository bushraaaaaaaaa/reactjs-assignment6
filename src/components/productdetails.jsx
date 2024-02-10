import React from 'react';

const Productdetails = () => {
  return (
   
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
   
    
      <div style={{ flex: 1 }}>
        <img
          src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg" 
          alt="Product Image"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
        />
      </div>

     
      <div style={{ flex: 1, paddingLeft: '20px' }}>
        <h2>Product Name</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

       
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            defaultValue="1"
            style={{ marginLeft: '10px', padding: '5px', width: '50px' }}
          />
        </div>

       
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="color">Color:</label>
          <select
            id="color"
            defaultValue="Blue"
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
           
          </select>
        </div>

      
        <div style={{ marginBottom: '20px' }}>
          <p>Price: $250</p>
        
        </div>

     
        <button style={{ padding: '10px', backgroundColor: 'LightBlue', color: 'black', borderRadius: '5px', cursor: 'pointer' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productdetails;
