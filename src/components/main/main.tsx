import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { employeesList } from '../../data/employees';
import { State } from '../../types/store';
import Filter from "../filter/filter";
import List from "../list/list";
import filter from './helpers/filterList';

function Main(): JSX.Element {
    const filterInfo = useSelector((state: State) => state.filter);
    let list = filter(employeesList, filterInfo);

    return (
        <>
          <Filter />
          <List list={list} />
          <Link to={AppRoutes.NewUser} className="mx-auto my-5 py-3 px-7 border-cyan-400 block border max-w-max" >Добавить нового пользователя</Link>
        </>
    )
}

export default Main;
