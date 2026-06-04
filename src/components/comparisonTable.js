import React from 'react';

export default function ComparisonTable() {
  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '2rem auto 6rem auto' }}>
      <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '1.5rem' }}>
        Botón vs Solicitud
      </h2>

      {/* Contenedor de la tabla con scroll horizontal en móviles */}
      <div style={{
        backgroundColor: '#0b161b', // Fondo oscuro de la tabla
        borderRadius: '12px',
        border: '1px solid #132724',
        overflowX: 'auto'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          textAlign: 'left',
          minWidth: '600px' // Evita que se rompa en pantallas muy pequeñas
        }}>
          <thead>
            <tr style={{ backgroundColor: '#112228', borderBottom: '1px solid #132724' }}>
              <th style={{ padding: '1.2rem 1.5rem', color: '#fff', fontWeight: 'bold', width: '25%' }}>Característica</th>
              <th style={{ padding: '1.2rem 1.5rem', color: '#fff', fontWeight: 'bold', width: '37.5%' }}>Botón de Pago</th>
              <th style={{ padding: '1.2rem 1.5rem', color: '#fff', fontWeight: 'bold', width: '37.5%' }}>Solicitud de Pago</th>
            </tr>
          </thead>
          <tbody style={{ color: '#a0b2bd', fontSize: '0.95rem' }}>
            
            <TableRow 
              label="Ubicación" 
              col1="Integrado en tu app/web" 
              col2="Enviado por canales externos" 
            />
            
            <TableRow 
              label="Creación" 
              col1="Al momento del clic del usuario" 
              col2="Programada o manual" 
            />
            
            <TableRow 
              label="Duración" 
              col1="10 minutos" 
              col2="Configurable o sin vencimiento" 
            />
            
            <TableRow 
              label="Referencia interna" 
              col1="No requerida" 
              col2="Requerida" 
            />
            
            {/* Fila especial para los estados con las "pastillas" (tags) */}
            <tr>
              <td style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: '#fff' }}>Estados</td>
              <td style={{ padding: '1.2rem 1.5rem' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <StatusTag text="pending" />
                  <StatusTag text="paid" />
                  <StatusTag text="failed" />
                  <StatusTag text="expired" />
                </div>
              </td>
              <td style={{ padding: '1.2rem 1.5rem' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <StatusTag text="pending" />
                  <StatusTag text="paid" />
                  <StatusTag text="expired" />
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENTES DE APOYO
// ==========================================

// 1. Componente para las filas normales
function TableRow({ label, col1, col2 }) {
  return (
    <tr style={{ borderBottom: '1px solid #132724' }}>
      <td style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: '#fff' }}>{label}</td>
      <td style={{ padding: '1.2rem 1.5rem' }}>{col1}</td>
      <td style={{ padding: '1.2rem 1.5rem' }}>{col2}</td>
    </tr>
  );
}

// 2. Componente para las pastillas verdes de estado
function StatusTag({ text }) {
  return (
    <span style={{ 
      backgroundColor: '#052a20', // Verde súper oscuro 
      color: 'var(--ifm-color-primary)', // Letra verde brillante
      padding: '4px 10px', 
      borderRadius: '6px', 
      fontFamily: 'monospace',
      fontSize: '0.85rem'
    }}>
      {text}
    </span>
  );
}