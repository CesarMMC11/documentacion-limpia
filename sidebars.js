// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '✨ ¿Primera vez aquí?',
      collapsed: false,
      items: [
        { type: 'doc', id: 'intro', label: 'Bienvenida y flujo' },
      ],
    },
    {
      type: 'category',
      label: 'Quick Start',
      collapsed: false,
      items: [
        { type: 'doc', id: 'quickStart/pasos', label: 'Pasos para usar SPIDI' }, 
      ],
    },
    {
      type: 'category',
      label: 'Conceptos Fundamentales',
      collapsed: false,
      items: [
        { type: 'doc', id: 'conceptosFundamentales/introduccion', label: 'Introducción' },
        { type: 'doc', id: 'conceptosFundamentales/acuerdo-de-pago', label: 'Acuerdo de Pago' },
        { type: 'doc', id: 'conceptosFundamentales/botones-de-pago', label: 'Botones de Pago' },
        { type: 'doc', id: 'conceptosFundamentales/solicitudes-de-pago', label: 'Solicitudes de Pago' },
        { type: 'doc', id: 'conceptosFundamentales/paradas', label: 'Paradas' },
        { type: 'doc', id: 'conceptosFundamentales/webhooks', label: 'Webhooks' },
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      collapsed: false,
      items: [
        { type: 'link', href: '#', label: 'Introduction' },
        
        // Bloque Login / Acuerdos
        {
          type: 'doc', 
          id: 'endpoints/login',
          label: 'Login',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'endpoints/crear-acuerdo',
          label: 'Crear Acuerdo',
          className: 'api-method post',
        },

        // Bloque Sesión Botón (B)
        {
          type: 'doc',
          id: 'endpoints/crear-sesion-boton',
          label: 'Crear Sesión (B)',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'endpoints/estado-sesion-boton',
          label: 'Estado Sesión (B)',
          className: 'api-method get',
        },

        // Bloque Sesión Solicitud (S)
        {
          type: 'doc',
          id: 'endpoints/estado-sesion-solicitud',
          label: 'Estado Sesión (S)',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'endpoints/crear-sesiones-solicitud',
          label: 'Crear Sesiones (S)',
          className: 'api-method post',
        },
        
        // Bloque Paradas
        {
          type: 'doc',
          id: 'endpoints/listar-paradas',
          label: 'Listar Paradas',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Recursos Adicionales',
      collapsed: false,
      items: [
        { type: 'doc', id: 'recursos/como-usar-especificaciones', label: 'Cómo usar las Especificaciones' },
        { type: 'doc', id: 'recursos/glosario', label: 'Glosario de campos' },
        { type: 'doc', id: 'recursos/postman', label: 'Colección de Postman' },
      ],
    },
  ],
};

module.exports = sidebars;