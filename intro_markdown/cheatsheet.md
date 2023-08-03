# Markdown Basics

## Headlines, Paragrahs, and Basic Formatting

### Headlines

##### Heading Level 5

###### Heading Level 6

### Paragraphs and Line Breaks

Add two spaces and return  
This provides a line break

### Emphasis and Bolding

### Italics

Use \* asterisks for opening and closing as well as \_ underscore

This _works_ and this _works_ also

### Bolding

Use \*\* asterisks or \_\_ underscores for bolding. Both opening and closing tags

This **works** and **this** as well.

### Blockquotes

Use > for the start and on any blank lines following

> Like this

### Horizontal Rule

Use three underscores

---

Three hyphens

---

Or three asterisks (they become hyphens)

---

The word **_formatting_** will be bold and italics!

## Lists

### Numbered Lists

Add a number plus a . and the item.

You do not need to order the numbers in order so you could enter 1. over and over.

1. Item 1
1. Item 2
1. Item 3

You can additionally nest items by adding two spaces or tab

## Bulleted List

- Item (Asterisk and space)
- Item
  - Item
    - Item

You can nest bulleted items as well. With each layer of nesting, the bullet changes.

## Code

Formatted with `` for inline

`let exampleFunction = 1 + 1;`

Formatted with ``` Three backticks above and below for multiline code block.

Where supported add the language after the first row of three backticks for language specific color coding.

```Javascript
let testFunction = () => {
    let foo = 'foo';
    let bar = 'bar';

    return foo + bar;
};
```

## Links

Use square brackets first for the name that will appear to the user and then the URL in paranthesis.

[Treehouse](https://teamtreehouse.com/)

To include a custom tooltip, within the parenthesis holding the link add a space and enclose the desired tooltip in quotes.

[Treehouse](https://teamtreehouse.com/ "Link to Team Treehouse")

To create a reference link, use a the title in square brackets followed by a number in square brackets. In a separate line, have the same number in square brackets followed by colon and the URL.

[Treehouse][1]

[1]: https://teamtreehouse.com "Reference link to Treehouse"

## Images

### To display an image

Exclamation point. Add alt text in square brackets first. Then add URL to image into paranthesis following.

![Kittens](https://placekitten.com/250/400)

### To display an image with a link

Square brackets with exclamation point, alt text in square brackets, and url inside paranthesis. Follow this by paranthesis with routable link.

[![Kittens](https://placekitten.com/300/400)](https://placekitten.com/)

### To add an image title

Bang, alt text in square brackets, paranthesis of URL followed by space and title within quotes.

![Kittens](https://placekitten.com/350/400 "Curious kitten")
