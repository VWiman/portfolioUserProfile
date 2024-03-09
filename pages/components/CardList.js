import { CardsContext, CardsDispatch, EditingContext } from "@/context/CardsContext";
import { useContext, useEffect } from "react";

const CardList = () => {
	const currentCards = useContext(CardsContext);
	const { isEditing, setIsEditing, cardToEdit, setCardToEdit } = useContext(EditingContext);
	const dispatch = useContext(CardsDispatch);

	function edit(id) {
		if (isEditing === false) {
			setIsEditing(true);
			const foundCard = currentCards.find((card) => card.id === id);
			setCardToEdit(foundCard);
		}
	}

	useEffect(() => {
		console.log("Is editing:", isEditing, "Card:", cardToEdit);
	}, [isEditing, setIsEditing, cardToEdit, setCardToEdit]);

	return currentCards.map((card) => (
		<div
			key={card.id}
			className="card self-center place-self-center"
			style={{
				backgroundImage: `url(${card.image})`,
				backgroundSize: "192px 256px",
			}}>
			<div className="flex flex-row justify-between w-48">
				<svg
					onClick={() =>
						dispatch({
							type: "deleted",
							id: card.id,
							image: card.image,
							name: card.name,
							title: card.title,
							adress: card.adress,
							phone: card.phone,
							email: card.email,
						})
					}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="w-4 h-4 text-white m-3 self-start bg-dark-pea-950/50 p-1 rounded-md">
					<path
						fillRule="evenodd"
						d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
						clipRule="evenodd"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					onClick={() => edit(card.id)}
					className="w-4 h-4 text-white m-3 self-end bg-dark-pea-950/50 p-1 rounded-md">
					<path d="M7.25 13.25V7.5h1.5v5.75a.75.75 0 0 1-1.5 0ZM8.75 2.75V5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V2.75a.75.75 0 0 1 1.5 0ZM2.25 9.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4.5V2.75a.75.75 0 0 0-1.5 0V9.5h-.75ZM10 10.25a.75.75 0 0 1 .75-.75h.75V2.75a.75.75 0 0 1 1.5 0V9.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM3 12v1.25a.75.75 0 0 0 1.5 0V12H3ZM11.5 13.25V12H13v1.25a.75.75 0 0 1-1.5 0Z" />
				</svg>
			</div>

			<div className="flex flex-col absolute bg-dark-pea-950/50 text-pea-50 w-full items-center bottom-0 rounded-br-xl rounded-bl-xl py-3">
				<p className="text-xl md:text-2xl leading-none md:leading-none lg:leading-none px-3">{card.name}</p>
				<p className="text-sm md:text-base leading-none md:leading-none lg:leading-none px-3">{card.title}</p>
				<div className="flex flex-row gap-3 pt-2">
					<a className=" text-white" href={card.adress}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
							<path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
						</svg>
					</a>
					<a className=" text-white" href={`tel:${card.phone}`}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
							<path
								fillRule="evenodd"
								d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
					<a className=" text-white" href={`mailto:${card.email}`}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
							<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
							<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	));
};

export default CardList;
