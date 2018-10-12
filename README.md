### Technical test Birdie

Goal of this exercise is to create a small web application that visualizes database data.
Application should allow to select a column (amongst demographic data), then display, for each
different value in this column, number of lines with this value, and "age" value average. Values must
be sorted by decreasing order. One can display only 100 first values.
Page could look like:

For simplicity sake, all columns (except "age") are considered as "string".
• Application must be a SPA (Single-Page Application), i.e. user must be able to change
variable without reloading page.
• If more than 100 different values, one can indicate number of non-displayed values.
• Indicate number of non-displayed lines (i.e. lines corresponding to non-displayed values)

#### Database
• Type: MySQL
• Host: birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com
• Port: 3306
• User: test-read
• Password: xnxPp6QfZbCYkY8
• Name: birdietest
• Table: census_learn_sql

Stack: NodeJS + React/Redux

#### What we want to see
• React with concise Redux base state management
• Use of front end middleware to handle side effects/asynchronous processes (Sagas/Epics)
• Well defined and reusable components
• Effective error handling
• Some display of front end styling knowledge
• One or two automated tests
• Effective route management and reusable modular structure to your API
• Strong typing
• A good overall display of the Single Responsibility Principle
• Strong overall naming conventions

Share code on GitHub or Bitbucket and share application URL.
