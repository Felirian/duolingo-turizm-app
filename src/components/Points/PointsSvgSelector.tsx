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
          viewBox='0 0 79 67'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_171_1199)'>
            <ellipse cx='39.5' cy='31' rx='39.5' ry='31' fill='#FF8F04' />
          </g>
          <path
            d='M51.5 8.5L22.5 49.5C27 52.5 35 54 40 54L65 15.5C61.4 11.1 54.5 9 51.5 8.5Z'
            fill='#FF9B1F'
          />
          <path
            d='M40.5 6L13.5009 42.5C6.00019 37 6.62154 27 9.00103 22C14.712 9.99967 32 6 40.5 6Z'
            fill='#FF9B1F'
          />
          <defs>
            <filter
              id='filter0_d_171_1199'
              x='0'
              y='0'
              width='79'
              height='67'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.996078 0 0 0 0 0.427451 0 0 0 0 0.172549 0 0 0 1 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_171_1199'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_171_1199'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      );

    default:
      return <></>;
  }
};

export default PointsSvgSelector;
