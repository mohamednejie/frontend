import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
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

export default function Ajouterevent() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    lieu: '',
    description: '',
    duree: '',
    file: null, // Initialisez le fichier à null
  });
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Récupère le premier fichier sélectionné
    setFormData((prevState) => ({
      ...prevState,
      file: file, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/createevent', formData);
      console.log(response.data);
      toast.success('Événement ajouté avec succès');
      setFormData({
        name: '',
        date: '',
        lieu: '',
        description: '',
        duree: '',
        file: null, 
      });
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrors(error.response.data.error);
      }
    }
  };

  return (
    <CContainer>
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
                <strong>Créer un nouvel événement</strong>
              </CCardHeader>
              <CCardBody>
                <CInputGroup className="mb-3">
                  <CFormInput
                    placeholder="Nom de l'événement"
                    aria-label="Nom de l'événement"
                    type="text"
                    name="name"
                    value={formData.name}
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
                    placeholder="Durée"
                    aria-label="Durée"
                    type="text"
                    name="duree"
                    value={formData.duree}
                    onChange={handleChange}
                    />
                 </CInputGroup>
                 <CInputGroup className="mb-3">
                   <CFormInput
                     placeholder="date"
                     aria-label="date"
                     type="date"
                     name="date"
                     value={formData.date}
                     onChange={handleChange}
                   />
                 </CInputGroup>
                <CInputGroup className="mb-3">
                  <CFormInput
                    placeholder="file"
                    aria-label="file"
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                  />
                </CInputGroup>
                <CButton type="submit" color="primary" style={{ marginRight: '10px' }}>
                  Créer événement
                </CButton>
                <Link to="/forms/event">
                  <CButton color="secondary">Retour à la liste</CButton>
                </Link>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </form>
    </CContainer>
  );
}
