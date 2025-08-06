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
      case 'achievements' : 
      return (
        <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_6002_762)">
          <path d="M2.5918 26.2256C2.9456 26.305 3.31364 26.3486 3.69141 26.3486H8.08594C7.82851 27.6253 6.70197 28.5875 5.34961 28.5879C3.95407 28.5877 2.79973 27.563 2.5918 26.2256ZM17.415 26.2256C17.2071 27.5628 16.0555 28.5875 14.6602 28.5879C13.3076 28.5877 12.1794 27.6254 11.9219 26.3486H16.3154C16.6932 26.3486 17.0612 26.305 17.415 26.2256ZM12.7939 0C14.4127 7.98847e-05 15.7246 1.31283 15.7246 2.93164V5.72461H16.3115C17.9684 5.72461 19.3115 7.06776 19.3115 8.72461V21.3486C19.3114 23.0054 17.9683 24.3486 16.3115 24.3486H3.6875C2.03094 24.3483 0.687579 23.0052 0.6875 21.3486V8.72461C0.6875 7.06793 2.03089 5.7249 3.6875 5.72461H4.27539V2.93164C4.27539 1.31298 5.58845 0.000322675 7.20703 0H12.7939ZM5.00293 10.5371C4.17458 10.5372 3.50293 11.2087 3.50293 12.0371V18.0371C3.50317 18.8653 4.17473 19.537 5.00293 19.5371C5.83114 19.537 6.50269 18.8653 6.50293 18.0371V12.0371C6.50293 11.2087 5.83129 10.5372 5.00293 10.5371ZM10.0029 10.5371C9.17458 10.5372 8.50293 11.2087 8.50293 12.0371V18.0371C8.50317 18.8653 9.17473 19.537 10.0029 19.5371C10.8311 19.537 11.5027 18.8653 11.5029 18.0371V12.0371C11.5029 11.2087 10.8313 10.5372 10.0029 10.5371ZM15.0029 10.5371C14.1746 10.5372 13.5029 11.2087 13.5029 12.0371V18.0371C13.5032 18.8653 14.1747 19.537 15.0029 19.5371C15.8311 19.537 16.5027 18.8653 16.5029 18.0371V12.0371C16.5029 11.2087 15.8313 10.5372 15.0029 10.5371ZM7.11133 2.00488C6.64209 2.05289 6.27539 2.44973 6.27539 2.93164V5.72461H13.7246V2.93164C13.7246 2.44938 13.3584 2.05242 12.8887 2.00488L12.7939 2H7.20703L7.11133 2.00488Z" fill="white"/>
          </g>
          <defs>
          <filter id="filter0_d_6002_762" x="0.6875" y="0" width="19.625" height="29.5879" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6002_762"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6002_762" result="shape"/>
          </filter>
          </defs>
        </svg>
      );
    default:
      return <></>;
  }
};

export default BottomTabsSvgSelector;
