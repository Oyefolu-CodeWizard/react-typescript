type BasicProfileCardProps = {
  type: "basic";
  name: string;
};

type AdvancedProfileCardProps = {
  type: "advanced";
  name: string;
  email: string;
};

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

function Component(props: ProfileCardProps) {
  const { type, name } = props;

  if (type === "basic") {
    return (
      <article className="alert alert-success">
        <h2>User: {name}</h2>
      </article>
    );
  }

  return (
    <article className="alert alert-danger">
      <h2>User: {name}</h2>
      <h2>Email: {props.email} </h2>
    </article>
  );
}

// type ProfileCardProps = {
//   type: "basic" | "advanced";
//   name: string;
//   email: string;
// };

// function Component({ type, name, email }: ProfileCardProps) {
//   const alertType = type === "basic" ? "success" : "danger";
//   const className = `alert alert-${alertType}`;

//   return (
//     <div className={className}>
//       <h2>User: {name}</h2>
//       {email && <h2>Email: {email}</h2>}
//       {/* {type === "advanced" ? <h2>Email: {email}</h2> : null} */}
//     </div>
//   );
// }
export default Component;
