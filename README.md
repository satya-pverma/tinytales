This project is made with NODE and REACT. backend with node and frontend with react.The input is a number which shows that the user want the top most (n) words having highest frequency.
----------------------------------------------------------------------------

The server code is having simple route /talesApi/:id which servers the list of words in the Array format to the client.its a get request.
----------------------------------------------

On submit button frontend sends a fetch request at /talesApi/:id (where id is the number given as input by the user) and on the basis of the number, the operation of filteration perormed at backend and servers the array of words.
--------------------------------------------------
