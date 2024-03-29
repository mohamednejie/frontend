import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; 
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

import Updatereunion from './Updatereunion'; 

export default function Reunion() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: id,
    titre: '',
    description: '',
    date_debut: '',
    date_fin: '',
  });
  const [initialEvent, setInitialEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getonereunion/${id}`);
        setInitialEvent(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la reunion :', error);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si les valeurs du formulaire ont été modifiées
    if (JSON.stringify(formData) === JSON.stringify(initialEvent)) {
      toast.info('Aucune modification');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/updatereunion/${id}`, formData);
      toast.success('Réunion mise à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la reunion :', error);
      toast.error('Erreur lors de la mise à jour de la reunion');
    }
  };

  return (
    <CContainer>
      <form onSubmit={handleSubmit}>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Mettre à jour une reunion: {initialEvent.titre}</strong>
              </CCardHeader>
              <CCardBody>
                <CInputGroup className="mb-3">
                  <CFormInput
                    placeholder="Titre"
                    aria-label="Titre"
                    type="text"
                    name="titre"
                    value={formData.titre}
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
                    placeholder="Date de début"
                    aria-label="Date de début"
                    type="date"
                    name="date_debut"
                    value={formData.date_debut}
                    onChange={handleChange}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CFormInput
                    placeholder="Date de fin"
                    aria-label="Date de fin"
                    type="date"
                    name="date_fin"
                    value={formData.date_fin}
                    onChange={handleChange}
                  />
                </CInputGroup>
                
                <CButton type="submit" color="primary">
                  Mettre à jour
                </CButton>
                <Link to="/forms/Reunion">Retourner à la liste des reunions</Link>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </form>
    </CContainer>
  );
}
