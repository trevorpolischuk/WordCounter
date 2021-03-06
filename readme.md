#WordCounter JQuery Plugin

WordCounter is a very simple, lightweight (less than 1k minifed) jQuery plugin that helps count words on a web page. 

Counting words on a website is a tedious and repetitive task. Usually, you would have to copy the text into a web-based word counter or use Word to total the values, but with WordCounter, all you have to do is double-click the element, and the total word count for the page will be updated at the top of the document. 

##Example uses

- Finding out the total cost for a copywriter. 
- Getting the average length of blog posts to make sure they meet minimum SEO standards.
- Counting words because that's all this thing does.

##Demo

[Here is a quick demonstration](http://jsfiddle.net/d6wHA/). Just double click an element on the page to update the count.


##Installation

Installing WordCounter is very simple. Just include the [wordcounter.min.js](https://raw.github.com/trevorpolischuk/WordCounter/master/wordcounter.min.js) and [jQuery](http://jquery.com/) in your page. 

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>WordCounter Example</title>
</head>
<body>
<h1>Hello Everybody!</h1>
<script src="/path/to/jquery.js"></script>
<script src="/path/to/wordcounter.min.js"></script>
</body>
</html>
```

####Contributing and Pull Requests
I appreciate any input on my code and will accept pull requests that have clear explanations for how it improves the script. Pulling the whole repo includes a mock Twitter Bootstrap installation as well as a small suite of tests using qUnit with Grunt as a task runner.