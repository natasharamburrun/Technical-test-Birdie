App

	move dropdown code to component
  move load sql functionality to new method
  add dropdown handler to call load method on onChange

backend

  create method to call DataBase
  should take the column as an argument
  should build query
  move / to a new function? maybe load()

front end

  pass loaded data into query result component
  build correct html for columns, etc



  Visual:

  <!-- Make sure Bulma is in the page -->
  Add the correct Bulma classes to the dropdown and (when you make it) table
  Build the HTML for the table correctly (table > (optionally thead + tbody) > tr > td) (I suggest just copying from a Bulma example and modifying)
  Add the map to the tr

Loading:

  Add a loading property to the app state
  <!-- Set loading / not loading in the get results method -->
  Disable the dropdown when loading
  Show a loading indicator in place of / or over the table when loading

<!-- Data:

  I think you may have issues with the first column, which we are now renaming “value”
  You can keep it, or potentially pass in a new prop to the results called perhaps “column” and use that to pull out the right data: {{ row[this.props.column] }} vs {{ row.value }} -->

If more than 100 different values, one can indicate number of non-displayed values.  
•
Indicate number of non-displayed lines (i.e. lines corresponding to non-displayed values)  
