Modularly build the following features so you can implement them on whicheve installation, build them on a separata page app.get("separate-feature"):

<h1>Form related features</h1>
1. Make the form take in all the input that the wordpress demo can.
2. Use it on the server side.
- Fill in the preview template in an Iframe.
. will cross-origin policy affect the preview display on certain browsers?
3. On submission.
- Always:
. Validate the input
- On success:
. Collect payment (what payment gateway is going to be used so that payment does not touch our servers, which payment provider should be used).
. Start generating the card (don't stop for anything).

- On errors display user-friendly prompts to fix the errors, don't start doing anything.
4. 
- Make the form handling in a separate file, like a dispatcher for the input.
- Use it to fill in the templates for each business card (whichever of the CARD TEMPLATES is chosen).


<h2>Notes about displaying the cards and templates:</h2>
Some butons/features don't work on mobile or on Desktop. You will need to exculde the features that don't work from desktop and mobile versions through conditional rendering with EJS or responsive design (or both) and still make it look good.  


<h1>Frontend</h1>
- Dynamic carousal with templates to load in the Iframe on click. 