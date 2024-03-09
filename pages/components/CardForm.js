import { CardsDispatch } from "@/context/CardsContext";
import { useContext, useEffect, useState } from "react";

let nextId = 3;

const CardForm = () => {
	const [newImage, setNewImage] = useState("");
	const [newName, setNewName] = useState("");
	const [newTitle, setNewTitle] = useState("");
	const [newAdress, setNewAdress] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [isPicking, setIsPicking] = useState(false);

	const dispatch = useContext(CardsDispatch);

	function prevent(event) {
		event.preventDefault();

		dispatch({
			type: "created",
			id: nextId++,
			image: newImage,
			name: newName,
			title: newTitle,
			adress: newAdress,
			phone: newPhone,
			email: newEmail,
		});
	}

	useEffect(() => {
		console.log("NewImage:", newImage);
	}, [newImage, setNewImage]);

	return (
		<>
			<form
				onSubmit={(e) => prevent(e)}
				className={
					isPicking
						? "hidden"
						: "flex flex-col md:grid md:grid-cols-2 py-10 md:py-12 rounded-xl items-center  place-content-center w-full md:min-w-[32rem] max-h-fit lg:max-h-64 bg-pea-500 form"
				}>
				<label
					onClick={() => setIsPicking(true)}
					style={
						newImage
							? {
									backgroundImage: `url(${newImage})`,
									backgroundSize: "192px 256px",
							  }
							: {}
					}
					className={
						newImage
							? "hollow-card row-span-4 place-self-center md:place-self-end"
							: "bg-white hollow-card row-span-4 place-self-center md:place-self-end text-white"
					}>
					<div className="bg-pea-800/80 py-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6 place-self-center select-none hover:text-white hover:scale-100">
							<path
								fillRule="evenodd"
								d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
								clipRule="evenodd"
							/>
						</svg>
						{newImage ? (
							<div>
								<p>Picture selected</p>
								<p className="text-xs">Click to change</p>
							</div>
						) : (
							<p>Choose a profile picture</p>
						)}
					</div>
				</label>

				<label className=" max-h-12 m-4 md:mr-0 md:mt-0 place-self-center">
					<input
						className="max-w-28 p-1"
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
						placeholder="Name"></input>
				</label>
				<label className=" max-h-12 m-4 md:mr-0 place-self-center">
					<input
						className="max-w-28 p-1"
						value={newAdress}
						onChange={(e) => setNewAdress(e.target.value)}
						placeholder="Adress"></input>
				</label>
				<label className=" max-h-12 m-4 md:mr-0 place-self-center">
					<input
						className="max-w-28 p-1"
						value={newEmail}
						onChange={(e) => setNewEmail(e.target.value)}
						placeholder="Email"></input>
				</label>
				<label className=" max-h-12 m-4 md:mr-0 place-self-center">
					<input
						className="max-w-28 p-1"
						value={newPhone}
						onChange={(e) => setNewPhone(e.target.value)}
						placeholder="Phone"></input>
				</label>
				<select
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
					className=" min-w-[124px] md:min-w-[12rem] place-self-center md:place-self-end max-h-12 p-1 my-4 md:m-0">
					<option>Select a title</option>
					<option>Actor</option>
					<option>Actress</option>
					<option>Director</option>
					<option>Creative Director</option>
					<option>Writer</option>
				</select>
				<button
					id="submit"
					className="  bg-pea-400 active:bg-pea-600  text-white font-bold h-min w-min p-2 rounded-md cursor-pointer text-sm text-center border-none shadow-sm hover:shadow-md active:shadow-sm shadow-black/60 hover:shadow-black/20  active:shadow-black/40 transition-all md:mt-0 place-self-center "
					onClick={(e) => prevent(e)}>
					{" "}
					Submit
				</button>
			</form>

			{/* isPicking */}
			{isPicking ? (
				<div className="flex flex-col items-center self-start place-self-center gap-2 bg-pea-500 rounded-xl my-2 mx-2 p-10 popup max-w-52 col-span-1">
					<div
						style={
							newImage
								? {
										backgroundImage: `url(${newImage})`,
										backgroundSize: "192px 256px",
								  }
								: {}
						}
						className={
							newImage
								? "h-64 w-48 shadow-inner shadow-black rounded-xl"
								: "h-64 w-48 bg-white shadow-inner shadow-black rounded-xl"
						}></div>
					<select onChange={(e) => setNewImage(e.target.value)} id="imagePicker" className="w-48">
						<option defaultValue={""}>Choose a picture</option>
						<option value={"/anna.png"} type="select">
							Woman - 1
						</option>
						<option value={"/frida.png"} type="select">
							Woman - 2
						</option>
						<option value={"/jennifer.png"} type="select">
							Woman - 3
						</option>
						<option value={"/sarah.png"} type="select">
							Woman - 4
						</option>
						<option value={"/ben.png"} type="select">
							Man - 1
						</option>
						<option value={"/jay.png"} type="select">
							Man - 2
						</option>
						<option value={"/sam.png"} type="select">
							Man - 3
						</option>
					</select>
					<button
						type="button"
						className="w-48 p-2 bg-pea-400 active:bg-pea-600  text-white font-bold rounded-md cursor-pointer text-sm text-center border-none shadow-sm hover:shadow-md active:shadow-sm shadow-black/60 hover:shadow-black/20 active:shadow-black/40 transition-all"
						onClick={() => setIsPicking(!isPicking)}>
						Choose picture
					</button>
				</div>
			) : (
				<div className="hidden"></div>
			)}
		</>
	);
};

export default CardForm;
