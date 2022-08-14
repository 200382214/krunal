import React from 'react';

const SocialLinks = props => {
    return (
      <div className="social text-dark">
        <a
          id="profile-link"
          href="https://www.facebook.com/krunal.sonagara"
          title="Link to photographer's facebook Profile"
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          href="https://twitter.com/Dhvanit24"
          title="Link to photographer's Twitter profile"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://www.instagram.com/krunal_1516/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to photographer's instagram Profile"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    );
  };
  export default SocialLinks;