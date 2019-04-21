//TODO: create buttons: edit, delete. On click, make log of current person id to the console

//TODO: auto-generate table on page enter (self-invoke function, promise)
//TODO: add button for action: if person is enabled -> on button click console.log('Disabled ' + person.id), if person is disabled -> on button click console.log('Enabled ' + person.id)

//TODO: MODULE 2
//TODO: remove button "Generate table"
//TODO: leave only <div id="app"> in body, render table from JS
//TODO: I want to have a function, that will return the PERSON by id. That function will be used in console
//TODO: on click on delete button, remove PERSON from LIST. HINTS: 1. factory function ;) 2. factory function as state 3. Be able to call render function as much as you want
//TODO: on click on enable/disable button, PERSON should become enabled/disabled (NOT via styles)

//TODO: MODULE 3
//TODO: on click on disabled/enabled badge, show only enabled/disabled persons
//TODO: on click on edit button, show inputs instead of text in table, with ability of changing values



function render(list) {
    const app = document.getElementById('app');
    while (app.hasChildNodes()) {
        app.removeChild(app.firstChild);
    }
    app.appendChild(list)
}
// const table = document.getElementById('table-data');
// document.getElementById('generate-btn').addEventListener('click', createTable);


//transform person to <tr>
function renderPerson(person) {
    const row = document.createElement("tr");

    const idNumber = document.createElement("td");
    idNumber.appendChild(document.createTextNode(person.id));

    const firstName = document.createElement("td");
    firstName.appendChild(document.createTextNode(person.first_name));

    const lastName = document.createElement("td");
    lastName.appendChild(document.createTextNode(person.last_name));

    const email = document.createElement("td");
    email.appendChild(document.createTextNode(person.email));

    const enabled = document.createElement("td");
    enabled.appendChild(document.createTextNode(person.enabled));

    const registrationDate = document.createElement("td");
    registrationDate.appendChild(document.createTextNode(person.registration_date));

    const status = document.createElement("td");
    const badge = document.createElement('span');
    if(person.enabled) {
        badge.classList.add('badge', 'badge-success');
        badge.appendChild(document.createTextNode("Enabled"));
    } else {
        badge.classList.add('badge', 'badge-danger');
        badge.appendChild(document.createTextNode("Disabled"))
    }
    status.appendChild(badge);

    const buttonsCell = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.classList.add("btn", "btn-info", "mr-3");

    editButton.addEventListener('click', () => {
        personsState.renderEditable();
    });

    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("btn", "btn-outline-danger");


    deleteButton.addEventListener('click', () => {
        console.log('Removing ' + person.id);
        personsState.deletePersonById(person.id)
    });


    const toggleButton = document.createElement("button");
    toggleButton.classList.add("btn", "mr-3");

    if (!person.enabled) {
        toggleButton.innerHTML = "Enable";
        toggleButton.classList.add("btn-secondary");
        toggleButton.addEventListener('click', () => {
            console.log('Disabled ' + person.id);
            personsState.switchEnabledProperty(person.id);
        });
    } else {
        toggleButton.innerHTML = "Disable";
        toggleButton.classList.add("btn-outline-secondary");
        toggleButton.addEventListener('click', () => {
            console.log('Enabled ' + person.id)
            personsState.switchEnabledProperty(person.id);
        });
    }

    buttonsCell.appendChild(editButton);
    buttonsCell.appendChild(toggleButton);
    buttonsCell.appendChild(deleteButton);


    row.appendChild(idNumber);
    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(email);
    row.appendChild(registrationDate);
    row.appendChild(status);
    row.appendChild(buttonsCell);


    // if(!person.enabled) {
    //
    //     row.addEventListener('mouseenter', function(e) {
    //       row.classList.add("bg-warning")
    //     });
    //
    //     row.addEventListener('mouseleave', function(e) {
    //       row.classList.remove("bg-warning");
    //     });
    //
    // }

    if (!person.enabled) {
        row.classList.add("bg-warning");
    }

    return row;
}

