interface SvgSelectorProps {
  name: 'play' | 'home' | 'burger' | string;
}

const BottomTabsSvgSelector: React.FC<SvgSelectorProps> = ({ name }) => {
  switch (name) {
    case 'play':
      return (
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Frame 10128'>
            <g id='Path 17' filter='url(#filter0_d_6001_165)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.3631 2.93586C8.50321 1.68436 6 3.01713 6 5.25892L6 26.7952C6 29.026 8.48157 30.361 10.3431 29.1316L26.4953 18.4638C28.1625 17.3627 28.173 14.9198 26.5153 13.8043L10.3631 2.93586Z'
                fill='white'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_d_6001_165'
              x='6'
              y='2.4541'
              width='22.752'
              height='29.1458'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='1' dy='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_6001_165'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_6001_165'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      );
    case 'home':
      return (
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='home'>
            <g id='Vector' filter='url(#filter0_d_6001_169)'>
              <path
                d='M12.1684 27.7096C12.1816 27.7096 12.1923 27.6989 12.1923 27.6857V23.6204C12.1923 22.5842 13.0349 21.7424 14.0786 21.7358H17.9108C18.9592 21.7358 19.809 22.5796 19.809 23.6204V27.6977C19.809 28.5965 20.5393 29.3269 21.4446 29.3334H24.0591C25.2802 29.3365 26.4523 28.8571 27.3169 28.001C28.1814 27.1449 28.6673 25.9824 28.6673 24.7701V13.1545C28.6673 12.1753 28.2301 11.2464 27.4735 10.6181L18.5913 3.56577C17.0387 2.33224 14.8211 2.37209 13.3145 3.66059L4.62333 10.6181C3.83097 11.2278 3.35739 12.1595 3.33398 13.1545V24.7583C3.33398 27.285 5.39716 29.3334 7.94222 29.3334H10.497C10.9329 29.3365 11.352 29.1668 11.6613 28.862C11.9649 28.5627 12.1381 28.1575 12.1444 27.7335C12.1446 27.7203 12.1552 27.7096 12.1684 27.7096Z'
                fill='white'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_d_6001_169'
              x='3.33398'
              y='2.66675'
              width='26.334'
              height='28.6667'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='1' dy='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_6001_169'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_6001_169'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      );
    case 'burger':
      return (
        <svg
          width='33'
          height='28'
          viewBox='0 0 33 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Group'>
            <g id='Rectangle' filter='url(#filter0_d_6001_173)'>
              <rect x='3.19922' width='25.6' height='5.51515' rx='2.75758' fill='white' />
            </g>
            <g id='Rectangle Copy' filter='url(#filter1_d_6001_173)'>
              <rect y='10.2424' width='32' height='5.51515' rx='2.75758' fill='white' />
            </g>
            <g id='Rectangle Copy 4' filter='url(#filter2_d_6001_173)'>
              <rect
                x='3.19922'
                y='20.4849'
                width='25.6'
                height='5.51515'
                rx='2.75758'
                fill='white'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_d_6001_173'
              x='3.19922'
              y='0'
              width='26.5996'
              height='7.51514'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='1' dy='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_6001_173'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_6001_173'
                result='shape'
              />
            </filter>
            <filter
              id='filter1_d_6001_173'
              x='0'
              y='10.2424'
              width='33'
              height='7.51514'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='1' dy='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_6001_173'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_6001_173'
                result='shape'
              />
            </filter>
            <filter
              id='filter2_d_6001_173'
              x='3.19922'
              y='20.4849'
              width='26.5996'
              height='7.51514'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='1' dy='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_6001_173'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_6001_173'
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

export default BottomTabsSvgSelector;
