// ParticipationList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react';

const ParticipationList = () => {
  const [participations, setParticipations] = useState([]);

  useEffect(() => {
    const fetchParticipations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getparticpevent');
        setParticipations(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la liste des participations :', error);
        toast.error('Erreur lors de la récupération de la liste des participations');
      }
    };
    fetchParticipations();
  }, []);

  return (
    <div>
      <ToastContainer /> 
      <CContainer>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Liste des participations aux événements</strong>
              </CCardHeader>
              <CCardBody>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Utilisateur</th>
                        <th>Événement</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {participations.map((participation, index) => (
                        <tr key={index}>
                          <td>{participation.userId}</td>
                          <td>{participation.eventId}</td>
                          <td>{participation.createdAt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

export default ParticipationList;
