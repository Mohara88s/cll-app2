import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import App from "./App";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter
					future={{
						v7_relativeSplatPath: true,
						v7_startTransition: true,
					}}
				>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>
);