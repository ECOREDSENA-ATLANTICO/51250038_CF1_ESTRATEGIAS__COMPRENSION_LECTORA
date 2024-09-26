<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Géneros discursivos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Los textos se realizan en situaciones sociales concretas, con fines específicos y estructuras particulares. Cuando un grupo de textos comparte estas características se vincula a un género discursivo. En otras palabras, los textos tienen nombre, y éste se asigna teniendo en cuenta el ámbito de producción, la intención comunicativa y la estructura textual. 

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 2. 
      span <em>Los textos tienen nombre</em> 
    
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota: Sena.
        thead
          tr
            th.bgr_6 Ámbito
            th.bgr_6 Intención comunicativa
            th.bgr_6 Estructura textual
            th.bgr_6 Lenguaje
            th.bgr_6 Genero discursivo
        tbody.text-center
          tr
            th Académico
            td Argumentar.
            td Propuesta de tesis, desarrollo de argumentos y conclusión.
            td Léxico técnico, claro, pero no necesariamente sencillo.
            td Ensayo.
          tr
            th Académico
            td Presentar los resultados de investigación.
            td Introducción, justificación, metodología, resultados, etc.
            td Léxico académico, claro y descriptivo.
            td Informe/artículo de investigación.
          tr
            th Periodístico
            td Presentar un hecho importante en la sociedad.
            td Introducción, desarrollo y cierre.
            td Léxico coloquial, claro y expositivo.
            td Noticia.
    
    div.mb-5.mt-5(data-aos="fade-right")
      h3.bgr_12.text-white.position-relative ¿Por qué es necesario conocer el género discursivo?
        img.pst(src='@/assets/curso/temas/tema2/2.svg', alt='')
    
    .bg_img_3
      p.mb-5 El género discursivo proporciona pistas al lector sobre el texto que encontrará. Si es un ensayo, el texto (corto o extenso) estará lógicamente estructurado y tendrá fines argumentativos; si es una noticia, el texto (narrativo) será corto, y su función, será informar; y si es una novela, el texto (narrativo) será extenso y tendrá objetivos diversos (criticar una época, por ejemplo). De acuerdo con Cassany (2008): 

      .row.mb-5.justify-content-center
        .col-lg-10(data-aos="zoom-in")
          .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
            .bloque-texto-f__comillas
              i.fas.fa-quote-left
              i.fas.fa-quote-right
            h4.text-regular.bloque-texto-f__texto Hay muchos ejemplos de géneros según la disciplina: los géneros periodísticos de información (noticia, reportaje) y de opinión (columna, editorial), los géneros académicos (apuntes, examen, manual), los jurídicos (ley, norma) y judiciales (demanda, sentencia), los administrativos (instancia, certificado), los comerciales (factura, catálogo), los científicos de investigación (artículo, reseña), etc. A continuación, se encuentran algunos tipos de géneros discursivos:
            .bloque-texto-f__autor.mb-3
              h3.mb-0 Cassany
            .bloque-texto-f__avatar
              .bloque-texto-f__avatar__img
                img(src='@/assets/curso/temas/tema2/4.png', alt='Texto que describa la imagen')
    
    TabsA.color-secundario.mb-5
      .tarjeta.text-center.bgr_8.p-5(titulo="Poesía (ámbito literario artístico)")
        h4 Ritornelo
        p.mb-0 “Esta rosa fue testigo”
        p.mb-0 De éste, que, si amor no fue,
        p.mb-0 Ninguno otro amor sería.
        p.mb-0 Esta rosa fue testigo
        p.mb-0 ¡De cuando te diste mía!
        p.mb-0 El día, ya no lo se
        p.mb-0 (Sí lo sé, mas no lo digo)
        p.mb-0 Esta rosa fue testigo.
        p.mb-0 De tus labios escuche
        p.mb-0 La más dulce melodía
        p.mb-0 Esta rosa fue testigo:
        p.mb-0 ¡Todo en tu ser sonreía!
        p.mb-0 Todo cuanto yo soñé
        p.mb-0 De ti, lo tuve conmigo…
        p.mb-0 Esta rosa fue testigo.
        p.mb-0 En tus ojos naufragué
        p.mb-0 ¡donde la noche cabía!
        p.mb-0 Esta rosa fue testigo
        p.mb-0 Tu fresca boca besé,
        p.mb-0 ¡Donde triscó la alegría!
        p.mb-0 Esta rosa fue testigo
        p.mb-0 De tu amorosa agonía
        p.mb-0 Cuando del amor gocé
        p.mb-0 ¡La vez primera contigo!
        p.mb-0 Esta rosa fue testigo.
        p.mb-0 “Esta rosa fue testigo”
        p.mb-0 De éste, que, si amor no fue,
        p.mb-0 Ninguno otro amor sería.
        p.mb-0 Esta rosa fue testigo
        p.mb-0 ¡De cuando te diste mía!
        p.mb-0 El día, ya no lo se
        p.mb-0 - Sí lo sé, mas no lo digo-
        p.mb-0 Esta rosa fue testigo.

      .tarjeta.bgr_9.p-5(titulo="Crónica ámbito periodístico")
        h4 El Juramento
        p Y entonces resolví asistir al estadio. Como era un encuentro más sonado que todos los anteriores, tuve que irme temprano. Confieso que nunca en mi vida he llegado tan temprano a ninguna parte y que de ninguna tampoco he salido tan agotado. Alfonso y Germán no tomaron nunca la iniciativa de convertirme a esa religión dominical del fútbol, con todo y que ellos debieron sospechar que alguna vez me iba a convertir en ese energúmeno, limpio de cualquier barniz que pueda ser considerado como el último rastro de civilización, que fui ayer en las graderías del municipal. El primer instante de lucidez en que caí en la cuenta de que estaba convertido en un hincha intempestivo fue cuando advertí que durante toda mi vida había tenido algo de que muchas veces me había ufanado y que ayer me estorbaba de una manera inaceptable: el sentido del ridículo. Ahora me explico por qué esos caballeros habitualmente tan almidonados se sienten como un calamar en su tinta cuando se colocan, con todas las de la ley, su gorrita a varios colores.
        p Es que, con ese solo gesto, quedan automáticamente convertidos en otras personas, como si la gorrita no fuera sino el uniforme de una nueva personalidad. No sé si mi matrícula de hincha esté todavía demasiado fresca para permitirme ciertas observaciones personales acerca del partido de ayer, pero como ya hemos quedado de acuerdo en que una de las condiciones esenciales del hinchaje es la pérdida absoluta y aceptada del sentido del ridículo, voy a decir lo que vi --o lo que creí ver ayer tarde—para darme el lujo de empezar bien temprano a meter esas patas deportivas que bien guardadas me tenía. En primer término, me pareció que el Junior dominó a Millonarios desde el primer momento. Si la línea blanca que divide la cancha en dos mitades significa algo, mi afirmación anterior es cierta, puesto que muy pocas veces pudo estar la bola, en el primer tiempo, dentro de la mitad correspondiente a la portería del Junior. (¿Qué tal va mi debut como comentarista de fútbol?) …
      .tarjeta.bgr_9.p-5(titulo="Ley (ámbito legislativo)")
        h3 Código de infancia y adolescencia
        h4 Principio y definiciones 
        p Artículo 1º. Finalidad. Este Código tiene por finalidad garantizar a los niños, a las niñas y a los adolescentes su pleno y armonioso desarrollo para que crezcan en el seno de la familia y de la comunidad, en un ambiente de felicidad, amor y comprensión. Prevalecerá el reconocimiento a la igualdad y la dignidad humana, sin discriminación alguna. Artículo 2º. Objeto. El presente Código tiene por objeto establecer normas sustantivas y procesales para la protección integral de los niños, las niñas y los adolescentes, garantizar el ejercicio de sus derechos y libertades consagrados en los instrumentos internacionales de derechos humanos, en la Constitución Política y en las leyes, así como su restablecimiento. Dicha garantía y protección será obligación de la familia, la sociedad y el Estado. 
      .tarjeta.bgr_9.p-5(titulo="<em>Cómic</em> (periodístico artístico)")
        h4 Manoseo electoral
        figure
          img(src='@/assets/curso/temas/tema2/6.png', alt='Imagen decorativa')
    
    div.mb-5.mt-5(data-aos="fade-right")
      h3.bgr_3.text-white.position-relative Tipos de texto
        img.pst(src='@/assets/curso/temas/tema2/2.svg', alt='')
      
    p.mb-5 De acuerdo con Werlich (citado en Alexopoulou, s.f.), los textos se clasifican en narrativos, argumentativos, descriptivos, expositivos e instructivos. Cada tipo de texto tiene características discursivas particulares y responden a intenciones definidas por el autor (narrar, argumentar, informar, etc.). Según Alexopoulou, (s.f.), no se puede encasillar un texto como puramente descriptivo, narrativo, etc., ya que es un conjunto de secuencias que articula varios tipos. 

    p.text-center.text-bold Las estructuras de secuencia predominantes son las siguientes:

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 3. 
      span <em>Tipos de estructuras</em> 
    
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota: Modelo de Werlich (1976).
        thead
          tr
            th.bgr_6 Tipo de texto
            th.bgr_6 Finalidad del autor
            th.bgr_6 Ejemplo
        tbody.text-center
          tr
            th Narrativo
            td Expresar hechos desarrollados en el tiempo.
            td Miro el reloj. Ya son las doce de la noche; aunque mañana es día de trabajo, no aguanto las ganas de hablar con ella. Quiero mostrarle que yo también puedo completar su felicidad - aunque no esté muy seguro de cómo hacerlo- .
          tr
            th Argumentativo
            td Expresar posiciones y juicios de valor.
            td La inequidad y otras realidades sociales predeterminadas por la ubicación geográfica, o mejor, geopolítica, no existirían si se garantizara la vida y las condiciones para llevarla dignamente.
          tr
            th Expositivo
            td Expresar representaciones conceptuales (análisis y síntesis).
            td Un cuadrado es una figura geométrica con cuatro lados.
          tr
            th Descriptivo
            td Expresar ocurrencias y cambios en el espacio.
            td La estación del metro está ubicada una calle debajo de la torre Eiffel.
          tr
            th Instructivo
            td Indicar acciones para el comportamiento del hablante o destinatario.
            td Para preparar un ajiaco, siga los siguientes pasos:1. Reúna los ingredientes.

    div.mb-5.mt-5(data-aos="fade-right")
      h3.bgr_3.text-white.position-relative El proceso de descodificación
        img.pst(src='@/assets/curso/temas/tema2/2.svg', alt='')

    p.mb-5 Leer las líneas, es decir, descodificar el código, implica recuperar el significado de las unidades y de sus relaciones. Esto requiere del conocimiento de la lengua (o del sistema de signos), pues de no ser así, se presentaría la siguiente situación: 

    .tarjeta.bgr_9.mb-5
      .row.justify-content-center.p-4
        .col-lg-10(data-aos="zoom-out")
          figure
            img(src='@/assets/curso/temas/tema2/7.svg', alt='Imagen decorativa') 
    
    p.mb-5 Si el lector no conoce el sistema de signos, que en este caso representa al coreano, es casi imposible que pueda saber qué dice el texto: (traducción: “no sé hablar ni leer coreano”).

    p.text-center.text-bold Para entender el significado del texto, el lector debe conocer los siguientes aspectos:

    .bg_img_4
      .tarjeta--container.row.mb-5
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/9.png', alt='Texto que describa la imagen')
           
          h2.text-center Semántica
          p Hace alusión al significado de las palabras, es decir, lo que denotan, a lo que se refieren. El conocimiento del significado es sumamente importante, puesto que permite reconstruir el mensaje del texto. Puede que alguien reconozca los grafemas y sus combinaciones, pero si no recupera completamente el significado de cada palabra, el proceso de lectura puede fracasar. Para ilustrar:
          ul.bgr_11.lista-ul--color.fa-ul
            li 
              i.lista-ul__vineta
              span.bgr_10 León: 
              span felino, mamífero, cuadrúpedo, salvaje, de gran tamaño, etc.
            li 
              i.lista-ul__vineta
              span.bgr_10 Gato: 
              span felino, mamífero, cuadrúpedo, doméstico, pequeño, etc. 
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .col-md.tarjeta.color-acento-contenido.p-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/10.png', alt='Texto que describa la imagen')
            
          h2.text-center Sintaxis
          p Se refiere al conocimiento de la relación entre las unidades y sus funciones. El orden de los factores y el modo en que alteran el producto:
          ul.bgr_11.lista-ul--color.fa-ul
            li 
              i.lista-ul__vineta
              | Los <em>cocker</em> son perros muy afectuosos con el ser humano.
            li 
              i.lista-ul__vineta
              | El ser humano es muy afectivo con los perros <em>cocker</em>.
            li 
              i.lista-ul__vineta
              | ¿Los <em>cocker</em> son perros muy afectuosos con el ser humano?
            li 
              i.lista-ul__vineta
              | ¡Los <em>cocker</em> son perros muy afectuosos con el ser humano!

    
    .row.justify-content-center
      .col-lg-9.mb-3
        div.mb-5.mt-5
          h3.bgr_3.text-white.position-relative Conclusiones
            img.pst(src='@/assets/curso/temas/tema2/2.svg', alt='')
        p La lectura es una actividad que trasciende la simple descodificación de palabras, requiriendo que el lector interprete el contenido implícito y explícito del texto. Un buen lector debe entender tanto lo que se presenta de manera explícita como lo que está implícito entre las líneas, considerando la perspectiva del autor. Esta práctica favorece el desarrollo del pensamiento, el lenguaje y la cultura. 
        .cajon.bgr_2.p-4.mb-4
          p.mb-0 Para una lectura efectiva, se recomienda definir objetivos claros, establecer tiempos y espacios adecuados, y seleccionar textos que se alineen con las expectativas del lector. Antes de profundizar en el texto, es útil ojearlo para activar conocimientos previos y definir objetivos de lectura. Además, es crucial identificar el género y la tipología del texto para comprender mejor su contexto y las intenciones del autor. El conocimiento de la lengua escrita facilita la correcta interpretación de los significados.
      .col-md-8.col-lg-3.align-content-center(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/11.png', alt='Imagen decorativa') 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
