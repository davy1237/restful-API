//Overview: ReadMe file for Restful API
//Written by: David Stern
//Last Modified: January 31th, 2016

////////////////////////////////////////
//   			Purpose			      //
////////////////////////////////////////

The purpose of this program is to create a basic API with
POST, PUT, GET and DELETE functions.  

////////////////////////////////////////
//   			Files			      //
////////////////////////////////////////

server.js: the overhead file which creates the database, connects
the API to the database, and calls functions to route requests.

route_handler.js: routes the four commands and creates an object

Schema.js: provides a schema for each object.

////////////////////////////////////////////
//   		    How to run   		      //
////////////////////////////////////////////

To run locally, start the mongoDB database and run node.js with
server.js.  Will be linked to port 3000 by default.

It can also be run through this URL: .

////////////////////////////////////////////
//   		    Dependencies 		      //
////////////////////////////////////////////

See package.json.

////////////////////////////////////////////
//   		   Outside Help	    	      //
////////////////////////////////////////////

Manuals for node-resftul, body-parser, Node.js, mongoDB and
mongoose libraries.

Chrome app Postman was used for testing.

////////////////////////////////////////////
//   	    Further Enhancements	      //
////////////////////////////////////////////

I would add a delete all option, to clear the entire
database in one command.

I would add in security measures.  In my research, I
noticed that some of the libraries I was using together
had the potential to be exploited to overload the database,
which could then be used to steal information.  The server
could be made more secure.

In the long term, a graphical interface for the information
would be helpful for the user.  A graphic designer could
create an attractive webpage and use the information from
the server to make it dynamic.  Links could invoke
commands on the client side and then use responses
from the server to create a visual representation
of the data.

////////////////////////////////////////////////
//   		    end of ReadMe.md		      //
////////////////////////////////////////////////