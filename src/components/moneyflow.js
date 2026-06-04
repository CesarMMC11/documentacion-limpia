import React from 'react';

export default function MoneyFlow() {
  return (
    /* AQUÍ ESTÁ EL CAMBIO: 
      Agregamos maxWidth: '900px' para encogerlo y margin: '5rem auto 4rem auto' para centrarlo.
    */
    <div style={{ width: '100%', maxWidth: '900px', margin: '5rem auto 4rem auto' }}>
      
      {/* 1. Encabezado */}
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>
        Flujo del dinero
      </h2>
      <p style={{ color: '#a0b2bd', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Con la <strong>cuenta recaudadora y la lógica de SPIDI</strong>, el dinero fluye de forma <span style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>automática e inmediata</span> desde la cuenta del pagador a tu cuenta.
      </p>

      {/* 2. Tarjeta Principal del Diagrama */}
      <div style={{
        backgroundColor: '#15222a',
        borderRadius: '20px',
        border: '1px solid #1e2e38',
        padding: '4rem 2rem',
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'auto' // Permite scroll horizontal en teléfonos muy pequeños
      }}>

        {/* Fila Superior (Pagador -> Recaudadora -> Usuario) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          width: '100%', 
          maxWidth: '800px', 
          gap: '1rem',
          minWidth: '600px' // Evita que se aplaste en móviles
        }}>

          {/* Bloque: Pagador */}
          <FlowBox icon="📱" title="Pagador" subtitle="Desde cualquier producto SPIDI" />

          {/* Flecha Horizontal: Ingreso bruto */}
          <FlowArrow label="Ingreso bruto" />

          {/* Bloque Central: Recaudadora + Comisión */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <FlowBox icon="⚡" title="Cuenta recaudadora" subtitle="Recaudadora y dispersora" />

            {/* Flecha Vertical apuntando hacia abajo */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem 0' }}>
              <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--ifm-color-primary)' }}></div>
              {/* Punta de la flecha hacia abajo */}
              <div style={{ 
                width: 0, height: 0, 
                borderLeft: '6px solid transparent', 
                borderRight: '6px solid transparent', 
                borderTop: '8px solid var(--ifm-color-primary)' 
              }}></div>
            </div>

            {/* Bloque: Comisión */}
            <FlowBox icon="📋" title="Comisión del procesador*" subtitle="Comisiones competitivas" />
            
          </div>

          {/* Flecha Horizontal: Liquidación */}
          <FlowArrow label="Liquidación" />

          {/* Bloque: Usuario */}
          <FlowBox icon="👤" title="Usuario SPIDI" subtitle="¡Sin comisiones adicionales!" />

        </div>
      </div>

      {/* 3. Caja de Alerta / Disclaimer */}
      <div style={{
        backgroundColor: '#1a2622', // Fondo oscuro con tinte verdoso/amarillento
        border: '1px solid #2d4239',
        borderRadius: '12px',
        padding: '1.5rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start'
      }}>
        <span style={{ fontSize: '1.5rem' }}>⚠️</span>
        <p style={{ color: '#a0b2bd', margin: 0, lineHeight: '1.5', fontSize: '0.95rem' }}>
          (*) El banco Sofitasa procesa la transacción y descuenta la comisión automáticamente. Cada usuario SPIDI tendrá disponible su respectivo soporte legal.
        </p>
      </div>

    </div>
  );
}

// ==========================================
// SUB-COMPONENTES PARA REUTILIZAR CÓDIGO
// ==========================================

// Componente para las cajitas con el icono, título y subtítulo
function FlowBox({ icon, title, subtitle }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '160px' }}>
      {/* Cuadro del icono */}
      <div style={{
        width: '64px', height: '64px',
        backgroundColor: '#0d161b',
        border: '1px solid #2a3a45',
        borderRadius: '16px',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        fontSize: '1.8rem',
        marginBottom: '1rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
      }}>
        {icon}
      </div>
      <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.4rem', lineHeight: '1.3' }}>{title}</h4>
      <span style={{ color: '#5b7180', fontSize: '0.85rem', lineHeight: '1.3' }}>{subtitle}</span>
    </div>
  );
}

// Componente para las flechas horizontales con texto encima
function FlowArrow({ label }) {
  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      marginTop: '25px', // Lo alinea con el centro de los iconos
      flex: 1, minWidth: '80px' 
    }}>
      <span style={{ color: '#5b7180', fontSize: '0.75rem', marginBottom: '0.5rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        {/* Cuerpo de la flecha */}
        <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--ifm-color-primary)' }}></div>
        {/* Punta de la flecha hacia la derecha */}
        <div style={{ 
          width: 0, height: 0, 
          borderTop: '6px solid transparent', 
          borderBottom: '6px solid transparent', 
          borderLeft: '8px solid var(--ifm-color-primary)' 
        }}></div>
      </div>
    </div>
  );
}