<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-3 El componente formativo, la lectura y su importancia; la lectura es una de las habilidades más fundamentales en el proceso de aprendizaje y desarrollo personal. No solo es una puerta de entrada al conocimiento, sino que también juega un papel crucial en la formación de la mente crítica, la comprensión del mundo y el desarrollo de la imaginación. En el contexto educativo y académico la lectura no se limita a la decodificación de palabras y frases, sino que implica la capacidad de comprender, analizar y reflexionar sobre lo que se ha leído. Bienvenido a este componente formativo:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
