import { useSelector } from 'react-redux';
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
        </>
    )
}

export default Main;
