import { Link } from "react-router-dom";
import { Employee } from "../../types/employee";

type EmployeeItemProps = Omit<Employee, 'isArchive' | 'birthday'>

function EmployeeItem(props: EmployeeItemProps): JSX.Element {
    return (
        <Link to={`/detail/${props.id}`} className="flex  mx-auto my-5 w-full">
            <p className="border px-4 py-2 border-orange-200 w-1/3">name: {props.name}</p>
            <p className="border px-4 py-2 border-purple-400 w-1/3">role: {props.role}</p>
            <p className="border px-4 py-2 border-green-200 w-1/3">phone: {props.phone}</p>
        </Link>
    )
}

export default EmployeeItem;
