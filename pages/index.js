import CardForm from "./components/CardForm";
import CardList from "./components/CardList";

export default function Home() {
	return (
		<div className="grid lg:grid-rows-1 lg:grid-cols-2 gap-2 md:gap-8 p-2 w-screen">
			<CardForm />
			<div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-10">
				<CardList />
			</div>
		</div>
	);
}
