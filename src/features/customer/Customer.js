import { useSelector } from "react-redux";

function Customer() {
  // const customer = useSelector(store => store.customer);
  const {fullName} = useSelector(store => store.customer);

  if(fullName === "" ) return <h2>👋 Welcome</h2>
  return <h2>👋 Welcome, {fullName}</h2>
}

export default Customer;
