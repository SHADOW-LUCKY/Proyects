import mug from './assets/images/mug.jpg';
import wallet from './assets/images/wallet.jpg';
import white from './assets/images/white.jpg';
import ListToDo from './components/ListToDo';
import Todo from './components/Todo';

const concepts = [
  {
    title: 'T-shirt',
    image: white,
    description:
      'A white t-shirt',
    price: 35,
  },
  {
    title: 'Wallet',
    image: wallet,
    description:
      'A fancy wallet',
    price: 20,
  },
  {
    title: 'Cup',
    image: mug,
    description:
      'A Tea cup',
    price: 5,
  },
];

function App() {
  return (
    <div>
        <h1>E-commerce in React and SnipCart</h1>
       <div >
        <ListToDo  concepts={concepts} />
      </div>
    </div>
  );
}

export default App;
