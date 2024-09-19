export default {
  global: {
    componenteFormativo: 'La lectura y su importancia.',
    descripcionCurso:
      'En este componente formativo, se explora el concepto de lectura, sus tipos y beneficios. Se presentan estrategias para enriquecer la experiencia de lectura y se reflexiona sobre el proceso personal e individual de lectura. Desde el enfoque inicial hasta la comprensión del contenido. El objetivo es entender el texto a nivel literal y mejorar la efectividad en la lectura.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Concepto de lectura.',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Géneros discursivos.',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3. Tipos de lectura',
      referencia:
        'Ecosistema recursos educativos (2021). SENA [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cfme4rgalDI',
    },
  ],
  glosario: [
    {
      termino: 'Código',
      significado: 'sistema de signos convencionales empleados para comunicar.',
    },
    {
      termino: 'Comprensión lectora',
      significado:
        'proceso mental en el cual se descodifica, clasifica, relaciona, infiere y Analizar información de un texto con el fin elaborar una interpretación propia del lector.',
    },
    {
      termino: 'Fonología',
      significado:
        'rama de la lingüística que describe los sonidos de las lenguas.',
    },
    {
      termino: 'Inferir',
      significado:
        'deducir información implícita de un discurso. Sacar una conclusión definitiva de algo más.',
    },
    {
      termino: 'Interpretar',
      significado:
        'acción mediante la cual se halla y se explica el sentido general de un texto. Interpretar depende de un proceso de análisis profundo en el que se deben encontrar marcadores tanto formales como contextuales de un escrito.',
    },
    {
      termino: 'Lenguaje',
      significado: 'facultad del ser humano para comunicarse.',
    },
    {
      termino: 'Morfología',
      significado:
        'campo de la lingüística que describe la formación y estructura de las palabras.',
    },
    {
      termino: 'Psicolingüística',
      significado:
        'rama de la psicología que se encarga del estudio de los procesos psicológicos y neurológicos involucrados en el lenguaje. Para la comprensión lectora se usan varios procesos psicolingüísticos que permiten un proceso óptimo para comprender un texto.',
    },
    {
      termino: 'Semántica',
      significado:
        'disciplina que estudia los significados y el sentido de los signos, en particular, de las palabras y textos.',
    },
    {
      termino: 'Semiótica',
      significado: 'ciencia que se encarga de estudiar los signos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexopoulou, A. (s.f.). El enfoque basado en los géneros textuales y la evaluación de la competencia discursiva. Universidad Nacional y Kapodistríaca de Atenas.',
      link:
        'http://cvc.cervantes.es/ensenanza/biblioteca_ele/asele/pdf/21/21_0097.pdf ',
    },
    {
      referencia:
        'Cassany. D. (2003) aproximaciones a la lectura critica: teoría, ejemplos y reflexiones. Tarbiya, revista en investigación e innovación Aguirre, M., Camacho, T., Flórez, T., Gaibao, D., Murcia, G., & Pasive, Y. (2012). Estrategias pedagógicas en el ámbito educativo.',
    },
    {
      referencia:
        'Cassany, D. (2006). Tras las líneas: sobre la lectura contemporánea. Barcelona, España: Anagrama.',
    },
    {
      referencia:
        'Cassany. D. (2008). Metodología para trabajar con géneros discursivos. Universitat Pompeu Fabra.',
      link:
        'http://repositori.upf.edu/bitstream/handle/10230/21506/Cassany_LIBURUAehuei08-02.pdf?sequence=1',
    },
    {
      referencia:
        'Fillola, A. (2008). Función de la literatura infantil y juvenil en la formación de la competencia literaria. Biblioteca Virtual Miguel de Cervantes.',
    },
    {
      referencia:
        'García, N. (2007). Lectores, espectadores e internautas. Barcelona, España: Gedisa.',
    },
    {
      referencia:
        'Mendoza, A. (2008). Función de la literatura infantil y juvenil en la formación de la competencia literaria. Biblioteca Virtual Miguel de Cervantes.',
    },
    {
      referencia: 'Mesnager, J. (1997). Lecture et compréhension.',
      link:
        'http://ameds.free.fr/conferences/rtf-pdf/mesnager%20lecture%20et%20compr%E9hension.pdf',
    },
    {
      referencia: 'Mesnager, J. (1997). Lecture et compréhension.',
    },
    {
      referencia:
        'Noguerol, A. (2002). Pensar para leer y leer para pensar: la lectura como instrumento para el aprendizaje en el mundo XXI. XXII Congreso de Lingüística, Cali, 7 al 9 de noviembre de 2002, Universidad del Valle.',
    },
    {
      referencia:
        'Pennac, D. (1992) Como una novela. Joaquín Jordá (trad.). Barcelona, España: Anagrama.',
    },
    {
      referencia:
        'Tabla, A. (2012). La lectura y la escritura en los procesos formativos: el papel de docente (tesis de grado). Universidad Minuto de Dios, Bogotá.',
      link:
        'http://repository.uniminuto.edu:8080/jspui/bitstream/10656/2408/1/TELEC_TablaRicoFabioAndres_2012.pdf',
    },
    {
      referencia:
        'Real Academia Española. (2010). Ortografía de lengua española. Madrid, España: Planeta.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
