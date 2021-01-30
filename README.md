# Backend NodeJS (With Vanilla Javascript) Internship (Remote)

## What we need you to do
Create a single express API endpoint route [HTTP POST] that accepts the following payload 
{
  "csv":{
    "url": "https://linktocsv",
    "select_fields": ["First Name", "Last Name", "Age"],
  }
}

### Your endpoint should (among other things):
1. Ensure the URL contains a valid CSV 
2. Convert the CSV to a JSON array
3. The JSON array should only contain the fields specified in the "select_fields" parameter.
An example: If the CSV has 2 items, and the following fields, "First Name, Last Name, Age, DOB, Mobile, Email, MatricNumber"
Based on the example payload shared above, the returned JSON array should have this structure:
[
  {
    "First Name":"Ade",
    "Last Name":"Stark",
    "Age": 21 
  },
  {
    "First Name":"Ade",
    "Last Name":"Stark",
    "Age": 21 
  }
]
(PS: If the select_fields parameter is not passed, your service should return all fields)
4. Once you have parsed the results, generate a random identifier and return an API response that looks like the below:
{
  "conversion_key": "ZEMAHBb54vkFXPHA9jHY6Xp3gMnMAKYg",
  "json": [
    {
      "First Name":"Ade",
      "Last Name":"Stark",
      "Age": 21 
    },
    {
      "First Name":"Ade",
      "Last Name":"Stark",
      "Age": 21 
    }
  ]
}

The 4 items listed above are the basic requirements. Feel free to extend or add any extra thing that comes to mind.
Your implementation should be done on Glitch (https://glitch.com) and in a single server.js file (You can use the default Glitch Express scaffold).
