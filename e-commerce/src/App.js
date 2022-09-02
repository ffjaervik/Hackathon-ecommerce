import './App.css';
import CardList from './components/CardList/CardList';
import useAPI from './components/useAPI/useAPI';

function App() {
    const { data } = useAPI();
    console.log(data);
    return (
        <div className='w-full sm:w-6 md:w-9 lg:w-20 pl-9 ml-12'>
            <p className='bg-color[white]'>Hello World</p>
            <CardList />
        </div>
    );
}

export default App;
