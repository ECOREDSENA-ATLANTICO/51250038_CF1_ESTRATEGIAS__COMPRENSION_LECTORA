<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Concepto de lectura.
    
    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/1.png', alt='Imagen decorativa') 
      .col-lg-7
        p Identificar palabras importantes mientras se lee, es una estrategia que permite ayudar a encontrar la idea principal del texto.  
        .cajon.bgr_2.p-4.mb-4
          p.mb-0 La lectura es una práctica sociocultural asociada a procesos cognitivos y comunicativos. Cuando se lee se descodifican, comprenden e interpretan signos: se interactúa con el texto. Acercarse a un texto implica: reconocer un código semiótico (el alfabeto y sus combinaciones, por ejemplo); identificar la intención comunicativa y las ideas de un autor; y construir una posición personal frente a lo propuesto en el texto.
        p De acuerdo con Cassany (2006), leer es un proceso de comprensión que involucra tres dimensiones: una lingüística, una psicolingüística y una sociocultural. En la primera, el lector recupera los significados de las unidades textuales (palabras, colores, formas, etc.). En la dimensión psicolingüística, el lector construye el sentido del texto: “va más allá de las palabras”. Esta actividad consiste en aportar conocimientos, hacer inferencias, formular, verificar y reformular hipótesis. 

    p Finalmente, el lector contextualiza el texto a fin de entender las condiciones socio-históricas que le dieron origen (lugar, autor, época, situación social, económica, cultural y política). A partir de esto, se crean acuerdos que se entienden como puntos intermedios o desacuerdos con el texto, y, por ende, con su autor.
    p.mb-5 Los textos deben comprenderse desde la diversidad que ofrece el código y el soporte. En la actualidad, existen infinidad de textos, así como infinidad de lectores. Es por esto por lo que encontrará, según (García, 2007, pág. 80):

    .bg_img
      .row.mb-5.justify-content-center.p-4
        .col-lg-5.text-white
          p.mb-0 <em>Lectores de papiros.</em>
          p.mb-0 <em>Sermones en los templos.</em>
          p.mb-0 <em>Poesía en público.</em> 
          p.mb-0 <em>Discursos políticos.</em>
          p.mb-0 <em>Libros.</em>
          p.mb-0 <em>Revistas.</em>
          p.mb-0 <em>Cómics.</em>
          p.mb-0 <em>Subtítulos de películas.</em>
          p.mb-0 <em>Grafitis.</em>
          p.mb-0 <em>Carteles publicitarios.</em>
          p.mb-0 <em>Anuncios publicitarios.</em>
          p.mb-0 <em>Anuncios luminosos</em>.
          p.mb-0 <em>Cartas que se envían por correo ordinario.</em> 
          p.mb-0 <em>Instrucciones para usar una medicina o un aparato electrónico.</em> 
          p.mb-0 <em>Lectores de información en Internet.</em>
          p.mb-0 <em>Blogs.</em>
          p.mb-0 <em>Cartas enviadas electrónicamente.</em>
          p.mb-0 <em>Faxes.</em>
          p.mb-0 <em>Microfilmes.</em>
          p.mb-0 <em>Mensaje en el móvil.</em> 
        .col-lg-5.align-content-center
          figure
            img(src='@/assets/curso/temas/tema1/2.png', alt='Imagen decorativa') 
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
