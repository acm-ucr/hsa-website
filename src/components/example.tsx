const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="grid h-80 w-2/4 grid-rows-3 items-center justify-items-center gap-4 rounded bg-red-200 p-6">
      <div className="w-1/2 bg-blue-200 p-5 text-center text-lg">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-4">
        <div className="left- 0 w-full rounded-full bg-blue-400 p-5 text-center text-lg">
          {" "}
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-5 text-center text-lg">
          {props.text3}{" "}
        </div>
      </div>
      {
        <div className="w-1/2 bg-blue-600 p-5 text-center text-lg text-white">
          {props.text4}{" "}
        </div>
      }
    </div>
  );
};

export default Example;
