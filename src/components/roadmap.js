import React, { useState } from 'react';

// La lista de pasos (le quitamos el estado fijo porque ahora será dinámico)
const roadmapSteps = [
  {
    id: 1,
    badge: 'PASO 1',
    title: 'Entiende cómo funciona SPIDI',
    description: 'Familiarízate con el ecosistema: cómo fluye el dinero, qué productos existen (Botón, Solicitud, Paradas) y cómo funcionan las comisiones. Ya estás en esta página, así que ¡ya lo hiciste!',
    buttons: ['📄 Introducción general', '🔘 Botones de Pago', '🔗 Solicitudes de Pago'],
  },
  {
    id: 2,
    badge: 'PASO 2',
    title: 'Solicita tus credenciales',
    description: 'Contacta al equipo de SPIDI para obtener tus credenciales de acceso (short_name y password) y los UUIDs de tus cuentas bancarias. Estos son necesarios para autenticarte en la API.\n\nUna vez que tengas tus credenciales, prueba el login en el entorno Sandbox para verificar que todo funciona.',
    buttons: ['🔐 Endpoint de Login', '🧪 Ver Entornos'],
  },
  {
    id: 3,
    badge: 'PASO 3',
    title: 'Crea tu Acuerdo de Pago',
    description: 'Define cómo se distribuirán los fondos: splits entre socios, reglas de liquidación bancaria, y medios de pago habilitados. El acuerdo es el contrato digital que gobierna todas tus transacciones.',
    buttons: ['📋 Concepto: Acuerdos', '⚡ Endpoint: Crear Acuerdo'],
  },
  {
    id: 4,
    badge: 'PASO 4',
    title: 'Integra tu primer producto',
    description: 'Escoge el producto que mejor se adapte a tu caso de uso y sigue la guía de integración. Crea tu primera sesión de pago en Sandbox y prueba el flujo completo.',
    buttons: ['🔘 Crear Sesión Botón', '🔗 Crear Solicitud', '🚏 Crear Paradas'],
  },
  {
    id: 5,
    badge: 'RECOMENDADO',
    badgeColor: '#ebba34', 
    title: 'Configura Webhooks',
    description: 'Implementa un endpoint en tu servidor para recibir notificaciones en tiempo real de pagos completados, acreditaciones y fallos. Valida la firma HMAC y el timestamp para máxima seguridad.',
    buttons: ['🔔 Guía de Webhooks', '⚡ Eventos disponibles'],
  },
  {
    id: 6,
    badge: 'PASO 6',
    title: 'Pruebas en Sandbox',
    description: 'Ejecuta pruebas completas en el entorno Sandbox: crea sesiones, simula pagos, verifica webhooks y consulta estados. Usa la colección de Postman para agilizar las pruebas.',
    buttons: ['🧪 Entornos', '📬 Colección Postman'],
  },
  {
    id: 7,
    badge: 'PASO FINAL',
    title: '¡Pasa a Producción!',
    description: 'Cuando tus pruebas estén completas, cambia la URL base de Sandbox a Producción y comienza a recibir pagos reales. Recuerda mantener los webhooks activos y monitorear tus transacciones.',
    buttons: ['🚀 URLs de Producción'],
  }
];

export default function Roadmap() {
  // AQUÍ ESTÁ LA MAGIA: Declaramos el estado para saber qué paso está abierto.
  // Por defecto, inicia en el paso 1.
  const [pasoActivo, setPasoActivo] = useState(1);

  return (
    <div style={{ marginTop: '4rem', width: '100%' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
        🗺️ Roadmap de integración
      </h2>
      <p style={{ color: '#a0b2bd', marginBottom: '3rem', fontSize: '1.1rem' }}>
        Sigue estos pasos para integrarte de inicio a fin. Haz clic en cada paso para ver los detalles y acceder a la documentación correspondiente.
      </p>

      {/* Contenedor principal */}
      <div style={{ position: 'relative', paddingLeft: '1rem' }}>
        
        {/* Línea vertical conectora */}
        <div style={{ position: 'absolute', left: '35px', top: '20px', bottom: '40px', width: '2px', backgroundColor: '#1e2e38', zIndex: 0 }}></div>

        {roadmapSteps.map((step) => {
          // Lógica de cálculo dinámico:
          const isActive = step.id === pasoActivo;
          const isCompleted = step.id < pasoActivo; // Los pasos anteriores al activo se marcan como listos
          
          const circleBg = isActive ? 'var(--ifm-color-primary)' : '#0d161b';
          const circleBorder = isCompleted ? '2px solid var(--ifm-color-primary)' : isActive ? 'none' : '2px solid #2a3a45';
          const circleColor = isActive ? '#0d161b' : isCompleted ? 'var(--ifm-color-primary)' : '#5b7180';
          const tagColor = step.badgeColor || 'var(--ifm-color-primary)';

          return (
            <div key={step.id} style={{ position: 'relative', zIndex: 1, marginBottom: '2rem', display: 'flex', gap: '2rem' }}>
              
              {/* Círculo del paso (Ahora es clickeable) */}
              <div 
                onClick={() => setPasoActivo(step.id)}
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  backgroundColor: circleBg, border: circleBorder, color: circleColor,
                  fontWeight: '900', fontSize: '1.2rem',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0,
                  boxShadow: isActive ? '0 0 15px rgba(0, 229, 155, 0.2)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease' // Suaviza el cambio de color
                }}
              >
                {isCompleted ? '✓' : step.id}
              </div>
              
              <div style={{ paddingTop: '6px', width: '100%' }}>
                
                {/* Título (También es clickeable para abrir el paso) */}
                <h3 
                  onClick={() => setPasoActivo(step.id)}
                  style={{ 
                    fontSize: '1.3rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px', 
                    marginBottom: isActive ? '1rem' : '0', 
                    color: isActive || isCompleted ? '#ffffff' : '#a0b2bd',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {step.title}
                  <span style={{ fontSize: '0.7rem', backgroundColor: '#15222a', color: tagColor, padding: '3px 8px', borderRadius: '12px', letterSpacing: '1px' }}>
                    {step.badge}
                  </span>
                </h3>
                
                {/* EL ACORDEÓN: Solo renderiza la descripción y los botones SI el paso está activo 
                */}
                {isActive && (
                  <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
                    <p style={{ color: '#a0b2bd', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '700px', whiteSpace: 'pre-wrap' }}>
                      {step.description}
                    </p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      {step.buttons.map((btnText, index) => (
                        <button key={index} style={{ 
                          backgroundColor: '#15222a', color: '#fff', 
                          border: '1px solid #1e2e38', padding: '0.5rem 1rem', borderRadius: '8px', 
                          cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => e.target.style.borderColor = 'var(--ifm-color-primary)'}
                        onMouseOut={(e) => e.target.style.borderColor = '#1e2e38'}
                        >
                          {btnText}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          );
        })}

        {/* Pequeña regla CSS inyectada para que el texto aparezca suavemente */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

      </div>
    </div>
  );
}