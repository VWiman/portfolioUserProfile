import "@/styles/globals.css";
import Layout from "./layouts/Layout";
import { CardsProvider } from "@/context/CardsContext";

export default function App({ Component, pageProps }) {
	return (
		<CardsProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CardsProvider>
	);
}