function renderEditablePerson(person) {
    const row = document.createElement("tr");

    const idNumber = document.createElement("td");
    idNumber.appendChild(document.createTextNode(person.id));

    const firstName = document.createElement("td");
    const inputFirstName = document.createElement("input");
    inputFirstName.value = person.first_name;
    inputFirstName.addEventListener('change', function(e) {
        personsState.getPersonById(person.id).first_name = e.target.value;
    });
    firstName.appendChild(inputFirstName);

    const lastName = document.createElement("td");
    lastName.appendChild(document.createTextNode(person.last_name));

    const email = document.createElement("td");
    email.appendChild(document.createTextNode(person.email));

    const enabled = document.createElement("td");
    enabled.appendChild(document.createTextNode(person.enabled));

    const registrationDate = document.createElement("td");
    registrationDate.appendChild(document.createTextNode(person.registration_date));

    const status = document.createElement("td");
    const badge = document.createElement('span');
    if(person.enabled) {
        badge.classList.add('badge', 'badge-success');
        badge.appendChild(document.createTextNode("Enabled"));
    } else {
        badge.classList.add('badge', 'badge-danger');
        badge.appendChild(document.createTextNode("Disabled"))
    }
    status.appendChild(badge);

    const buttonsCell = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.classList.add("btn", "btn-info", "mr-3");

    editButton.addEventListener('click', () => console.log("Editing " + person.id));

    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("btn", "btn-outline-danger");


    deleteButton.addEventListener('click', () => {
        console.log('Removing ' + person.id);
        personsState.deletePersonById(person.id)
    });


    const toggleButton = document.createElement("button");
    toggleButton.classList.add("btn", "mr-3");

    if (!person.enabled) {
        toggleButton.innerHTML = "Enable";
        toggleButton.classList.add("btn-secondary");
        toggleButton.addEventListener('click', () => {
            console.log('Disabled ' + person.id);
            personsState.switchEnabledProperty(person.id);
        });
    } else {
        toggleButton.innerHTML = "Disable";
        toggleButton.classList.add("btn-outline-secondary");
        toggleButton.addEventListener('click', () => {
            console.log('Enabled ' + person.id)
            personsState.switchEnabledProperty(person.id);
        });
    }

    buttonsCell.appendChild(editButton);
    buttonsCell.appendChild(toggleButton);
    buttonsCell.appendChild(deleteButton);


    row.appendChild(idNumber);
    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(email);
    row.appendChild(registrationDate);
    row.appendChild(status);
    row.appendChild(buttonsCell);


    // if(!person.enabled) {
    //
    //     row.addEventListener('mouseenter', function(e) {
    //       row.classList.add("bg-warning")
    //     });
    //
    //     row.addEventListener('mouseleave', function(e) {
    //       row.classList.remove("bg-warning");
    //     });
    //
    // }

    if (!person.enabled) {
        row.classList.add("bg-warning");
    }

    return row;
}


// function renderPersonList(persons) {
//     const tbody = document.createElement("tbody");

//     //transformation each person object -> array of tr
//     const rows = persons.map(function (person) {
//         return renderPerson(person);
//     });

//     rows.forEach(function (row) {
//         tbody.appendChild(row);
//     });

//     return tbody;
// }

