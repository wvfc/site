// Ícones SVG inline. Traço único, 24x24, herdam currentColor.
// Inline evita requisição extra e mantém o ícone nítido em qualquer densidade.

const wrap = (corpo) =>
  `<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${corpo}</svg>`;

export const icones = {
  onda: wrap('<path d="M2 12h2.5l2-7 3 14 3-11 2.5 6 2-3H22"/>'),
  rotor: wrap('<circle cx="12" cy="12" r="2.6"/><path d="M12 9.4V3m0 18v-6.4m2.6-2.6H21M3 12h6.4m4.5-4.5 3.6-3.6M6.5 17.5l3.6-3.6m0-4.4L6.5 5.9m11 11.6-3.6-3.6"/>'),
  motor: wrap('<rect x="3" y="8" width="12" height="9" rx="1.5"/><path d="M15 11h2.5l2.5-2v7l-2.5-2H15M6 8V5.5M11 8V5.5M3 20h13"/>'),
  raio: wrap('<path d="M13.5 2 5 13.2h5.6L9.8 22l8.7-11.4h-5.7z"/>'),
  clp: wrap('<rect x="3" y="4" width="18" height="13" rx="1.6"/><path d="M7 8v5M11 8v5M15 8v5M8 21h8M12 17v4"/>'),
  chave: wrap('<path d="M15.6 3.6a5.2 5.2 0 0 0-6.4 6.6L3 16.4 6.1 19l6.2-6.2a5.2 5.2 0 0 0 6.6-6.4l-2.9 2.9-2.4-.6-.6-2.4z"/>'),
  gota: wrap('<path d="M12 3s5.6 6 5.6 9.7A5.6 5.6 0 0 1 12 18.3a5.6 5.6 0 0 1-5.6-5.6C6.4 9 12 3 12 3z"/><path d="M9.6 13.2a2.4 2.4 0 0 0 2.4 2.3"/>'),
  plano: wrap('<path d="M5 3h9l5 5v13H5z"/><path d="M14 3v5h5M8.5 13.5l2 2 4-4.5"/>'),
  monitor: wrap('<rect x="2.5" y="4" width="19" height="12.5" rx="1.6"/><path d="M8 20.5h8M12 16.5v4M6.5 12l2.5-3 2.5 3.8L14 8.5l3.5 5"/>'),
  whatsapp: `<svg class="icone" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.33-1.38a9.83 9.83 0 0 0 4.6 1.16h.01c5.44 0 9.86-4.42 9.86-9.86 0-2.63-1.03-5.11-2.9-6.97A9.79 9.79 0 0 0 12.04 2m0 1.8c2.15 0 4.17.84 5.7 2.36a8 8 0 0 1 2.36 5.7c0 4.45-3.62 8.06-8.07 8.06a8.1 8.1 0 0 1-4.1-1.12l-.3-.17-3.05.79.81-2.97-.19-.31a8 8 0 0 1-1.23-4.28c0-4.45 3.62-8.06 8.07-8.06m-3.2 4.05c-.15 0-.4.06-.6.28-.21.22-.8.79-.8 1.92s.82 2.23.94 2.38c.11.15 1.6 2.44 3.88 3.42.54.23.96.37 1.29.48.54.17 1.04.15 1.43.09.43-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.15-.43-.27-.22-.11-1.34-.66-1.54-.73-.21-.08-.36-.11-.51.11-.15.22-.58.73-.71.88-.13.15-.26.17-.48.06-.22-.11-.95-.35-1.8-1.11-.67-.6-1.12-1.33-1.25-1.55-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.11-.13.14-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.23-.7-1.68-.18-.44-.36-.38-.5-.39z"/></svg>`,
  seta: wrap('<path d="M5 12h14m-6-6 6 6-6 6"/>'),
  check: wrap('<path d="m4.5 12.5 5 5 10-11"/>'),
  alvo: wrap('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>'),
  relogio: wrap('<circle cx="12" cy="12" r="8.6"/><path d="M12 7v5.2l3.4 2"/>'),
  escudo: wrap('<path d="M12 2.8 4.8 5.7v5.6c0 4.3 3 8.3 7.2 9.9 4.2-1.6 7.2-5.6 7.2-9.9V5.7z"/><path d="m9 12 2.2 2.2L15.3 10"/>'),
  local: wrap('<path d="M12 21.2s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10.2" r="2.7"/>'),
  email: wrap('<rect x="2.6" y="5" width="18.8" height="14" rx="2"/><path d="m3.4 6.6 8.6 6 8.6-6"/>'),
  telefone: wrap('<path d="M6.3 3.5h3.1l1.6 4-2 1.3a12 12 0 0 0 5.2 5.2l1.3-2 4 1.6v3.1a1.8 1.8 0 0 1-2 1.8A15.8 15.8 0 0 1 4.5 5.5a1.8 1.8 0 0 1 1.8-2z"/>'),
  menu: wrap('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  fechar: wrap('<path d="m6 6 12 12M18 6 6 18"/>'),
};

export const icone = (nome) => icones[nome] || '';
