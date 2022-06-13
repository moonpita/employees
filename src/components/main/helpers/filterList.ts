import { useSelector } from 'react-redux';
import { lastPick } from '../../../store/action';
import { Employees } from '../../../types/employee';
import { ActionType, State } from '../../../types/store';

type FilterPayload = {
  name: string;
  role: string;
  date: string,
  archive: string,
};


function filter(list: Employees, payload: FilterPayload) {
  return filterRole(list, payload);
}

function filterRole(list: Employees, payload: FilterPayload) {
  let filteredList = () => {
      if (payload.role === 'any') {
        return list;
      }
      return list.filter((el) => el.role === payload.role);
  }
  return filterArchive(filteredList(), payload);
}

function filterArchive(list: Employees, payload: FilterPayload) {
  let filteredList = () => {
    if (payload.archive === 'false') {
      return list.filter((el) => !el.isArchive);
    } else {
      return list.filter((el) => el.isArchive);
    }
  }
  return filterDate(filteredList(), payload);
}

function filterDate(list: Employees, payload: FilterPayload) {
  let filteredList = list.sort((a, b) => {
    // переводим в РУ формат и парсим в число для первого эл.
    let aDate = a.birthday.split('.');
    aDate[0] = aDate[1];
    aDate[1] = aDate[0];
    let aNum = Date.parse(aDate.join('.'));

    // переводим в РУ формат и парсим в число для второго эл.
    let bDate = b.birthday.split('.');
    bDate[0] = bDate[1];
    bDate[1] = bDate[0];
    let bNum = Date.parse(bDate.join('.'));
    console.log(bNum - aNum);
    if (payload.date === 'asc') {
      return bNum - aNum;
    }
    else {
      return aNum - bNum;
    }
  });
  console.log(filteredList);

  if (lastPick === ActionType.changeDate) {
    return filteredList;
  }
  return filterName(filteredList, payload);
}
function filterName(list: Employees, payload: FilterPayload) {
  if (payload.name === 'asc') {
    return list.sort((a,b) => {
      if (a.name < b.name) {return -1;};
      if (a.name > b.name) {return 1;};
      return 0;
    });
  }

  return list.sort((a,b) => {
    if (a.name < b.name) {return -1;};
    if (a.name > b.name) {return 1;};
    return 0;
  }).reverse();
}

export default filter;
