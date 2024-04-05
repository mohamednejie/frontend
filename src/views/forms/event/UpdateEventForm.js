import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react';

export default function UpdateEventForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: id,
    name: '',
    description: '',
    date: '',
    lieu: '',
    duree: '',
    file: null, 
  });
  const [initialEvent, setInitialEvent] = useState({});
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/getoneevenent/${id}`);
        setInitialEvent(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'événement :', error);
      }
    };
    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Gestion du changement de fichier
  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    setFormData((prevState) => ({
      ...prevState,
      file: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (JSON.stringify(formData) === JSON.stringify(initialEvent)) {
      toast.info('Aucune modification');
      return;
    }
    try {
      const formDataToSend = new FormData(); // Créez un objet FormData pour envoyer les données
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value); // Ajoutez chaque champ et sa valeur à l'objet FormData
      });
      await axios.put(
        `http://localhost:8080/api/updateevent/${id}`,
        formDataToSend // Envoyez l'objet FormData au lieu de l'objet JSON
      );
      toast.success('Événement mis à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'événement :', error);
      setErrors('Erreur lors de la mise à jour de l\'événement');
    }
  };

  return (
    <CContainer xl>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        {errors && (
          <div className="alert alert-danger" role="alert">
            {errors}
          </div>
        )}
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Mettre à jour un événement: {initialEvent.title}</strong>
              </CCardHeader>
              <CCardBody>
                <CInputGroup className="mb-3">
                  <CFormInput
                    placeholder="name"
                    aria-label="Titre"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </CInputGroup>
               
                <CInputGroup className="mb-3">
                  <CFormInput
                    placeholder="Description"
                    aria-label="Description"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CFormInput
                    placeholder="Date"
                    aria-label="Date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CFormInput
                    placeholder="Lieu"
                    aria-label="Lieu"
                    type="text"
                    name="lieu"
                    value={formData.lieu}
                    onChange={handleChange}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CFormInput
                    placeholder="duree"
                    aria-label="duree"
                    type="text"
                    name="duree"
                    value={formData.duree}
                    onChange={handleChange}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </CInputGroup>
                <CButton type="submit" color="primary" style={{ margin: "12px" }}>
                  Mettre à jour
                </CButton>
                <Link to="/forms/event">Retourner à la liste des événements</Link>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </form>
    </CContainer>
  );
}
