import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CButton } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
};

export default function ConsulterEvenement() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/getoneevenent/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'événement :', error);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return <div style={styles.container}>Chargement en cours...</div>;
  }

  return (
    <div style={styles.container}>
      <h1>{event.name}</h1>
      <p>Date: {event.date}</p>
      <p>Lieu: {event.lieu}</p>
      <p>Description: {event.description}</p>
      <p>Durée: {event.duree}</p>
      
      {event.file && (
        <div>
          <p>Image de l'événement :</p>
           
            <img src="images\login.png" alt="Event" style={styles.image} />
           
            
        
          <p>Chemin du fichier de l'événement : {event.file}</p>
        </div>
      )}
           <Link  to={"/forms/Ajouterevent"}>
              <CButton type="submit" color="primary" style={{ margin: '12px', width: '120px' }}>
              participer 
              <FontAwesomeIcon icon={faGroupArrowsRotate} style={{marginLeft:'5px'}} />
                </CButton> </Link>       <Link to="/forms/event">Retourner à la liste des événements</Link>
    </div>
  );
}
