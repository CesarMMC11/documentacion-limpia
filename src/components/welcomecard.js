import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function WelcomeCard() {
  return (
    <div style={{
      /* Aquí aplicamos el degradado: de un azul muy oscuro a un verde/teal profundo */
      background: 'linear-gradient(90deg, #0a1418 0%, #0b2b28 100%)', 
      borderRadius: '16px',
      padding: '2.5rem 3rem',
      marginTop: '2rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid #132724',
      width: '80%', /* Asegura que tome todo el ancho disponible */
    }}>
      
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '65%' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '1rem', fontWeight: '800' }}>
          Bienvenidos a <span style={{ color: 'var(--ifm-color-primary)' }}>SPIDI</span>
        </h2>
        
        {/* Línea divisoria sutil debajo del título */}
        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginBottom: '1.2rem', width: '100%' }}></div>

        <p style={{ color: '#a0b2bd', fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
          Somos la plataforma que facilita la manera de enviar y recibir dinero de forma
          inmediata en Venezuela. SPIDI transforma la complejidad de los pagos en una
          experiencia simple, organizada y confiable.
        </p>
      </div>

      <img 
        src={useBaseUrl('/img/brandMascotJaguar.png')} 
        alt="Jaguar SPIDI" 
        style={{
          position: 'absolute',
          right: '5px',  
          bottom: '5px', 
          height: '80%',  
          objectFit: 'contain',
          zIndex: 1,
          opacity: 0.35, /* Opacidad baja para que se fusione con el degradado */
        }} 
      />
    </div>
  );
}