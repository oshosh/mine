interface Props {
  textArr: string[];
  text: string;
}
export function CustomToastText({ textArr, text }: Props) {
  return (
    <>
      {textArr.length >= 1 ? (
        textArr.map((syntax, index) => (
          <div key={index}>
            <p>{syntax}</p>
          </div>
        ))
      ) : (
        <p>{text}</p>
      )}
    </>
  );
}
