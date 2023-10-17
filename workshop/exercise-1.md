# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint                  | method    | Description                    
| --------------------------| ----------| ------------------------------
| `/stock`                  | `GET`     | Get a list of items in stock
| `/stock/{item_id}`        | `GET`     | Get the details of a specific item in the stock
| `/stock`                  | `POST`    | Add a new item to the cafe's stock
| `/stock/{item_id}`        | `PUT`     | Update the details of a specifc item in the stock
| `/stock/{item_id}`        | `DELETE`  | Delete an item in the stock
| `/customers`              | `GET`     | Get a list of customers at the cafe
| `/customers/{item_id}`    | `GET`     | Get the details of a specific customer 
| `/customers`              | `POST`    | Add a new customer to the customer list 
| `/customers/{item_id}`    | `PUT`     | Update the details of a specific customer 
| `/customers/{item_id}`    | `DELETE`  | Delete a specifc customer from the customers list
| `/seating`                | `GET`     | Get information about seating in the cafe
| `/seating/{item_id}`      | `GET`     | Get the details of a specific seating area
| `/seating`                | `POST`    | Add a new seating area
| `/seating/{item_id}`      | `PUT`     | Update the details of a specific area
| `/seating/{item_id}`      | `DELETE`  | Delete a specific seating area
| `/orders`                 | `GET`     | Get a list of all the orders
| `/orders/{item_id}`       | `GET`     | Get the details of a specifc order
| `/orders`                 | `POST`    | Add a new order
| `/orders/{item_id}`       | `PUT`     | Update the details of an order
| `/orders/{item_id}`       | `DELETE`  | Cancel a specific order