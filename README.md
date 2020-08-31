
Book Store Application:

Introduction: 

This is a Book Store web application which allows the user to view the list of books, view details of a particular book and delete a book from the list. The application is built using Java, Spring Boot and Spring Data JPA for the Back end and Angular 8, jQuery, Bootstrap, HTML and CSS for the UI part. For exception handling, the application uses @ControllerAdvice, this allows the application to handle all the exceptions at one place instead of handling in each controller or service classes. The application uses JUnit, Mockito and MockMVC to test the RESTful API end points. 

Front-end:

Technologies Used : Angular 8, jQuery, Bootstrap, HTML and CSS.


Angular Components Created:

Book-list Component - This component is responsible  to the display book list anf delete functionality. The Book-list.component.ts has the corresponding methods to perform a specific action. The Book-list.component.html holds the necessary HTML code.

Book-Details Component - This component is responsible to display the individual book details with a cover image of the book. The Book-details.component has the corresponding methods to handle the actions.

Sortable-Headers - I have created a seperate component to enable sorting in this application. The Sortable-headers.component.ts takes care of the complete sorting logics involved and the Sortable-Headers.component.html has the necessary HMTL code.

Features in Front-End application:

View list of Books:

Once the application loads, user in navigated to an empty with a Book List button/link. Once the user clicks it, the list of books is loaded to the page.
Each row has a view details and a delete button.

View Book Detail:

Once the user cliks the view details button they are navigated to a seperate page where they can view the details of the book. In the view details there is aback button provided, with which the user can come back to the Book list page.

Delete Book:

Using the Delete button in the Book list page the user can delete individual book.

Sorting:

Just above the table of List of Books, there are option to sort the list. The user can sort list using the sorting options provided. The actual sorting is taken care at the back-end, the UI(icons and setting the parameters for the URL requests) and rendering part is developed using Angular.

Pagination:

I have used ngx-pagination to implement pagination in this application. The pagination fetaure displays the number of pages, which can be changed by the user and the total number of books per change. The default for the total number if books per page is five, but the user can modify it to 10 or 15.

Problems Faced :

Major problems I faced were during the implementation of sorting and pagination fetaures.It was quite challenging to implement the sorting fetaure even though the heavy lifting is done in the server side. Some of the errors were difficult to solve and with less community support for few errors I had to completely redo some of the work. Also in pagination, when I am on the second page and click view details, it navigates me to the details page, when I try to get back to the list of books page, the contol by default goes to the first page. This is something to do with Angular- Route or not storing the state of the page.I have tried solving the issue.

Improvements: 

One of the important changes I would consider is to change the way the sorting icons look at the moment. I would combine them with the table headers which will be easy for the users and improve the cosmetic look of the page.

Build Steps and URL :

To build - ng build

After ng build, a new dist folder gets created in the application folder.

Create a folder bookstore inside the webapps folder of Tomcat server

Paste the contents of the dist folder into the bookstore folder that we created in webapps folder of Tomcat

Application will start automatically.

Please make sure the base href in index.html is "bookstore"

<base href="bookstore">

Use this url to get the landing page : http://localhost:8089/bookstore



URL change in index.html for HTTP calls:

Please change the URL to  http://localhost:8089/bookstoreservice when deploying in Tomcat

var cfgApiBaseUrl - This variable holds the URL for Development and Production. We can change it as per our requirement.

Current URL (Development environment):

var cfgApiBaseUrl = "http://localhost:8097";
 
 Change it to:
 
  var cfgApiBaseUrl = http://localhost:8089/bookstoreservice
  
  Please change the port number accordingly.
  
  Note : 8089 is the port where I have deployed my Tomcat server.