//persons -> list of person
//renderPerson -> closure/callback
function renderPersonList(persons, renderPerson) {
    
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    table.classList.add("table", "table-striped");
    table.appendChild(thead);

    // const tr = document.createElement("tr");
    const tdID = document.createElement("td");
    tdID.appendChild(document.createTextNode("ID"));
    thead.appendChild(tdID);

    const tdFirstName = document.createElement("td");
    tdFirstName.appendChild(document.createTextNode("First Name"));
    thead.appendChild(tdFirstName);

    const tdLastName = document.createElement("td");
    tdLastName.appendChild(document.createTextNode("Last Name"));
    thead.appendChild(tdLastName);

    const tdEmail = document.createElement("td");
    tdEmail.appendChild(document.createTextNode("Email"));
    thead.appendChild(tdEmail);

    const tdRegistDate = document.createElement("td");
    tdRegistDate.appendChild(document.createTextNode("Registration date"));
    thead.appendChild(tdRegistDate);

    const status = document.createElement("td");
    const text = document.createElement('div');
    text.appendChild(document.createTextNode("Status"));
    status.appendChild(text);

    const enabled = document.createElement('div');
    const disabled = document.createElement('div');
    enabled.classList.add('badge', 'badge-success');
    enabled.appendChild(document.createTextNode('Enabled'));
    disabled.classList.add('badge', 'badge-danger');
    disabled.appendChild(document.createTextNode('Disabled'));

    status.appendChild(enabled);
    status.appendChild(disabled);

    thead.appendChild(status);


    //transformation each person object -> array of tr
    const rows = persons.map(function (person) {
        return renderPerson(person);
    });


    




    var flag = 1;
    enabled.addEventListener('click', () => {

        if (flag === 1) {        
            console.log('Click-1');
            // personsState.renderEnabledList();
            flag = 0;
        }
        else {
            console.log('Click-2');
            // personsState.setPersonList(persons);
            flag = 1;
        }
    });


    disabled.addEventListener('click', () => {

        if (flag === 1) {        
            console.log('disClick-1');
            // personsState.renderDisabledList();
            flag = 0;
        }
        else {
            console.log('disClick-2');
            // personsState.setPersonList(persons);
            flag = 1;
        }
    });








    rows.forEach(function (row) {
        table.appendChild(row);
    });

    return table;
}

function stateFactory () {

    //properties
    const personList = [];

    //methods
    return {
        setPersonList: function(persons) {
            persons.forEach(person => {
                // person = new Proxy(person, {
                //     set(target, p, value, receiver) {
                //         target[p] = value;
                //         render(renderPersonList(personList, renderPerson))
                //     }
                // });
                personList.push(person)
            });
            //renderPerson is name of function
            render(renderPersonList(personList, renderPerson)); //append to #app, rendered person list. For each person use closure/callback renderPerson
        },
        getPersonList: function() {
            return personList;
        },
        getPersonById: function(id) {
            return personList.find(person => person.id === id)
        },
        deletePersonById: function(id) {
            personList.forEach((person, position) => { //person -> object, position -> its position in array
                if(person.id === id) {
                    personList.splice(position, 1);
                }
            });
            render(renderPersonList(personList, renderPerson));
        },
        switchEnabledProperty: function(id) {
            personList.forEach(person => {
                if(person.id === id) {
                    person.enabled = !person.enabled
                }
            });
            render(renderPersonList(personList, renderPerson));
        },

        renderEnabledList: function() {
            //creating the new array from personList, based on filter
            const enabledPersonList = personList.filter(person => {
                return person.enabled;
            });
            render(renderPersonList(enabledPersonList, renderPerson))
        },
        renderDisabledList: function() {
            //creating the new array from personList, based on filter
            const disabledPersonList = personList.filter(person => {
                return !person.enabled;
            });
            render(renderPersonList(disabledPersonList, renderPerson))
        },
        renderEditable: function() {
            render(renderPersonList(personList, renderEditablePerson))
        },


        



        reversSortById: function(id) {

            const sortList = personList.sort((a, b) => {
                return b.id - a.id; 
            })


        // for (var i = 0; i < personList.length; i++)  {  
        //     const sortList = personList.sort((person) => {
        //         if (person.id[i] > person.id[i+1]) {
        //             return 1;
        //         }
        //         if (person.id[i] < person.id[i+1]) {
        //             return -1;
        //         }
        //         return 0;
        //     })
        // }

        }
    }
}








let personsState = stateFactory();

(function() {
    fetch('data.json')
        .then(res => res.json())
        .then(persons => personsState.setPersonList(persons))
})(); 