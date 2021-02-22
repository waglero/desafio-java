import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';

Modal.setAppElement('#root');

const App = () => {
    const apiPath = '/api/v1/persons';
    const axiosConfig = { auth: { username: 'admin', password: 'admin'}};
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [persons, setPersons] = React.useState([]);
    const [currentPerson, setCurrentPerson] = React.useState({});
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const loadPersons = () => {
        axios.get(apiPath, axiosConfig)
            .then(res => {
                setPersons(res.data);
                closeModal()
            })
    }

    const deletePerson = (personId) => {
        axios.delete(apiPath + '/' + personId, axiosConfig)
            .then(res => {
                loadPersons()
            })
    }

    const savePerson = person => {
        let verb = "post";
        if (currentPerson.id) {
            person.id = currentPerson.id
            verb = "put";
        }
        return axios[verb](apiPath + (verb === 'put' ? '/' + currentPerson.id : ''), person, axiosConfig)
            .then(res => {
                loadPersons()
                return []
            })
            .catch(function(error) {
                if (error.response) {
                    return Object.assign({}, error.response.data);
                }
            })
    }

    const handleCreateButton = () => {
        setCurrentPerson({});
        openModal();
    }

    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="-mr-2 flex md:hidden"></div>
                    </div>
                </div>
            </nav>
            <header className="bg-white shadow">
                <div className="max-w-10xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Cadastro de pessoas
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-10xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 sm:px-0">
                        <button onClick={() => handleCreateButton() } type="button" className="mb-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cadastrar
                        </button>
                        <PersonList
                        persons={persons}
                        setCurrentPerson={setCurrentPerson}
                        openModal={openModal}
                        loadPersons={loadPersons}
                        deletePerson={deletePerson}
                        />
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)'
                        }
                    }}
                >
                    <PersonForm savePerson={savePerson} person={currentPerson} closeModal={closeModal}/>
                </Modal>
            </main>
        </div>
    )
}

export default App;