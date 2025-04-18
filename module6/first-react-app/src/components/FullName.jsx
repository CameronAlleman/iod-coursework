export function NamePart(props) {
  return (
    // reusable component to display part of a name from the value prop
    <span className="NamePart">{props.value}</span>
  );
}
export function FullName(props) {
  return (
    // composes the NamePart component to display a full name
    <div className="FullName componentBox">
      Full name: <NamePart value={props.first} />{" "}
      <NamePart value={props.last} />
    </div>
  );
}

//when importing multiple from other page, you have to destructure it {NamePart, FullName}
//if using export default NamePart you do not have to destructure.
//you can use both versions in the same file
