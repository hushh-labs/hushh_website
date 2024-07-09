import React from "react";

const HushhButtonIcon = ({ size }) => {
  const iconSize = size || 80;
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.5625 0.0957031H23.4375C10.4933 0.0957031 0 10.589 0 23.5332V56.6582C0 69.6024 10.4933 80.0957 23.4375 80.0957H56.5625C69.5067 80.0957 80 69.6024 80 56.6582V23.5332C80 10.589 69.5067 0.0957031 56.5625 0.0957031Z"
        fill="url(#paint0_linear_1212_922)"
      />
      <g clipPath="url(#clip0_1212_922)">
        <path
          d="M49.0344 22.0957C50.3703 22.0957 51.65 22.623 52.5922 23.5723L60.9453 31.9184C61.6203 32.5934 62 33.5145 62 34.4707C62 35.427 61.6203 36.348 60.9453 37.023L52.5922 45.3691C51.65 46.3113 50.3703 46.8457 49.0344 46.8457C46.4328 46.8457 44.2953 44.877 44.0281 42.3457H31.625C31.0063 42.3457 30.5 41.8395 30.5 41.2207V38.3801C30.5 38.0848 30.2609 37.8457 29.9656 37.8457C29.825 37.8457 29.6914 37.902 29.5859 38.0004L21.8727 45.7207L29.5859 53.441C29.6844 53.5395 29.825 53.5957 29.9656 53.5957C30.2609 53.5957 30.5 53.3566 30.5 53.0613V50.2207C30.5 49.602 31.0063 49.0957 31.625 49.0957H39.5C40.7445 49.0957 41.75 50.1012 41.75 51.3457C41.75 52.5902 40.7445 53.5957 39.5 53.5957H34.9719C34.7047 56.127 32.5672 58.0957 29.9656 58.0957C28.6297 58.0957 27.35 57.5684 26.4078 56.6191L18.0547 48.273C17.3797 47.598 17 46.677 17 45.7207C17 44.7645 17.3797 43.8434 18.0547 43.1684L26.4078 34.8223C27.35 33.8801 28.6297 33.3457 29.9656 33.3457C32.5672 33.3457 34.7047 35.3145 34.9719 37.8457H47.375C47.9937 37.8457 48.5 38.352 48.5 38.9707V41.8113C48.5 42.1066 48.7391 42.3457 49.0344 42.3457C49.175 42.3457 49.3086 42.2895 49.4141 42.191L57.1273 34.4707L49.4141 26.7504C49.3156 26.652 49.175 26.5957 49.0344 26.5957C48.7391 26.5957 48.5 26.8348 48.5 27.1301V29.9707C48.5 30.5895 47.9937 31.0957 47.375 31.0957H39.5C38.2555 31.0957 37.25 30.0902 37.25 28.8457C37.25 27.6012 38.2555 26.5957 39.5 26.5957H44.0281C44.2953 24.0645 46.4328 22.0957 49.0344 22.0957Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1212_922"
          x1="74.9738"
          y1="31.7147"
          x2="1.48753"
          y2="37.7608"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E54D60" />
          <stop offset="1" stopColor="#A342FF" />
        </linearGradient>
        <clipPath id="clip0_1212_922">
          <rect
            width="45"
            height="36"
            fill="white"
            transform="translate(17 22.0957)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HushhButtonIcon;
