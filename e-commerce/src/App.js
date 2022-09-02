import './App.css';
import CardList from './components/CardList/CardList';
import useAPI from './components/useAPI/useAPI';

function App() {
    const { data } = useAPI();

    return (
        <div className='w-full '>
            <p className='bg-color[white]'>Responsive E-Commerce Site</p>
            <CardList />
        </div>
    );
}

export default App;
