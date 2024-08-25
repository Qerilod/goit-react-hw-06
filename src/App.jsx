import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { selectNameFilter, changeFilter } from "./redux/filtersSlice";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (filterValue) => {
    dispatch(changeFilter(filterValue));
  };

  const handleAddContact = (name, number) => {
    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ color: "green", paddingLeft: "40px" }}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
