sequenceDiagram
    User-->>+Browser: GET req to https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>-User: Builds html document and loads JS and CSS file
    User-->>+Browser: GET req to data.json
    Browser->>+User: renders  all notes stored in data.json
    User-->>+Browser: Goes to input field and types the message and sends it
    Browser->>+User: onsubmit event fires and creates an object with user's msg and date
    Browser->>+User: pushes obj to array,  cleans up input field and calls 2 functions
    Browser->>+User: renders the user's note in the page
    Browser->>+User: sends note to server, POST req to /exampleapp/new_note_spa



    
