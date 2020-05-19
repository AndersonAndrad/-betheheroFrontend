import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

// images
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />
          <h1>cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heroi para resolver
            isso.
          </p>

          <Link className="back-link" to="/profiles">
            <FiArrowLeft size={16} color="#e02041" /> Voltar para profile
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Titulo do caso" />
          <textarea placeholder="descricao" />
          <input placeholder="valor em reais" />
          <button className="button">cadastrar</button>
        </form>
      </div>
    </div>
  );
}