import { createContext, useReducer, useState } from "react";

export const CardsContext = createContext(null);
export const CardsDispatch = createContext(null);
export const EditingContext = createContext(null);

export function CardsProvider({ children }) {
	const [cards, dispatch] = useReducer(cardsReducer, initialCards);
	const [isEditing, setIsEditing] = useState(false);
	const [cardToEdit, setCardToEdit] = useState({});

	return (
		<EditingContext.Provider value={{ isEditing, setIsEditing, cardToEdit, setCardToEdit }}>
			<CardsContext.Provider value={cards}>
				<CardsDispatch.Provider value={dispatch}>{children}</CardsDispatch.Provider>
			</CardsContext.Provider>
		</EditingContext.Provider>
	);
}

function cardsReducer(cards, action) {
	switch (action.type) {
		case "created": {
			return [
				...cards,
				{
					id: action.id,
					image: action.image,
					name: action.name,
					title: action.title,
					adress: action.adress,
					phone: action.phone,
					email: action.email,
				},
			];
		}
		case "edited": {
			const indexToUpdate = cards.findIndex((card) => card.id === action.id);
			const updatedCards = [...cards];
			updatedCards[indexToUpdate] = {
				id: action.id,
				image: action.image,
				name: action.name,
				title: action.title,
				address: action.address,
				phone: action.phone,
				email: action.email,
			};
			return updatedCards;
		}
		case "deleted": {
			const afterCards = cards.filter((card) => card.id !== action.id);
			return afterCards;
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}

const initialCards = [
	{
		id: 0,
		image: "/anna.png",
		name: "Anna Anova",
		title: "Creative Director",
		adress: "https://www.google.com/maps/place/Flemingsberg,+Huddinge/@59.2115617,17.9631889,15.53z/",
		phone: "555-0100",
		email: "notanemailforanna@test.not",
	},
	{
		id: 1,
		image: "/ben.png",
		name: "Ben Thomson",
		title: "Writer",
		adress: "https://www.google.com/maps/place/Flemingsberg,+Huddinge/@59.2115617,17.9631889,15.53z/",
		phone: "555-0100",
		email: "notanemailforanna@test.not",
	},
	{
		id: 2,
		image: "/jay.png",
		name: "Jay Andersen",
		title: "Actor",
		adress: "https://www.google.com/maps/place/Flemingsberg,+Huddinge/@59.2115617,17.9631889,15.53z/",
		phone: "555-0100",
		email: "notanemailforanna@test.not",
	},
];
