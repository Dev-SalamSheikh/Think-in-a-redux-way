import { Provider } from "react-redux";
import Card from "./components/Card";
import CompletedTodos from "./components/CompletedTodos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center gap-0 bg-blue-100 min-h-screen px-6 space-y-2">
        <Navbar />
        <div className="grid place-items-center gap-4">
          <Card>
            <Header />

            <hr className="mt-4" />

            <TodoList />

            <hr className="mt-4" />

            <Footer />
          </Card>

          <CompletedTodos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
