import React from 'react';

import './index.scss';

const ErrorPage = () => (
  <div className="errorPage">
    <div className="errorPage__container">
      <div className="errorPage__img">
        <img
          src="https://media.licdn.com/dms/image/D4D0BAQG8fQlyC7YOxA/company-logo_200_200/0/1688400672391/neocoast_logo?e=2147483647&v=beta&t=4I_aV2DApODpx1mHAWrbgpeD81eW799vkCfy9UTtWDM"
          alt=""
        />
      </div>
      <h1>The route doesn&apos;t exist</h1>
    </div>
  </div>
);

export default ErrorPage;
