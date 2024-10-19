import "./Profile.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

function Profile() {
  return (
    <div className="profile__wrapper">
      <div className="profile__icon">
        <Link to="/">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </Link>
      </div>

      <div className="profile__container">
        <div className="profile__content">
          <div className="profile__img">
            <FontAwesomeIcon icon={faCircleUser} className="profile__avatar" />
          </div>

          {/* Description */}
          <div className="profile__description">
            <div className="profile__item">
              <span>Name</span>
              Admin
            </div>
            <div className="profile__item">
              <span>Username</span>
              @Admin
            </div>
            <div className="profile__item">
              <span>Email</span>
              admin@gmail.com
            </div>
            <div className="profile__item">
              <span>Phone</span>
              09812341
            </div>
            <div className="profile__item">
              <span>Address</span>
              Ly Tu Trong, Ninh Kieu , Can Tho
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="profile__action">
          <Button black full>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
