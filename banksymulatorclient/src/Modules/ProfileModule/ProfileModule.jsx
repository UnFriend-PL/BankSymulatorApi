import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/UserProvider/UserContext";
import "./ProfileModule.scss";
import { MdEditSquare } from "react-icons/md";
import EditProfileModal from "../../Components/EditProfileComponent/EditProfile";

export function ProfileModule() {
  const { getUser, setUserData } = useContext(UserContext);
  const [user, setUser] = useState(getUser());
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    const updatedUserData = getUser();
    setUser(updatedUserData);
  };

  return (
    <div className="profile">
      <div className="profile__section">
        <div className="profile__section__title">
          Personal Data
          <MdEditSquare className="edit" onClick={handleEdit} />
          <div className="profile__section__title__line"></div>
        </div>
        <div className="profile__section__content">
          {isEditing && (
            <EditProfileModal user={user} handleEdit={handleEdit} />
          )}
          <div className="profile__section__content__item">
            <label className="profile__section__content__item__label">
              Email:
            </label>
            <span className="profile__section__content__item__value">
              {user.email}
            </span>
          </div>
          <div className="profile__section__content__item">
            <label className="profile__section__content__item__label">
              First Name:
            </label>
            <span className="profile__section__content__item__value">
              {user.name}
            </span>
          </div>
          <div className="profile__section__content__item">
            <label className="profile__section__content__item__label">
              Last Name:
            </label>
            <span className="profile__section__content__item__value">
              {user.surname}
            </span>
          </div>
          <div className="profile__section__content__item">
            <label className="profile__section__content__item__label">
              BirthDay:
            </label>
            <span className="profile__section__content__item__value">
              {user.birthDate ? user.birthDate.split("T")[0] : ""}
            </span>
          </div>
          <div className="profile__section__content__item">
            <label className="profile__section__content__item__label">
              Phone:
            </label>
            <span className="profile__section__content__item__value">
              {user.phoneNumber}
            </span>
          </div>
          <div className="profile__section__content__item">
            <label className="profile__section__content__item__label">
              Address:
            </label>
            <span className="profile__section__content__item__value">
              {user.address}
            </span>
          </div>
          <div className="profile__section__content__item">
            <label className="profile__section__content__item__label">
              Pesel:
            </label>
            <span className="profile__section__content__item__value">
              {user.pesel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}