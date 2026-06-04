import React from 'react';

export default function Features() {
  return (
    <div style={{ width: '100%', marginTop: '2rem', marginBottom: '4rem' }}>
      
      {/* =========================================
         SECCIÓN 1: CAJA DE COMISIONES
         ========================================= */}
      <div style={{
        backgroundColor: '#0a1317', // Un tono aún más oscuro para dar profundidad
        border: '1px solid #132724', // Borde sutilmente verdoso
        borderRadius: '16px',
        padding: '2.5rem',
        marginBottom: '4rem'
      }}>
        <h3 style={{ color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
          💰 Sobre las comisiones — <span style={{ color: 'var(--ifm-color-primary)' }}>Transparencia total</span>
        </h3>
        
        <p style={{ color: '#a0b2bd', lineHeight: '1.6', fontSize: '1.05rem', maxWidth: '850px' }}>
          Solo existe <strong style={{color: '#fff'}}>una única comisión</strong>, la del banco, por transacción — <span style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>competitiva y transparente</span>. Descontada automáticamente al momento de la liquidación. Sin comisiones adicionales del banco o de SPIDI.
        </p>

        {/* Contenedor Flex para los Badges */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <CheckBadge text="Sin costos de implementación" />
          <CheckBadge text="Sin costos de mantenimiento" />
          <CheckBadge text="Sin cargos administrativos ocultos" />
        </div>
      </div>


      {/* =========================================
         SECCIÓN 2: TARJETAS DE INTEGRACIÓN
         ========================================= */}
      <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '2rem' }}>
        ¿Qué puedes integrar?
      </h2>

      {/* Flexbox para forzar 2 arriba y 1 centrada abajo */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.5rem' 
      }}>
        
        <FeatureCard 
          icon="🔘" 
          title="Botón SPIDI" 
          description="Nuestra solución e-commerce 'todo-en-uno'. Se integra vía API para habilitar todos los medios de pago nacionales, unificando flujos en bolívares y cripto de forma segura y transparente. Su valor diferencial: interconectividad total con pagos instantáneos, sin importar el banco de tu cliente."
        />

        <FeatureCard 
          icon="🔗" 
          title="Solicitud SPIDI" 
          description="Un enlace o código QR seguro que generas y envías a quien debe pagarte. Al abrirlo, accede a una página rápida y simple donde completa el pago al instante. Puede generarse de forma individual o masiva, desde la API, la app móvil, SPIDI Center o un POS."
        />

        <FeatureCard 
          icon="🚏" 
          title="La Parada SPIDI" 
          description="Funcionalidad premium que permite crear un punto fijo y permanente de cobro, accesible vía portal web o QR. Puede generarse desde Botón SPIDI o Solicitud SPIDI, adaptándose al canal de origen."
        />

      </div>

    </div>
  );
}

// ==========================================
// SUB-COMPONENTES DE APOYO (UI Elements)
// ==========================================

// 1. El componente para los recuadros verdes con el "check"
function CheckBadge({ text }) {
  return (
    <div style={{ 
      backgroundColor: '#0b1a18', // Fondo verde muy oscuro
      border: '1px solid #16332a', 
      borderRadius: '10px', 
      padding: '0.8rem 1.2rem', 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px', 
      color: '#fff', 
      fontSize: '0.95rem',
      fontWeight: '500'
    }}>
      {/* Círculo del check */}
      <div style={{ 
        backgroundColor: '#004d34', 
        color: 'var(--ifm-color-primary)', 
        borderRadius: '50%', 
        width: '22px', 
        height: '22px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: '0.8rem',
        flexShrink: 0
      }}>
        ✓
      </div>
      {text}
    </div>
  );
}

// 2. El componente para las tarjetas de productos
function FeatureCard({ icon, title, description }) {
  return (
    <div style={{ 
      backgroundColor: '#111a22', // Fondo oscuro azulado 
      border: '1px solid #1e2e38', 
      borderRadius: '16px', 
      padding: '2.5rem', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1.2rem',
      transition: 'transform 0.2s ease, border-color 0.2s ease',
      cursor: 'default',
      
      /* --- MAGIA DEL LAYOUT 2 ARRIBA, 1 ABAJO --- */
      flex: '1 1 calc(50% - 1.5rem)', /* Intenta ocupar el 50% de la pantalla descontando el gap */
      minWidth: '320px', /* En móviles baja a una columna */
      maxWidth: '480px', /* Límite para que la tarjeta 3 no se estire de borde a borde */
    }}
    // Pequeño efecto hover para que se sienta interactivo
    onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--ifm-color-primary)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
    onMouseOut={(e) => { e.currentTarget.style.borderColor = '#1e2e38'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {/* Contenedor del ícono */}
      <div style={{ 
        width: '45px', 
        height: '45px', 
        backgroundColor: '#1b2a36', 
        borderRadius: '12px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: '1.3rem',
        marginBottom: '0.5rem'
      }}>
        {icon}
      </div>
      
      <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>{title}</h3>
      <p style={{ color: '#889ba8', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>{description}</p>
    </div>
  );
}