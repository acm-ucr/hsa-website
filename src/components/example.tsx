const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="text-l flex w-2/3 flex-col items-center gap-5 gap-8 rounded-lg bg-red-200 p-10">
      <div className="w-1/2 bg-blue-200 p-5 text-center">{props.text1}</div>

      <div className="flex w-1/2 flex-row gap-8">
        <div className="w-full rounded-full bg-blue-400 p-5 text-center">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-5 text-center">
          {props.text4}
        </div>
      </div>

      <div className="w-1/2 bg-blue-600 p-5 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
