This project is made with NODE and REACT. backend with node and frontend with react.The input is a number which shows that the user want the top most (n) words having highest frequency.

-----------------------------------------------------------------------------------------------------------------------------------------

The server code is having simple route /talesApi/:id which servers the list of words in the Array format to the client.its a get request.

------------------------------------------------------------------------------------------------------------------------------------------------

On submit button frontend sends a fetch request at /talesApi/:id (where id is the number given as input by the user) and on the basis of the number, the operation of filteration perormed at backend and servers the array of words.

----------------------------------------------------------------------------------------------------------------------------------------------------
server side description
The main folder consist the all backend codes as well as a folder of react app named client.
Component of server side  :-
1. server side consists of bin folder inside bin there is www.js file where the complete    code for creating server and listing the server ata particular port 9000.
2. There is data.txt file which consist the text data which is present in the url given.
3. The main file is app.js where the routing is provided for the routes talesApi.js        which gives the response to the request.
4. There is a folder named as routes inside it the file talesApi is present which is        responsible for servering the request

Dependencies in the server side
1. cors
2. express
3. debug
4. fs(file system)
5. http-errors

----------------------------------------------------------------------------------------

Client side description
Components of client side :-
1. The client folder is the folder created by create-react-app 
2. where the only folder that is changed is src inside src app.js is resposnible for        rendering the route /.
3. on this route the component Display.js is rendered for serving all the UI material      i.e (input form, button and the table of word which comes as a response after            clicking submit button.
4. The click of submit button calls a function showval() where the code for fetching the 
   the data from server.
5. One more function named showlist() which responsible for showing the words in a          tabular format.

Dependencies in the server side :-
1. react
2. react-dom
3. react-router-dom
4. react-script

key point:- I have used hooks for storing and setting the data and on the basis for that data the UI is rendering

Deployment description:-
I have deployed this project on heroku.
Link :- https://talesapi.herokuapp.com/

As this project is live so i am not attaching the screenshots of the testcases, as user can check it himself.



