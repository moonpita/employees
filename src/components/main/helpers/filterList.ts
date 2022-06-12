import { FilterTypes } from '../../../const';
import { Employees } from '../../../types/employee';

type FilterPayload = {
  filterName: string;
  filterType: string;
};

function filter(list: Employees, payload: FilterPayload) {
  switch (payload.filterName) {
    case FilterTypes.Archive:
      return filterArchive(list, payload.filterType);
    case FilterTypes.Role:
      return filterRole(list, payload.filterType);
    case FilterTypes.Date:
      return filterDate(list, payload.filterType);
    case FilterTypes.Name:
      return filterName(list, payload.filterType);
    default:
      return list;
  }
}

function filterDate(list: Employees, payload: string) {
  return list.sort((a, b) => {
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
    if (payload === 'asc') {
      return bNum - aNum;
    }
    return aNum - bNum;
  });

}

function filterRole(list: Employees, payload: string) {
  if (payload === 'any') {
    return list;
  }
  return list.filter((el) => el.role === payload);
}

function filterArchive(list: Employees, payload: string) {
  if (payload === 'true') {
    return list.filter((el) => el.isArchive);
  } else {
    return list.filter((el) => el.isArchive).reverse();
  }
}

function filterName(list: Employees, payload: string) {
  if (payload === 'asc') {
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
