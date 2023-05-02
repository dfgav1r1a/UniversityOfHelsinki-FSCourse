sequenceDiagram
    User-->>+Browser: GET req to https://studies.cs.helsinki.fi/exampleapp/notes
    Browser->>-User: Builds html document and loads JS and CSS file
    User-->>+Browser: GET req to https://studies.cs.helsinki.fi/exampleapp/data.json
    Browser->>+User: renders  all notes stored in data.json
    User-->>+Browser: POST req to https://studies.cs.helsinki.fi/exampleapp/new_note
    Browser->>+User: redirects to https://studies.cs.helsinki.fi/exampleapp/notes and responds with status 300 
    User-->>+Browser: GET req to https://studies.cs.helsinki.fi/exampleapp/notes
    Browser->>+User: 200 response, renders new HTML document with user's note
    Browser->>+User: renders the user's note in the page



    
