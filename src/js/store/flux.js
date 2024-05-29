const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }

			// GET Single agenda
			loadAgendaContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/xgian/contacts");
				if (!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				const data = await response.json();
				setStore({contacts: data.contacts})
			},
			//You will need functions to:
			//POST new contacts through API 
			createNewContact: async () => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/xgian/contacts', {
					
				});
			},
			//PUT updated contacts through API

			//DELETE 
			deleteContact: async (contactId) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/xgian/contacts/${contactId}`, {
					method: "DELETE",
				});
				if(!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				getActions().loadAgendaContacts();
			}
		}
	};
};

export default getState;

// method: "POST",
// 				body: JSON.stringify(contactObject),
// 				headers: {
// 					'Content-type: application/json'
// 				}
// 				if(!response.ok) {
// 					throw new Error(response.status, response.statusText)
// 				}