In this project, I have build a **Nxt Trendz - Cart Features** 

### Link https://NxtTrendz96.ccbp.tech

### Refer to the video below:

<br/>
<div style="text-align: center;">
  <video style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-output.mp4" type="video/mp4">
  </video>
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality  added</summary>
<br/>

The app have the following functionalities

- When an unauthenticated user tries to access the **Cart** Route, then the page  navigated to **Login** Route

- Following are the features  implemented

  - Feature 1

    - When an authenticated user tries to add the same product multiple times
      - The quantity of the product  updated accordingly, and the count of the cart items in the header  remained same

  - Feature 2

    - The total amount and number of items in the cart  displayed in the **Cart** Route

  - Feature 3

    - In each cart item in the cart
      - When the plus icon is clicked, then the quantity of the product  incremented by one
      - When the minus icon is clicked, then the quantity of the product  decremented by one
      - When the quantity of the product is one and the minus icon is clicked, then the respective product  removed from the cart
      - Based on the quantity of the product, the product price and the Cart Summary, i.e the total cost  updated accordingly

  - Feature 4

    - When an authenticated user clicks on the remove button, cart item  removed from the cart list

  - Feature 5

    - When an authenticated user clicks on the **Remove All** button, all the cart items should be removed from the cart and [Empty Cart View](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-empty-cart-view.png)  displayed



</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Cart/index.js`
- `src/components/Cart/index.css`
- `src/components/CartItem/index.js`
- `src/components/CartItem/index.css`
- `src/components/CartSummary/index.js`
- `src/components/CartSummary/index.css`
</details>







<details>

- Prime User credentials

  ```text
   username: rahul
   password: rahul@2021
  ```

- Non-Prime User credentials

  ```text
   username: raja
   password: raja@2021
  ```

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

