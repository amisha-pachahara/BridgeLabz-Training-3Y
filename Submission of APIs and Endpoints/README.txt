ASSIGNMENT 10 - APIs AND ENDPOINTS
Folder: Submission of APIs and Endpoints

Files:
- q1.js to q5.js: JavaScript solutions
- q1.html to q5.html: Matching pages that load each solution
- q1-db.json to q5-db.json: Separate JSON Server databases (each has at least 5 sample records)

SETUP
1. Install Node.js.
2. Open a terminal in this folder.
3. Install JSON Server:
   npm install -g json-server

RUN EACH QUESTION IN A SEPARATE TERMINAL
Q1:
   json-server --watch q1-db.json --port 3001
   Open q1.html using VS Code Live Server.

Q2:
   json-server --watch q2-db.json --port 3002
   Open q2.html using VS Code Live Server.

Q3:
   json-server --watch q3-db.json --port 3003
   Open q3.html using VS Code Live Server.

Q4:
   json-server --watch q4-db.json --port 3004
   Open q4.html using VS Code Live Server.

Q5:
   json-server --watch q5-db.json --port 3005
   Open q5.html using VS Code Live Server.

Run only the JSON Server command for the question you are testing. Each question uses
its own database file and port. For Q1 and Q3, an internet connection is needed
to load the jQuery CDN script. Use Live Server rather than opening HTML as file://.
