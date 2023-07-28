/*
get random quotes from: https://docs.zenquotes.io

The basic elements of an API call are as follows:

https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value

where:

https://zenquotes.io/api = ZenQuotes API URL. Required.
[mode] = Retrieval type [quotes, today, author, random]. Required.
[key] = API key for use with premium subscriptions, be sure to obfuscate or hide this in your source code to prevent hijacking. Optional.
[options] = Additional options. Optional.

Alternative GET request formats are also available for advanced users:
Example: https://zenquotes.io?api=[mode]&key=[your_key]&option1=value&option2=value

The resulting API data is formatted as a JSON array.

q = quote text
a = author name
i = author image (key required)
c = character count
h = pre-formatted HTML quote

[{
	"q": "Lack of emotion causes lack of progress and lack of motivation.",
	"a": "Tony Robbins",
	"i": "https://zenquotes.io/img/tony-robbins.jpg",
	"c": "63",
	"h": "<blockquote>&ldquo;Lack of emotion causes lack of progress and lack of motivation.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
},
// ...MORE DATA... //
{
	"q": "The friend is the man who knows all about you, and still likes you.",
	"a": "Elbert Hubbard",
	"i": "https://zenquotes.io/img/elbert-hubbard.jpg",
	"c": "67",
	"h": "<blockquote>&ldquo;The friend is the man who knows all about you, and still likes you.&rdquo; &mdash; <footer>Elbert Hubbard</footer></blockquote>"
}]
*/

export const getQuotesLibraryService = async () => {
  try {
    console.log("getQuotesLibraryService - called");
    console.log("getQuotesLibraryService fetching");
    const response = await fetch("/quotesBackupLibrary.json");

    console.log("getQuotesLibraryService jsoning");
    const quotesBackupLibrary = await response.json();

    console.log("getQuotesLibraryService - quotesBackupLibrary:");
    console.log(quotesBackupLibrary);
    return quotesBackupLibrary;

  } catch (error) {console.error(error)}
};
