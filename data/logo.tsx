export const Logo = ({ color = 'black' }) => {
  return (
    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.7028 6.2972C40.7348 10.3292 43 15.7978 43 21.5H21.5L0 21.5C0 15.7978 2.26517 10.3292 6.29721 6.2972C10.3292 2.26517 15.7978 0 21.5 0C27.2022 0 32.6708 2.26517 36.7028 6.2972ZM21.5002 15.0499C23.875 15.0499 25.8002 13.1247 25.8002 10.7499C25.8002 8.37503 23.875 6.44986 21.5002 6.44986C19.1254 6.44986 17.2002 8.37503 17.2002 10.7499C17.2002 13.1247 19.1254 15.0499 21.5002 15.0499Z"
        fill={color}
      />
      <mask
        id="mask0_10_58"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="21"
        width="43"
        height="22"
      >
        <path
          d="M43 21.5C43 27.2022 40.7348 32.6708 36.7028 36.7028C32.6708 40.7348 27.2022 43 21.5 43C15.7978 43 10.3292 40.7348 6.29721 36.7028C2.26517 32.6708 8.61001e-07 27.2022 0 21.5L21.5 21.5H43Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_10_58)">
        <rect x="-2.79517" y="27.95" width="50.654" height="2.15" fill={color} />
        <rect x="-2.96704" y="32.25" width="50.654" height="2.15" fill={color} />
        <rect x="-3.8269" y="36.55" width="50.654" height="2.15" fill={color} />
        <rect x="-3.8269" y="40.8501" width="50.654" height="2.15" fill={color} />
        <rect x="-3.8269" y="23.6499" width="50.654" height="2.15" fill={color} />
      </g>
    </svg>
  )
}
