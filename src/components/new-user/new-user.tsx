import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Employee } from '../../types/employee';
import { employeesList } from '../../data/employees';

function NewUser(): JSX.Element {
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');

  const [error, setError] = useState(false);

  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    var im = new Inputmask('+7 (999) 999-9999');
    im.mask(e.target);
    setPhone(e.target.value);
  };
  const birthdayHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let im = new Inputmask('99.99.9999');
    im.mask(e.target);

    setBirthday(e.target.value);
  };
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const roleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const blurName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 2) {
      setError(true);
    } else setError(false);
  };
  const blurBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      Number(e.target.value.split('.')[0]) > 31 ||
      Number(e.target.value.split('.')[1]) > 12
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const formRef = useRef<any>(document.createElement('form'));
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    
    const els = formRef.current.elements;
    const nextId = Math.floor(Math.random()*1000)
    const newEl: Employee = {
      name: els.name.value,
      phone: els.phone.value,
      birthday: els.birthday.value,
      role: els.role.value,
      isArchive: els.archive.checked,
      id: nextId
    }

    employeesList.push(newEl);
    alert('Данные сохранены');
  };

  return (
    <div>
      <Link to={'/'}>К списку</Link>
      <form className="w-3/4 m-auto" ref={formRef} onSubmit={submitHandler}>
        <h1>Новый пользователь</h1>
        {error && <h2 className="text-red">ERROR!</h2>}
        <div className="flex p-5 border-red-400 border my-4">
          <p>Имя: </p>
          <input
            type="text"
            value={name}
            onBlur={blurName}
            className="border border-black"
            onChange={nameHandler}
            name="name"
          />
        </div>
        <div className="flex p-5 border-red-400 border my-4">
          <p>Телефон: </p>
          <input
            type="text"
            value={phone}
            className="border border-black"
            onChange={phoneHandler}
            name="phone"
          />
        </div>
        <div className="flex p-5 border-red-400 border my-4">
          <p>Дата рождения: </p>
          <input
            type="text"
            value={birthday}
            onBlur={blurBirthday}
            className="border border-black"
            onChange={birthdayHandler}
            name="birthday"
          />
        </div>
        <div className="flex p-5 border-red-400 border my-4">
          <p>Профессия: </p>
          <input
            type="text"
            value={role}
            className="border border-black"
            onChange={roleHandler}
            name="role"
          />
        </div>
        <div className="flex p-5 border-red-400 border my-4">
          <p>В архиве: </p>
          <input type="checkbox" name="archive" />
        </div>
        <button
          type="submit"
          className="border-orange-400 border mx-auto my-2 block py-3 px-7"
        >
          Создать
        </button>
      </form>
    </div>
  );
}

export default NewUser;
