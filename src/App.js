import Button from "./styling/Button";
import Input from "./styling/Input";
import List from "./component/List";
import { Lamaana } from "./styling/styles";
const App = () => {
  return (
    <div>
      <h1>Welcome to Void Gameshop</h1>
      <div>
        <ul>
          <li>
            <Input />
          </li>
          <la>
            <Input />
          </la>
          <la>
            <Button>Name</Button>
          </la>
          <la>
            <Button>Home</Button>
          </la>
        </ul>
      </div>
      <ul>
        <Lamaana>
          <List />
        </Lamaana>
      </ul>
    </div>
  );
};

export default App;
