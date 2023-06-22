# full-stack-dev


Architecture

•	Compare and contrast the types of front-end development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
A few ways that the Angular project structure is different than that of the Express HTML customer-facing page are layouts, methods of accessing the database, and folder structure. Since the Admin page and customer facing page have distinct purposes the layouts are vastly different. The customer facing layout tries to appeal to customers while the admin page focuses on maintaining and adding information to the page. JavaScript is used to create all the classes which are objects that hold the information from the database and are used by the application to complete methods and functionality. The connections URLs were different for the two pages, they also had different ways of accessing the database and only the admin could execute PUT and POST requests. Finally, the folder structure for the Angular project required 3 objects in each folder and a handful of different folders which objects that interact with each other. 

•	Why did the backend use a NoSQL MongoDB database?
NoSQL databases allow for simple straightforward data models. They allow developers to have flexibility over data structures directly from the application. When an application reaches a higher level of complexity the development team can incorporate a more complex database to accommodate those data structures.

Functionality

•	How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
JSON is the simplest form of class creation. JavaScript has different data types for each data point which apply constraints to how the data can be saved and stored. Constraints aren’t a bad thing because they keep the data formatted to a standard necessary for development and their purpose. JSON is a full text-based data schema meaning that the only constraint the data has is that it’s stored as a String. The datapoints are saved as Strings and the data is saved as Strings. There are no Integers, Floats or Booleans, everything is a String.

•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.
In the first modules, we worked on using looping functions to create components based on database entries. All the interface components are uniform meaning they look the and function the same which is great from a UI/UX perspective. Developing components in this manner allows developers to make quick updates and keeps code clean so they only need to be updated in a single place.

Testing

•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

To ensure GET and PUT requests were set up correctly, I engaged in constant troubleshooting after major updates. GET requests were tested when adding the TripList and TripCards. While the PUT methods were tested when adding the AddNewTrip and EditTrip functionality. I ran multiple scenarios to verify consistency in behavior and data. When installing security, it was necessary to develop registration and login functionality to the application. The security was implemented to the Add and Edit functionality so that only users can add and edit trips. I was able to successfully implement this logic into the application and test while being logged in and not being logged in.

Reflection

•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has allowed me to see what it takes to develop an application from end to end. I was able to create an application by establishing different development layers in the MEAN stack. Front-end, Back-end, Client-Server & Data layers were all key parts in making this project a success. By mastering these skills, I have become a more desirable candidate because I know what it takes to put an application together from end to end. It also helps that I already have 5 years of work experience and ambition to learn everything.
