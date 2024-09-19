<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La lectura es mucho más que simplemente descifrar palabras; implica interpretar lo que está "entre y detrás de las líneas" y adoptar una postura frente a la propuesta del autor, ya sea en un cómic, una publicidad, una novela, etc. Esta práctica enriquece el pensamiento, el lenguaje y la cultura. Para aprovecharla al máximo, es útil definir objetivos, tiempos y textos adecuados. El proceso de lectura comienza con una revisión inicial para activar conocimientos previos y ajustar expectativas, seguido por la identificación del género y la estructura del texto para comprender el contexto y las intenciones del autor. Además, un buen conocimiento de la lengua escrita facilita la correcta interpretación de los significados.

    .row.justify-content-center.bgr.p-4
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt= "La síntesis del componente formativo La lectura y su importancia, incluye el concepto de lectura, la importancia de la lectura, los tipos de lectura, las condiciones para leer, la prelectura, los géneros discursivos, los tipos de texto y el proceso de descodificación.")
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
