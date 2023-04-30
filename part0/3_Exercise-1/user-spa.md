sequenceDiagram
    User->>+Browser: Types http address
    Browser->>+Server: GET req to https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>-Browser: Sends HTML document,  res 200.
    Browser->>+Server: GET req main.css
    Server-->>-Browser: Sends res 200 main.css
    Browser->>+Server: GET req spa.js
    Server-->>-Browser: Sends res 200 spa.js
    Browser->>+Server: GET data.json
    Server-->>-Browser: Sends res 200 data.json
    Browser-->>-User: Shows page rendered to the user.

