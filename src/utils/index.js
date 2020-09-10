const id_pattern = "^([0-9])+$";
const name_pattern = "^([A-Za-z])+$";
const email_pattern = "^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]";
const phone_pattern = "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$";

export const formValidation = data => {
  return (
    RegExp(id_pattern).test(data.id) &&
    RegExp(name_pattern).test(data.firstName) &&
    RegExp(name_pattern).test(data.lastName) &&
    RegExp(email_pattern).test(data.email) &&
    RegExp(phone_pattern).test(data.phone)
  );
};

export const columns = [
  {
    Header: "Id",
    accessor: "id"
  },
  {
    Header: "First Name",
    accessor: "firstName"
  },
  {
    Header: "Last Name",
    accessor: "lastName"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Phone",
    accessor: "phone"
  }
];

export const inputFields = [
  {
    name: "id",
    desc: "id",
    type: "number",
    pattern: id_pattern
  },
  {
    name: "firstName",
    desc: "имя",
    type: "text",
    pattern: name_pattern
  },
  {
    name: "lastName",
    desc: "фамилию",
    type: "text",
    pattern: name_pattern
  },
  {
    name: "email",
    desc: "email",
    type: "email",
    pattern: email_pattern
  },
  {
    name: "phone",
    desc: "телефон",
    type: "tel",
    pattern: phone_pattern
  }
];
