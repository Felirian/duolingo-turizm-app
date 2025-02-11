interface SvgSelectorProps {
  name: string;
}

const PointsSvgSelector: React.FC<SvgSelectorProps> = ({ name }) => {
  switch (name) {
    case 'point':
      return (
        <svg
          width='79'
          height='67'
          viewBox='0 0 81 68'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse cx='39.5' cy='36' rx='39.5' ry='31' fill='#FE6D2C' />
          <ellipse cx='39.5' cy='31' rx='39.5' ry='31' fill='#FF8F04' />
          <path
            d='M51.5 8.5L22.5 49.5C27 52.5 35 54 40 54L65 15.5C61.4 11.1 54.5 9 51.5 8.5Z'
            fill='#FF9B1F'
          />
          <path
            d='M40.5 6L13.5009 42.5C6.00019 37 6.62154 27 9.00103 22C14.712 9.99967 32 6 40.5 6Z'
            fill='#FF9B1F'
          />
          <path
            d='M34.123 44C33.161 44 32.42 43.753 31.9 43.259C31.406 42.739 31.159 42.011 31.159 41.075C31.159 40.139 31.406 39.424 31.9 38.93C32.42 38.436 33.161 38.189 34.123 38.189H37.633V22.238H40.909L35.254 25.709C34.578 26.125 33.941 26.294 33.343 26.216C32.745 26.112 32.238 25.852 31.822 25.436C31.406 25.02 31.133 24.513 31.003 23.915C30.873 23.317 30.925 22.719 31.159 22.121C31.393 21.523 31.861 21.016 32.563 20.6L37.945 17.246C38.517 16.882 39.102 16.609 39.7 16.427C40.324 16.245 40.974 16.154 41.65 16.154C42.638 16.154 43.405 16.414 43.951 16.934C44.497 17.428 44.77 18.156 44.77 19.118V38.189H47.89C48.852 38.189 49.58 38.436 50.074 38.93C50.594 39.424 50.854 40.139 50.854 41.075C50.854 42.011 50.594 42.739 50.074 43.259C49.58 43.753 48.852 44 47.89 44H34.123Z'
            fill='white'
          />
        </svg>
      );
    case 'cloud':
      return (
        <svg
          width='73'
          height='36'
          viewBox='0 0 73 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10 0C4.47715 0 0 4.47715 0 10V21C0 26.5228 4.47715 31 10 31H33.3246L36.5 36L39.6754 31H63C68.5229 31 73 26.5228 73 21V10C73 4.47715 68.5229 0 63 0H10Z'
            fill='white'
          />
        </svg>
      );

    case 'locked':
      return (
        <svg
          width='26'
          height='33'
          viewBox='0 0 26 33'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M26 27.7791C26 30.6358 23.6717 33 20.8582 33H5.23877C2.32832 33 0 30.6358 0 27.7791C0 27.7791 0.582066 13.0029 0.582066 12.6089C1.06714 5.51635 6.49997 0 13 0C19.597 0 25.0299 5.61495 25.5149 12.7075C25.5149 13.003 26 27.7791 26 27.7791ZM17.1716 20.8835C17.1716 18.6179 15.3283 16.7463 13 16.7463C10.7686 16.7463 8.82834 18.6179 8.82834 20.8835C8.82834 22.4597 9.70149 23.8388 10.9627 24.5284C10.9627 24.5941 10.9627 24.6925 10.9627 24.8238V27.5821C10.9627 28.5672 11.7388 29.3552 12.7089 29.3552H13.3881C14.3582 29.3552 15.1343 28.5672 15.1343 27.5821V24.8238C15.1343 24.6925 15.102 24.5941 15.0373 24.5284C16.2985 23.8388 17.1716 22.4597 17.1716 20.8835ZM19.9851 10.8358C18.9179 6.40299 16.2985 4.82687 13 4.92537C9.89549 4.92537 7.08205 6.40299 6.01488 10.8358C5.82085 11.7224 6.49998 12.5104 7.37311 12.5104C10.7686 12.5104 14.9403 12.5104 18.6268 12.5104C19.5 12.5104 20.1791 11.7224 19.9851 10.8358Z'
            fill='white'
            fillOpacity='0.6'
          />
        </svg>
      );

    default:
      return <></>;
  }
};

export default PointsSvgSelector;
