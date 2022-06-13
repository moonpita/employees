import React, { useState } from 'react';
import { employeesList } from '../../data/employees';
import Inputmask from 'inputmask';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Detail(): JSX.Element {
  const id = Number(window.location.pathname.split('/').reverse()[0]);
  const employee = employeesList.find((el) => el.id === id);

  const [phone, setPhone] = useState(employee?.phone);
  const [birthday, setBirthday] = useState(employee?.birthday);
  const [role, setRole] = useState(employee?.role);
  const [name, setName] = useState(employee?.name);

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
    const index = employeesList.findIndex((el) => el.id === employee?.id);
    const newEl: any = {};
    Object.assign(newEl, employeesList[index]);
    for (let key of formRef.current.elements) {
      if (key.value) {
        newEl[key.name] = key.value;
      }
    }
    employeesList[index] = newEl;
    alert('Данные сохранены');
  };

  return (
    <>
      <Link to={'/'}>К списку</Link>
      <form className="w-3/4 m-auto" ref={formRef} onSubmit={submitHandler}>
        {error && <div className=" bg-red">Error!</div>}
        <div className="flex border-b-2 py-5">
          <p>Name: </p>
          <input
            className="border border-orange-200mx-2"
            type="text"
            onBlur={blurName}
            name="name"
            value={name}
            onChange={nameHandler}
          />
        </div>
        <div className="flex border-b-2 py-5">
          <p>Phone: </p>
          <input
            className="border border-orange-200mx-2"
            type="text"
            name="phone"
            onChange={phoneHandler}
            value={phone}
          />
        </div>
        <div className="flex border-b-2 py-5">
          <p>Role: </p>
          <input
            className="border border-orange-200mx-2"
            name="role"
            type="text"
            value={role}
            onChange={roleHandler}
          />
        </div>
        <div className="flex border-b-2 py-5">
          <p>Birthday: </p>
          <input
            className="border border-orange-200mx-2"
            type="text"
            name="birthday"
            onBlur={blurBirthday}
            value={birthday}
            onChange={birthdayHandler}
          />
        </div>
        <button
          type="submit"
          disabled={error}
          className="border border-cyan-300 px-5 py-2 mt-10 disabled:opacity-30"
        >
          Сохранить
        </button>
      </form>
    </>
  );
}

export default Detail;
