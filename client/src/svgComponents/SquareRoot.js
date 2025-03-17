function SquareRoot({ width, height }) {
  return (
    <svg
      fill="#000000"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      id="square-root"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color"
    >
      <path
        id="primary"
        d="M3,12H4.31a1,1,0,0,1,.93.65L8,20,10.85,4.82a1,1,0,0,1,1-.82H21"
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      ></path>
    </svg>
  );
}

export default SquareRoot;
