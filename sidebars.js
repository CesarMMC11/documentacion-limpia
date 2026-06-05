/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    
    // --- 1. ENLACES DIRECTOS SUPERIORES ---
    'intro',
    'quickStart/pasos', 

    // --- 2. CONCEPTOS FUNDAMENTALES ---
    {
      type: 'category',
      label: 'Conceptos Fundamentales',
      items: [
        'conceptosFundamentales/introduccion',
        'conceptosFundamentales/acuerdo-de-pago',
        'conceptosFundamentales/botones-de-pago',
        'conceptosFundamentales/solicitudes-de-pago',
        'conceptosFundamentales/paradas',
        'conceptosFundamentales/webhooks',
      ],
    },

    // --- 3. ESPECIFICACIONES DE APIs ---
    {
      type: 'category',
      label: 'Especificaciones de APIs',
      items: [
        // 3.1. API PRODUCTOS
        {
          type: 'category',
          label: 'API Productos',
          items: [
            {
              type: 'category',
              label: 'Endpoints Comunes',
              items: [
                'endpoints/login',
                'endpoints/crear-acuerdo',
              ],
            },
            {
              type: 'category',
              label: 'Endpoints Botón',
              items: [
                'endpoints/crear-sesion-boton',
                'endpoints/estado-sesion-boton',
              ],
            },
            {
              type: 'category',
              label: 'Endpoints Solicitud',
              items: [
                'endpoints/crear-sesiones-solicitud',
                'endpoints/estado-sesion-solicitud',
              ],
            },
            {
              type: 'category',
              label: 'Endpoints Parada',
              items: [
                'endpoints/listar-paradas',
              ],
            },
          ],
        },

        // 3.2. API MERCHANT APLICATIVO FINANCIERO
        {
          type: 'category',
          label: 'API Merchant Aplicativo Financiero',
          items: [
            'api-merchant/introduccion',
            {
              type: 'category',
              label: 'Merchants',
              items: [
                'api-merchant/merchant/registrarte',
                'api-merchant/merchant/iniciar-sesion',
                'api-merchant/merchant/generar-otp',
                'api-merchant/merchant/solicitar-pago',
                'api-merchant/merchant/consultar-pago',
                'api-merchant/merchant/anular-pago',
                'api-merchant/merchant/listar-cierre-lotes',
              ],
            },
            {
              type: 'category',
              label: 'Terminales',
              items: [
                'api-merchant/terminales/activar-dispositivo',
                'api-merchant/terminales/listar-pagos-pos',
                'api-merchant/terminales/consultar-pago',
                'api-merchant/terminales/confirmar-pago',
                'api-merchant/terminales/confirmar-anulacion',
                'api-merchant/terminales/listar-cierres',
                'api-merchant/terminales/crear-cierre',
                'api-merchant/terminales/consultar-cierre',
              ],
            },
          ],
        },
      ],
    },

    // --- 4. GUÍAS DE USO ---
    {
      type: 'category',
      label: 'Guías de Uso',
      items: [
        {
          type: 'category',
          label: 'Introducción a la API Merchant',
          items: [
            'guias/registro-auth',
            'guias/proceso-cierre',
            'guias/proceso-descarte-anulacion',
            'guias/proceso-api-merchant',
            'guias/comunicaciones',
          ],
        },
      ],
    },

    // --- 5. RECURSOS ADICIONALES ---
    {
      type: 'category',
      label: 'Recursos Adicionales',
      items: [
        'recursos/como-usar-especificaciones',
        'recursos/glosario',
        'recursos/postman',
      ],
    },
  ],
};

module.exports = sidebars;