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
//   	    Cloud based app URL           //
////////////////////////////////////////////

The app can be run through this URL: 
https://fierce-falls-11232.herokuapp.com/server

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

Michael Seltzer sat down with me and pointed me in
the right direction, showing me homebrew and heroku,
and showing me various forum pages to troubleshoot my
code.

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

////////////////////////////////////////
//   		   To be noted		      //
////////////////////////////////////////

In doing this project, I used a variety of packages which
performed a lot of behind the scenes work on parsing each
individual json package.  That being said, I was not able
to catch the error of attempting to parse an incorrectly
formatted file (such as xml).  Given more time, I would have
stopped using this package and manually used jsonParser to
catch the error.

////////////////////////////////////////
//   		 My experience		      //
////////////////////////////////////////

This experience was very rigorous yet rewarding.  I had no
previous web experience before starting this project.  I
spent many hours researching Restful API's and found
numerous libraries that could ease my experience, as
I had had no prior experience in javascript either.
The most challenging facet of the project was hooking
my server up with heroku, as there were many things
that heroku does behind the scenes that I was not 
aware of (such as choosing which port you are assigned
too in a dynamic way).  This experience was very rewarding,
overall, giving me experience in javascript, api's, and
self learning.

////////////////////////////////////////////////
//   		    end of ReadMe.md		      //
////////////////////////////////////////////////