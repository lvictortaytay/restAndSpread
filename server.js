const button = document.getElementById("enter")
const page = document.querySelector("body")

const imgBox = document.getElementById("imgs")
const searchVal = document.getElementById("searchBox")



button.addEventListener("click",function(evt){
    evt.preventDefault();
    imgBox.append(searchVal.value)
    console.log(searchVal.value)
})


// Questions 

// What is HTTP ?
// - This Is hyperText transfer protocol , this is one of many protocols for communicating to servers


// What is a URL?
// - This stands for uniform resource locators , this is the “web address” that is parsed to give back the user a web page. Consist of a protocol , hostname , resource and query.

// What is DNS?
// - This stands for domain name system , this retrieves the IP address from the hostName.


// What is a query string?
// - This is at the end of a URL that may update after a search form is filled. These are variables that hold extra information about a website.



// What are two HTTP verbs and how are they different?
// - GET and POST.    GET is used when making a request that does not change internal data , could be a search , picture or typing in a web address. While POST is normally a request that has a payload and changes the data within a page , could be like a post to a social media page



// What is an HTTP request
// - This is when the browser actually gets the IP address of the hostname returns back content ( html ) so that the user can see it.

// What is an HTTP response?
// - returns back content ( html ) so that the user can see it.


// What is an HTTP header
//     * Headers are bits of extra information about the request or the response. 
//     * Request headers can be  Host,Accept, Cache-Control
//     * Response headers can be  Last-Modified, Cache-Control

// What are the processes when you type http://somesite.com/some/page.html
// - The computer first uses the http protocol
// - The computer secondly uses DNS to find the IP address for somesite.com
// - The computer makes a request to that IP address it found
// - The server will send back a response , with a status code of 200 if everything went smoothly
// - The browser will then create a DOM with that information returned , and make make a request to any additional information on that page if needed
// - The computer thirdly parses some/page.html , to go to that particular place at the IP address

