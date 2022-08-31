<!-- ![Screenshot (1963)](https://user-images.githubusercontent.com/61643245/146307454-b6b04eec-d2bf-4036-b66a-9a690c4cd706.png) -->
<img margin="auto"  src= "https://user-images.githubusercontent.com/61643245/146307454-b6b04eec-d2bf-4036-b66a-9a690c4cd706.png" width="100%" height="170px"></img>


#### Nykaa is an Indian e-commerce Mumbai-based retail seller of beauty, fashion and wellness products. The ecommerce startup lists products from over 1200 global brands along with its own line of products Nykaa Cosmetics and Nykaa Naturals.It sells beauty,wellness and fashion product across website,mobile apps and 76 offline store.


# Technologies we used 
* React
* Redux
* JavaScript
* Chakra UI
* Node as runtime
* MongoDB as Database
* Express , EJS for Backend

# Installing and Running

#### To run this application on your local system, execute the following commands on your terminal/command line:
#### `git clone` https://github.com/AFFAN-AHMAD/funny-week-7983
#### `npm i`
#### run the server
#### create a .env file with username and password of mongodb

# Step by Step procedure to run this app using the deployed link
1) Click on this link  https://funny-week-7983-affan-ahmad.vercel.app/ 
2) You will land on the home page of the website.
3) Go to navbar, hover on makeup and next go to the Lip column which will redirect you to the products page.
![Screenshot (86)](https://user-images.githubusercontent.com/96197969/187746526-d021e3a1-6a2c-4c3f-98b8-6f624380fb04.png)

4) here you will find all the products available, pagination feature, sorting feature and filtering feature. 
   The data is dynamically coming from the backend, for getting the list of available brands & categories, we have used mongo aggregation query and to filter, 
   we have used Mongo Find query using JavaScript Map Method for the creation of the various combinations. A proper blog has been written by one of the 
   team members Affan Ahmad explaining that in detail. Here you can check that https://medium.com/@affanahmad2797/algorithm-for-making-combinations-of-mongo-queries-using-javascript-map-method-d6470bc4a1f7

5) Every product has a veiw-details option in that, clicking on that will redirect you to the product's details page, where you can check the various information avalaible for that particular product, we are using react-router-dom to get the "id" of that particular product and navigating to the product/:id page. Here you can check if the product is available in you area or not inserting your pincode into the input box and clicking "check"
  
    ![Screenshot (88)](https://user-images.githubusercontent.com/96197969/187749188-e7dba163-1d44-49ab-9cc8-e882cb9a3794.png)
    ![Screenshot (89)](https://user-images.githubusercontent.com/96197969/187749219-5852c62e-d4d5-4afb-8bd6-2100778636c3.png)
 6) To add a product to your cart, click on add to bag button, now in the navbar there is "bag" icon, to open the cart, click on that.
 7) Here in the cart you can increase the quantitiy of the products, remove any product for the cart and proceed to the address page.
 8) On the address, you can click on ship to this address button and move to the payemnt page.
 9) Confirm your card details click on Pay now, your order has been placed now the card will be emptied and you will be redirected tp the home page again. 

# Features
* There is login and logout functionality.
* Elegant Navbar for easy navigation between pages and products.
* Customer can view the products on product page and sort them by price and in lexical manner.
* In product page pagination feature is available so that user can easily navigate one page to another and see the products in systematic manner.
* Filter of the products for a combination of products and brands.
* Product details page shows the selected product images and information.
* Customer can validate the pincode for delivery information.
* Customer can add the product into shopping bag from the product detail page.
* Cart page to change the items quantity or delete the items from the cart.
* Payment page which calculates the products prices dynamically.
