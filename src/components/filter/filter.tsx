import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { employeesList } from '../../data/employees';
import { changeArchive, changeDate, changeName, changeRole } from '../../store/action';
import { ActionType } from '../../types/store';

function Filter(): JSX.Element {
  const dispatch = useDispatch();
  
  let allRoles = employeesList.map(el => el.role);
  allRoles = [...new Set(allRoles)];
  // Чекбокс архива
  const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeArchive(String(event.target.checked)));
  };
  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.value.split(',')[0];
    const payload = event.target.value.split(',')[1];
    switch (name) {
      case(ActionType.changeName): {dispatch(changeName(payload)); return 0};
      case(ActionType.changeRole): {dispatch(changeRole(payload)); return 0;};
      case(ActionType.changeDate): {dispatch(changeDate(payload)); return 0;};
      default: throw new Error('no case') 
    }
  }

  return (
    <div className="flex w-4/5 m-auto my-4">
      <select name="nameSelector" id="" onChange={selectHandler} className="w-1/4">
        {/* В value передаём тип экшена и тип данные для сортировки(сверху вниз, снизу вверх, должность и тд) */}
        <option value={`${ActionType.changeName},asc`}>По имени: А-Я</option>
        <option value={`${ActionType.changeName},desc`}>По имени: Я-А</option>
      </select>
      <select name="nameSelector" id="" onChange={selectHandler} className="w-1/4">
        <option value={`${ActionType.changeDate},asc`}>По дате рождения: 1900-2022</option>
        <option value={`${ActionType.changeDate},desc`}>По дате рождения: 2022-1900</option>
      </select>
      <select name="roleSelector" id="" onChange={selectHandler} className="w-1/4">
        <option value={`${ActionType.changeRole},any`}>По должности: Любая</option>
        {allRoles.map(el => {
          return (
            <option value={`${ActionType.changeRole},${el}`}>По должности: {el}</option>
          )
        })}
      </select>
      <input type="checkbox" id="isArchiveInput" className=" archive-input" onChange={checkboxHandler}/>
      <label htmlFor="isArchiveInput" className="w-1/4 archive-label">
        В архиве
      </label>
    </div>
  );
}

export default Filter;
