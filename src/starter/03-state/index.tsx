import { useState } from "react";

type Links = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Links[] = [
  {
    id: 1,
    url: "some url",
    text: "some text",
  },
  {
    id: 2,
    url: "some url",
    text: "some text",
  },
  {
    id: 3,
    url: "some url",
    text: "some text",
  },
];

function Component() {
  const [text, setText] = useState("shakeAndBake");
  const [number, setNumber] = useState(1);
  const [lists, setLists] = useState<string[]>([]);
  const [links, setLinks] = useState<Links[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          // setText('typescript')
          // setNumber(23)
          // setLists(["hello", "world"]);
          setLinks([...links, { id: 4, url: "hello", text: "hello" }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
