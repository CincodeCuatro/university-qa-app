# node-express-jwt-auth

About: You have been tasked to develop a Q&A web application for your University. All registered students
and staff should be able to use the application to ask questions and submit answers to other
questions. The applications must be fast and minimal as not to create any unnecessary UI/UX
barriers. The application must be responsive. 


This application uses Node.js and MongoDB along with mongoose, express, jwt, bcrypt, and cookie-parser

To deploy this application:

One method to deploy this application requires:
	* GitHub Account
	* MongoDB Atlas Account
	* Heroku Account

Step 1: Upload to or Fork on Git then
Link up the MongoDb with your user details in 
    app.js : line 19 const dbURI = 'mongodb+srv://username:password@cluster0.dauir.mongodb.net/yourdirectory';

Step 2: Create two collections in MongoDB Atlas called 'questions', and 'users'

Step 3: Link Github with your Heroku account and ensure that 
  app.js : line 21.then((result) => app.listen(process.env.PORT)) is present to allow Heroku to set a custom port.

Step 4: Build and deploy via Heroku's interface

Load Balancing: MongoDB is capable of handling multiple client's read/write requests at once by default. 
However in terms of Vertical Scaling, to increase performance it is useful to know that MongoDB requires additional RAM.
For Horizontal Scaling MongoDB uses sharding to host the DB on multiple servers. 
Replication is also possible with multiple secondary servers to which queries are directed in order to reduce the load on the primary server.

SEO Considerations: 
Paginated links within this applicaton use <a href=> anchor links as is considered best practice.
In order to improve SEO a root page with apt meta data should take presedence over all paginated URLs
This can be helped by adding an image with approrpriate alt tag, meta data, and additional page text to the root page.
If an XML Sitemap is used, do not include paginated URLs.