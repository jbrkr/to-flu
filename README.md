# README 


## Run - Backend

In the 'server' directory, run:

### `nodemon index`
Runs the server on port 5000


## Run - Frontend

In the project directory, run:

### `yarn`
### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
# What's in here?

## Functionality
### Operational
##### Teamwork + Management
* 3W: Who (do I owe this to), What, When `recipient, description, due_date`
* Triage and prioritize tasks

##### Research
* Topic + Subject + Project `topic, subj, project`

### Tactical: `src/components`

##### Entry
* `Input{}.js`
* Semantic input format to explain workflow w.o consuming space


##### List
* `Table{}.js`
* &#x2714; : Complete
* &#x270d; : Edit
* X : Delete


##### Search
* `Filter{}.js`
* filter -> map outputs incomplete tasks to a list

## UX

#### Styling - Swiss Minimalism

* **Why:** Put user into *clear*, creative mindspace
* **How:** 
	* Black + White colorscheme
	* Geometric Sans Serif typeface with minimal variation
	* Single page/no-scroll brutalist bordered grid layout


# What would I do next?


### Dynamic Search
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

* Open Filter/search functionality to query muliple columns
* Fuzzy name matching

### Task Assignment

* Login functionality to handle tasks from teammembers/employees
* **Inbox / Outbox:** Let users recieve incoming deliverables/requests from teammates
	* Email notifications via postgre->zapier or other 3rd party

### Misc
* Add comprehensive view to connect project ToDos to Research tasks
* Dynamically size text input boxes (attempted, does not work on all browsers)


