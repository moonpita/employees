import { Employee, Employees } from '../../types/employee';
import EmployeeItem from '../employee-item/employee-item';

type ListProps = {
  list: Employees
}

function List(props: ListProps): JSX.Element {
  return (
    <div className="list flex-col mx-auto block w-3/5">
      {props.list.map((el: Employee, i) => {
        return <EmployeeItem
            key={String(el.id)}
            name={el.name}
            role={el.role}
            phone={el.phone}
        />;
      })}
    </div>
  );
}

export default List;
