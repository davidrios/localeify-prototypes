# Localeify

This project aims to make it easy for developers and translators to localize a modern JS front-end
web application.

Since there are already good libraries for localizing dates and numbers, this library will focus
on helping to localize raw text.

These are the basic design goals:

- Get inspiration from the gettext project, but don't follow it strictly.
- There are already good tools from the gettext ecosystem, try to use those when possible.
- Make it easy for developers to add localization support. That means helping when necessary and
  getting out of the way when not.
- The application should work even if no localization was made yet, and the code should read
  as if no localization is being done as much as possible. That excludes the use of "ids" as
  placeholders for text to be translated.
- Be both space and time efficient.
- Don't try to embrace every use case imaginable, give tools for the developer to add his own if needed.
- Be framework agnostic. It should not matter if the developer likes React, Vue, Angular or plain JS.
- Support developing the application in the native language of the developer/company.