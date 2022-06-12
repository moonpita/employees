import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FilterTypes } from '../../const';
import { changeFilter } from '../../store/action';

function Filter(): JSX.Element {
  const dispatch = useDispatch();
  const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(changeFilter({
      filterName: FilterTypes.Archive,
      filterType: String(event.target.checked),
    }))
  };
  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.value.split(',')[0];
    const type = event.target.value.split(',')[1];
    dispatch(changeFilter({
      filterName: name,
      filterType: type
    }));
  }

  return (
    <div className="flex w-4/5 m-auto">
      <select name="nameSelector" id="" onChange={selectHandler} className="w-1/4">
        <option value={`${FilterTypes.Name},asc`}>По имени: А-Я</option>
        <option value={`${FilterTypes.Name},desc`}>По имени: Я-А</option>
      </select>
      <select name="nameSelector" id="" onChange={selectHandler} className="w-1/4">
        <option value={`${FilterTypes.Date},asc`}>По дате рождения: 1900-2022</option>
        <option value={`${FilterTypes.Date},desc`}>По дате рождения: 2022-1900</option>
      </select>
      <select name="roleSelector" id="" onChange={selectHandler} className="w-1/4">
        <option value={`${FilterTypes.Role},any`}>По должности: Любой</option>
        <option value={`${FilterTypes.Role},waiter`}>По должности: Официант</option>
        <option value={`${FilterTypes.Role},driver`}>По должности: Водитель</option>
        <option value={`${FilterTypes.Role},cook`}>По должности: Повар</option>
      </select>
      <input type="checkbox" id="isArchiveInput" className="hidden archive-input" onChange={checkboxHandler}/>
      <label htmlFor="isArchiveInput" className="w-1/4 archive-label">
        В архиве
      </label>
    </div>
  );
}

export default Filter;
