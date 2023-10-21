# CAR-DEAL-Website

Live website link : [https://car-deal-website.web.app/](https://car-deal-website.web.app/)

### Features and Functionalities of the website 

- In the website's navbar there is a button for toggle between dark and light theme for the home page.

- You can see two routes for Add product and My cart in the navbar. These two routes are private. Without login authentication you can't access these routes . If you try to access them without logged in , you will be navigate to the login page and a toast will be shown.

- There is brands section in the home page . By clicking on any brand card , you will be taken to a page where you can see products of that specific brand. All the products are shown from the database.  And if there is no products available in that moment , it will show you a relevant message about that.

- On each product there is button for navigating in the See details and Update page of that specific product. But these routes are also private. So, you can't access without login.

- On the See details page there is information about that specific product and there is a Add to Cart button. By clicking on that button , that product will be saved in the database and a success toast will be shown . But if that product already exist in the carts it will show you a error toast.

- You can see all your selected products in the My cart page. You can remove any product from the carts by clicking on the delete button.

- When you logged in , your profile will be shown in the navbar and the login button will be gone. If you click in your profile your name and a logout button will be displayed . By clicking on the logout button , you will be logged out and the login button will be shown again.
